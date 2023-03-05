
// login with a username
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import {  Button, TextInput } from "react-native-paper";
import React from "react";
import { useNavigate } from 'react-router-native'
import { useDispatch } from "react-redux";
import { loggedin } from "../store";
import logInStyles from "../styles/login-style";

export default function LoginCreateFields ({  }) {

    const navigate = useNavigate()

    const [username, setUsername] = React.useState('');

    const dispatch = useDispatch()
    
    const handleOnCreatePress = () => {

        // the username cannot be empty      
        if (username === '' ) {
            alert('the username cannot be empty')
        } else {
            dispatch(loggedin(username));
            // check storage
            //console.log(localStorage.getItem("username"));

            // set the username and go back to post board
            navigate('/');   
        }
    }


    return (
        <SafeAreaView style={logInStyles.view}>
            {/* setUsername can only be done here */}
            <TextInput 
                label="Username" 
                value={username}
                mode="outlined"
                style={logInStyles.usernameInput}
                onChangeText={username => setUsername(username)} 
            ></TextInput>
            <StatusBar style="auto" />
            <Button style={logInStyles.button} onPress={handleOnCreatePress}>Login</Button>
         </SafeAreaView>
    )
}
