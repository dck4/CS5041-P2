
// this should return the form for creating a post - title, game, body and post/cancel buttons
// creating a post sends a message to the database

import { useEffect, useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { ref, get, push, child, serverTimestamp } from 'firebase/database'
import { auth, database } from '../firebase';
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput } from "react-native-gesture-handler";
import { Button, Text } from "react-native-paper";
import { useAuthState } from "react-firebase-hooks/auth";
import { signInAnonymously } from "firebase/auth";
import { ActivityIndicator } from "react-native-web";
import { postkey } from "../keys";
import { useNavigate } from "react-router-native";

export default function CreatePostFields({  }) {
    const navigate = useNavigate

    // hooks for auth
    const [user, authLoading, authError] = useAuthState(auth);

    // login
    useEffect(() => {
        signInAnonymously(auth);
    }, []);

    const [title, setTitle] = useState("");
    const [game, setGame] = useState("");
    const [body, setBody] = useState("");
    // get the username
    const [userItem, setUserItem] = useState(() => localStorage.getItem("username"));

    const handleOnPostPress = () => {

        if (title === '' || game === '' || body === '') {
            alert("the title, game and content cannot be empty!")
        } else {
            const postData = {
                author: userItem,
                game: game,
                body: body
            }

            push(child(ref(database), `/public/`), {
                type: postkey,
                created: serverTimestamp(),
                modified: serverTimestamp(),
                message: title,
                content: JSON.stringify(postData)
            })

            // follow the tutorial here.
            setTitle("");
            setGame("");
            setBody("");

            // check for writing, if the post board finished, just delete it.
            get(child(user ? ref(database): null, `/public/${user.uid}`)).then((snapshot) => {
                if (snapshot.exists()) {
                    console.log(snapshot.val());
                }
            })

            // jump to the post board and the new post will be showed
            navigate('/');
        }   
    }

    const handleOnCancelPress = () => {

        // delete all textinput and go back to the post board.
        // setTitle("");
        // setGame("");
        // setBody("");

        navigate('/');
    }

    return (
        <SafeAreaView>
            {/* waiting for signing in */}
            {authLoading ? 
                <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <ActivityIndicator size="large"></ActivityIndicator>
                    <Text>loading...</Text>
                </SafeAreaView> :
                <>
                    <TextInput 
                        label="Title"
                        value={title}
                        onChangeText={title => setTitle(title)}></TextInput>
                    <TextInput
                        label="Game"
                        value={game}
                        onChangeText={game => setGame(game)}></TextInput>
                    <TextInput
                        label="Content"
                        value={body}
                        onChangeText={body => setBody(body)}></TextInput>
                    <StatusBar style="auto" />
                    <Button onPress={handleOnPostPress}>Post</Button>
                    <Button onPress={handleOnCancelPress}>Cancel</Button>
                </>
            }
        </SafeAreaView>
    )
}
