
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import { Button } from 'react-native-paper';
import LogButton from './log-button';
import { styles } from "../styles/main-style.js"

// this displays the banner at the top of the page
// it should provide a banner, containing the logo and app name,
// as well as a "login" or hover "logout" button displaying the username

export default function Banner({navigation, route, options, back}) {

    return (
        <View style={styles.banner}>
            <Button onPress={navigation.goBack} style={{}}>
                <Text style={styles.back}>↩</Text>
            </Button>
            <Text style={styles.title}>Game Board</Text>
            <LogButton navigation={navigation}></LogButton>
        </View>
    )
}