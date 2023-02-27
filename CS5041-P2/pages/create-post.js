
import { Text, View } from "react-native";

// the page for creating a new account

export function CreatePost({ navigation }) {
    return (
        <View>
            <Text>Create a post</Text>
            <Pressable
                onPress={() => navigation.navigate('LoginCreate')}
                style={{
                backgroundColor: 'plum',
                padding: 10,
                marginBottom: 10,
                marginTop: 10,
                }}>
                <Text>Login</Text>
            </Pressable>
        </View>
    )
}