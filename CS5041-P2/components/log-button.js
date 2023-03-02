
import { useState, useEffect } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import { Button } from 'react-native-paper';
import { styles } from "../styles/main-style.js"

export default function LogButton({ navigation }) {
    const [userItem, setItem] = useState(() =>  localStorage.getItem("username"));
    const [username, setUsername] = useState(userItem)

    const handleUsername = (name) => setUsername(name)

    const logOut = () => localStorage.removeItem("username")

    return (
        <View>
            {userItem == null ? 
            (<Button style={styles.logbutton} 
                onPress={() => navigation.push("LoginCreate")}>
                <Text style={styles.logbuttontext}>Log In</Text>
            </Button>) :
            (<Button style={styles.logbutton} 
                onPress={logOut}
                onMouseEnter={() => handleUsername("Log Out")} onMouseLeave={() => handleUsername(userItem)}>
                <Text style={styles.logbuttontext}>{username}</Text>
            </Button>)}
        </View>
    )
}