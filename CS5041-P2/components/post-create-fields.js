
// this should return the form for creating a post - title, game, body and post/cancel buttons
// creating a post sends a message to the database

import { useEffect, useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { ref, get, push, child, serverTimestamp } from 'firebase/database'
import { auth, database } from '../Firebase';
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput } from "react-native-gesture-handler";
import { Button } from "react-native-paper";
import { useAuthState } from "react-firebase-hooks/auth";
import { signInAnonymously } from "firebase/auth";

// assuming loggin or add a login hook
// error: user is not defined
// add a signin

export default function CreatePostFields() {

    // hooks
    const [user, authLoading, authError] = useAuthState(auth);

    // login
    useEffect(() => {
        signInAnonymously(auth);
    }, []);

    const [title, setTitle] = useState("");
    const [game, setGame] = useState("");
    const [body, setBody] = useState("");

    // can only write one object each time, or can divided in 3 parts.

    const handleOnPostPress = () => {
        if (title === '' || game === '' || body === '') {
            alert("the title, game and content cannot be empty!")
        } else {
            push(child(user ? ref(database) : null, `/public/${user.uid}`), {
                type: 'post',
                created: serverTimestamp(),
                modified: serverTimestamp(),
                message: title,
                content: game + "|" + body
            })

        // can only write one object each time, or can divided in 3 parts.

            setTitle("");
            setGame("");
            setBody("");

            // check for writing
            get(child(user ? ref(database): null, `/public/${user.uid}`)).then((snapshot) => {
                if (snapshot.exists()) {
                    console.log(snapshot.val());
                }
            })
            //navigation.navigate('Home');
        }   
    }

    const handleOnCancelPress = () => {
        navigation.navigate('Home');
    }

    return (
        <SafeAreaView>
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
        </SafeAreaView>
    )
}
