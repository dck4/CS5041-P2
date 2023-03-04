
import { useEffect } from 'react'
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

    // Get all objects under /public and listen for changes
    const [snapshots, dbLoading, dbError] = useList(user ? ref(database, '/public') : null);

    const flatten = (snapshots) => snapshots.flatMap(el => Object.entries(el.val())).sort((a, b) => b[1].created - a[1].created)
    const getPostList = (snapshots) => flatten(snapshots).filter(el => el[1].type == postkey)
    // const getReactions = (snapshots, id) => flatten(snapshots).filter(el => el[1].type == reactionkey && el[1].message == id).map(el => JSON.parse(el[1].content))

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
                        // <Post key={i} iMax={snapshots.flatMap(el => Object.entries(el.val())).length} el={el} message={el[1]}></Post>
                        <Post key={i} el={el}></Post>

                    )}
                </View>
            }
        </View>
    )
}