// this should return the form used to log in - the username and password fields, and the "create" and "log in" buttons
// create sends a message to the database adding the user and setting a UID

// log in requests data from the database, comparing the username and password hash to verify log in
// the UID is stored in local storage

import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Text, Button, TextInput } from "react-native-paper";
import { auth, database } from '../Firebase';
import { signInAnonymously } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useEffect, } from "react";
import { ActivityIndicator } from "react-native-web";
import React from "react";
import { child, push, ref, serverTimestamp } from "firebase/database";


export default function LoginCreateFields () {

    // hooks for auth state
    const [user, authLoading, authError] = useAuthState(auth);
    
    // Log in to Firebase
    useEffect(() => {
        signInAnonymously(auth);
    }, []);

    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');    
    
    const handleOnCreatePress = () => {
        // i fail to use auth-sign in/up function, error: auth/operation-not-allowed
        
        // write the username and password to the private as the user information
        // the username and password cannot be empty
        
        if (username === '' || password === '') {
            alert('the username and password cannot be empty')
        } else {
            push(child(user ? ref(database): null, `/private/${user.uid}`), {
                type: 'text',
                created: serverTimestamp(),
                modified: serverTimestamp(),
                message: username,
                content: ""
            }, {
                type: 'text',
                created:serverTimestamp(),
                modified: serverTimestamp(),
                message: password,
                content: ""
                }) 
            setUsername("");
            setPassword("");
            // create and go to posts
            navigation.navigate('Home');   
        }
    }

    const handleOnLoginPress = () => {
        // read the data from private path and match with textinput
        // question idk how to get same uid at each time

        if (username === '' || password === '') {
            alert('the username and password cannot be empty')
        } else {

        }
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
                    label="Username" 
                    value={username} 
                    onChangeText={username => setUsername(username)}></TextInput>
            {/* can add a 'eye' for showing password */}
                    <TextInput 
                        label="Password" 
                        secureTextEntry 
                        value={password} 
                        onChangeText={password => setPassword(password)}></TextInput>
                    <StatusBar style="auto" />
                    <Button >Sign in</Button>
                    <Button onPress={handleOnCreatePress}>Create</Button>
                </>
                }
         </SafeAreaView>
    )
}
