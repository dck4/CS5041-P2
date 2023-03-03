
import { useState, useEffect } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import { Button } from 'react-native-paper';
import { styles } from "../styles/main-style.js"

export default function LogButton({ navigation }) {

    // load the username
    const [userItem, setItem] = useState(() =>  localStorage.getItem("username"));
    // create a copy as a local variable - we will use this for the display text
    const [username, setUsername] = useState(userItem)

    // this is for updating the display text of the button
    const handleUsername = (name) => setUsername(name)

    const logOut = () => {
        localStorage.removeItem("username")
        setItem(null)
    }

    return (
        <View>
            {userItem == null ? 
            (<Button style={styles.logbutton} 
                onPress={() => navigation.push("LoginCreate")}>
                <Text style={styles.logbuttontext}>Log In</Text>
            </Button>) :
            (<Button style={styles.logbutton} 
                onPress={logOut}
                // change text to display "log out" when hovering
                onMouseEnter={() => handleUsername("Log Out")} 
                // or the username when not hovering
                onMouseLeave={() => handleUsername(userItem)}>
                <Text style={styles.logbuttontext}>{username}</Text>
            </Button>)}
        </View>
    )
}