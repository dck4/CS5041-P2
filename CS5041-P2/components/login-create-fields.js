
// login with a username
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import {  Button, TextInput } from "react-native-paper";
import React from "react";


export default function LoginCreateFields ({ navigation }) {


    const [username, setUsername] = React.useState('');
    
    const handleOnCreatePress = () => {

        // the username cannot be empty      
        if (username === '' ) {
            alert('the username cannot be empty')
        } else {
            localStorage.setItem("username", username);
            // check storage
            //console.log(localStorage.getItem("username"));

            // set the username and go back to post board
            navigation.push('Home');   
        }
    }


    return (
        <SafeAreaView>
            {/* setUsername can only be done here */}
            <TextInput 
                label="Username" 
                value={username}
                onChangeText={username => setUsername(username)} 
            ></TextInput>
            <StatusBar style="auto" />
            <Button onPress={handleOnCreatePress}>Create Username</Button>
         </SafeAreaView>
    )
}
