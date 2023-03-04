
import { useState, useEffect } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import { Button } from 'react-native-paper';
import { styles } from "../styles/main-style.js"
import { useSelector, useDispatch } from 'react-redux';
import { loggedout } from '../store.js';

const selectUsername = state => state.username

export default function LogButton({ navigate }) {

    // get and subscribe to the shared username state
    const username = useSelector(selectUsername)

    // create a copy as a local variable - we will use this for the display text
    const [logout, setLogout] = useState(false)
    
    const dispatch = useDispatch()

    const logOut = () => {
        setLogout(false)
        dispatch(loggedout())
    }

    return (
        <View>
            {username == null ? 
            (<Button style={styles.logbutton} 
                onPress={() => navigate("/LoginCreate")}>
                <Text style={styles.logbuttontext}>Log In</Text>
            </Button>) :
            (<Button style={styles.logbutton} 
                onPress={logOut}
                // or the username when not hovering
                onMouseLeave={() => setLogout(false)}
                // change text to display "log out" when hovering
                onMouseEnter={() => setLogout(true)} >
                <Text style={styles.logbuttontext}>{logout ? "Log Out" : username}</Text>
            </Button>)}
        </View>
    )
}