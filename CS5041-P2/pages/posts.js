
import { useState, useEffect } from 'react'
import { View, Button } from "react-native";
import { styles } from "../styles/post-style"
import { useAuthState } from "react-firebase-hooks/auth";
import { signInAnonymously } from "firebase/auth";
import { auth, database } from '../firebase';
import { ActivityIndicator, Text } from "react-native-paper";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ref } from 'firebase/database'
import { StatusBar } from 'expo-status-bar';
import { useList } from 'react-firebase-hooks/database';
// import { Container as FABContainer, Button as FAB } from 'react-floating-action-button'
import { FAB } from '@rneui/themed'
// import { Fab } from "@mui/material"
import Post from '../components/post';

// this should be the frame for the "posts" page
// this should fetch posts from the database to display a scrolling view of posts starting from the most recent
// advanced: scrolling to the bottom triggers more posts to load (should be a framework allowing lazy loading like this)
// basic: simply pages showing X number of posts

export default function Main({ navigation }) {
    // hooks for auth
    const [user, authLoading, authError] = useAuthState(auth);

    // login
    useEffect(() => {
        signInAnonymously(auth);
    }, []);

    // Get all objects under /public and listen for changes
    const [snapshots, dbLoading, dbError] = useList(user ? ref(database, '/public') : null);

    const [userItem, setUserItem] = useState(() => localStorage.getItem("username"));

    const goToCreate = () => {

        if (userItem == null) {
            alert("You must set a username before creating a post!")
            navigation.push("LoginCreate")
            return
        }

        navigation.push("CreatePost")
    }

    const getPostList = (snapshots) => snapshots.flatMap(el => Object.entries(el.val())).sort((a, b) => b[1].created - a[1].created)

    return (
        <View>
            <View style={{justifyContent:"space-between", flexDirection:"row"}}>
                <View></View>
                {authLoading || dbLoading || !snapshots ?
                    <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <ActivityIndicator size="large"></ActivityIndicator>
                        <Text style={{ margin: 10 }}>loading...</Text>
                    </SafeAreaView> :
                    <ScrollView style={{maxWidth:1200}}>
                        {/* Maps the nested list of message to a flat array and sort by created time */}
                        {getPostList(snapshots).map((el, i) =>
                            <Post key={i} iMax={snapshots.flatMap(el => Object.entries(el.val())).length} el={el} message={el[1]}></Post>
                        )}
                    </ScrollView>}
                <View></View>
                <StatusBar style="auto" />
            </View>
            <FAB onClick={goToCreate} icon={{ name: 'add', color: 'white' }} placement="right" title="Create Post" styles={{color:"#003377"}}/>
        </View>
    )
}