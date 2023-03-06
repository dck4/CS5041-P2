
// this should return the form for creating a post - title, game, body and post/cancel buttons
// creating a post sends a message to the database

import { useEffect, useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { ref, get, push, child, serverTimestamp } from 'firebase/database'
import { auth, database } from '../firebase';
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput } from "react-native-paper";
import { Button, Text } from "react-native-paper";
import { useAuthState } from "react-firebase-hooks/auth";
import { signInAnonymously } from "firebase/auth";
import { ActivityIndicator } from "react-native-web";
import { postkey } from "../keys";
import { useNavigate } from "react-router-native";
import createPostStyles from "../styles/create-style";
import {EditorState,convertToRaw} from 'draft-js';
import { Editor } from 'react-draft-wysiwyg'
import draftToHtml from "draftjs-to-html";
import '../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { View } from "react-native";
import { Dimensions } from "react-native";

export default function CreatePostFields({  }) {
    const navigate = useNavigate()

    // hooks for auth
    const [user, authLoading, authError] = useAuthState(auth);

    // login
    useEffect(() => {
        signInAnonymously(auth);
    }, []);

    const [title, setTitle] = useState("");
    const [game, setGame] = useState("");
    const [body, setBody] = useState(() => EditorState.createEmpty());
    // get the username
    const [userItem, setUserItem] = useState(() => localStorage.getItem("username"));

    const handleOnPostPress = () => {

        if (title === '' || game === '' || body === '') {
            alert("the title, game and content cannot be empty!")
        } else {
            const postData = {
                author: userItem,
                game: game,
                // get html text from the raw data of the rich text editor
                body: draftToHtml(convertToRaw(body.getCurrentContent()))
            }

            push(child(user ? ref(database) : null, `/public/${user.uid}`), {
                type: postkey,
                created: serverTimestamp(),
                modified: serverTimestamp(),
                message: title,
                content: JSON.stringify(postData)
            })

            // follow the tutorial here - not strictly necessary as page is navigated away from anyway
            setTitle("");
            setGame("");
            setBody(() => EditorState.createEmpty());

            // check for writing, if the post board finished, just delete it.
            get(child(user ? ref(database) : null, `/public/${user.uid}`)).then((snapshot) => {
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

    const windowDimensions = Dimensions.get('window')
    const [dimensions, setDimensions] = useState(windowDimensions);

    useEffect(() => {
        const subscription = Dimensions.addEventListener(
        'change',
        (window) => {
            setDimensions(window);
        },
        );
        return () => subscription?.remove();
    });

    return (
        <SafeAreaView style={[createPostStyles.view,{height:dimensions.height-95,width:dimensions.width}]}>
            <View/>
            <View style={{width:800}}>
            <Text style={createPostStyles.title}>Create a New Post</Text>
            {/* waiting for signing in */}
            {authLoading ? 
                <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <ActivityIndicator size="large"></ActivityIndicator>
                    <Text>loading...</Text>
                </SafeAreaView> :
                <>
                    {/* input for title */}
                    <TextInput 
                        placeholder="Title"
                        value={title}
                        style={createPostStyles.titleInput}
                        onChangeText={title => setTitle(title)}></TextInput>
                    {/* input for game */}
                    <TextInput
                        placeholder="Game"
                        value={game}
                        style={createPostStyles.titleInput}
                        onChangeText={game => setGame(game)}></TextInput>
                    {/* rich text editor for body */}
                    <Editor placeholder="Body" editorState={body} onEditorStateChange={setBody} editorStyle={createPostStyles.rtf}/>
                    <View style={{flexDirection:"row",width:"100%",justifyContent:"center"}}>
                        <Button style={[createPostStyles.button,createPostStyles.createbutton]} onPress={handleOnPostPress}>
                            <Text style={[createPostStyles.buttontext,createPostStyles.createtext]}>Post</Text></Button>
                        <Button style={createPostStyles.button} onPress={handleOnCancelPress}><Text style={createPostStyles.buttontext}>Cancel</Text></Button>
                    </View>
                    <StatusBar style="auto" />
                </>
            }
            </View>
            <View/>
        </SafeAreaView>
    )
}
