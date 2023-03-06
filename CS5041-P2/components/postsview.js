
import { useState, useEffect } from 'react'
import { signInAnonymously } from "firebase/auth";
import { auth, database } from '../firebase';
import { ref } from 'firebase/database'
import { useList } from 'react-firebase-hooks/database';
import { useAuthState } from "react-firebase-hooks/auth";
import { View } from "react-native";
import { ActivityIndicator, Text } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import Post from '../components/post';
import { postkey, reactionkey } from '../keys';

export function PostList() {
    // hooks for auth
    const [user, authLoading, authError] = useAuthState(auth);

    // login
    useEffect(() => {
        signInAnonymously(auth);
    }, []);
    
    const apikey = "C21C1D532C4B4953D7CCD5F3BDC8D5C1"

    const [gameList, setGameList] = useState(null);

    let invertList = (data) => {
        console.log(data)
        // get the list of apps from the data
        let apps = data.applist.apps
        // the list of apps is an array of {appid:id, name:name}
        // we want it inverted to an object like {name:id}
        let tempList = {}
        apps.forEach((app) => tempList[app.name.replace(/\W/g, '').trim().toLowerCase()] = app.appid)
        console.log(tempList)
        return tempList
    }

    useEffect(() => {
        // GET request using fetch inside useEffect React hook
        fetch(`http://localhost:8080/http://api.steampowered.com/ISteamApps/GetAppList/v0002/?key=${apikey}&format=json`)
            .then(response => response.json())
            .then(data => setGameList(invertList(data)));
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);

    // Get all objects under /public and listen for changes
    const [snapshots, dbLoading, dbError] = useList(user ? ref(database, '/public') : null);

    const flatten = (snapshots) => snapshots.flatMap(el => Object.entries(el.val())).sort((a, b) => b[1].created - a[1].created)
    const getPostList = (snapshots) => flatten(snapshots).filter(el => el[1].type == postkey)
    const getReactions = (snapshots, id) => flatten(snapshots).filter(el => el[1].type == reactionkey && el[1].message == id).map(el => JSON.parse(el[1].content))

    return (
        <View style={{alignSelf:"center",maxWidth:1000,width:"100%"}}>
            {authLoading || dbLoading || !snapshots ?
                <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <ActivityIndicator size="large"></ActivityIndicator>
                    <Text style={{ margin: 10 }}>loading...</Text>
                </SafeAreaView> 
            :
                <View style={{justifyContent:"center",alignItems:"center",width:"100%"}}>
                    {/* Maps the nested list of message to a flat array and sort by created time */}
                    {getPostList(snapshots).map((el, i) =>
                        <Post key={i} el={el} reactions={getReactions(snapshots, el[0])} gameList={gameList}></Post>

                    )}
                </View>
            }
        </View>
    )
}