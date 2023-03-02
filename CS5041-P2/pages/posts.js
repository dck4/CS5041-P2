
import { Text, View, Button } from "react-native";
import { firebaseConfig } from "../App";

// this should be the frame for the "posts" page
// this should fetch posts from the database to display a scrolling view of posts starting from the most recent
// advanced: scrolling to the bottom triggers more posts to load (should be a framework allowing lazy loading like this)
// basic: simply pages showing X number of posts

export default function Main({ navigation }) {
    // let postarr = 

    return (
        <View>
            <Text>List of posts</Text>
            <Button
                onPress={() => navigation.navigate('LoginCreate')}
                style={{
                backgroundColor: 'plum',
                padding: 10,
                marginBottom: 10,
                marginTop: 10,
                }}>
                <Text>Login</Text>
            </Button>
        </View>
    )
}