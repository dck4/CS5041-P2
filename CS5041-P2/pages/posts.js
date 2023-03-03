
import { useState } from 'react'
import { Text, View, Button } from "react-native";
import { styles } from "../styles/post-style"
import { useAuthState } from "react-firebase-hooks/auth";
import { signInAnonymously } from "firebase/auth";
import { auth, database } from '../firebase';

// this should be the frame for the "posts" page
// this should fetch posts from the database to display a scrolling view of posts starting from the most recent
// advanced: scrolling to the bottom triggers more posts to load (should be a framework allowing lazy loading like this)
// basic: simply pages showing X number of posts

export default function Main({ navigation }) {
    // hooks for auth
    const [user, authLoading, authError] = useAuthState(auth);

    // login
    useEffect(() => {
        signInAnonymously(auth);
    }, []);

    // let postarr = 
    const [userItem, setUserItem] = useState(() => localStorage.getItem("username"));

    const goToCreate = () => {

        if (userItem == null) {
            alert("You must set a username before creating a post!")
            navigation.push("LoginCreate")
            return
        }

        navigation.push("CreatePost")
    }

    return (
        <View>
            <Text>List of posts</Text>
            <Button style={styles.FAB} onPress={goToCreate()}>
                <Text>Create Post</Text>
            </Button>
        </View>
    )
}