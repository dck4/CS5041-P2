
// login with a username
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import {  Button, TextInput } from "react-native-paper";
import React from "react";
import { useNavigate } from 'react-router-native'
import { useDispatch } from "react-redux";
import { loggedin } from "../store";
import logInStyles from "../styles/login-style";
import { View } from "react-native";
import { Text } from "react-native-paper";
import { Dimensions } from "react-native";

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

    // get and subscribe to the window dimensions so elements resize appropriately

    const windowDimensions = Dimensions.get('window')
    const [dimensions, setDimensions] = React.useState(windowDimensions);

    React.useEffect(() => {
        const subscription = Dimensions.addEventListener(
        'change',
        (window) => {
            setDimensions(window);
        },
        );
        return () => subscription?.remove();
    });

    return (
        <SafeAreaView style={[logInStyles.view,{height:dimensions.height-95,width:dimensions.width}]}>
            <View/>
            <View>
                <View/>
                {/* setUsername can only be done here */}
                <View style={logInStyles.loginbox}>
                    <Text style={logInStyles.titletext}>Set a Username for your Posts</Text>
                    <TextInput 
                        label="Username"
                        value={username}
                        mode="outlined"
                        style={logInStyles.usernameInput}
                        onChangeText={username => setUsername(username)} 
                    ></TextInput>
                    <StatusBar style="auto" />
                    <Button style={logInStyles.button} onPress={handleOnCreatePress}><Text style={logInStyles.buttontext}>Log In</Text></Button>
                </View>
                <View/>
            </View>
            <View/>
         </SafeAreaView>
    )
}
