
import { Container } from 'react';
import { getHeaderTitle } from '@react-navigation/elements';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import { Button } from 'react-native-paper';

// this displays the banner at the top of the page
// it should provide a banner, containing the logo and app name,
// as well as a "login" or hover "logout" button displaying the username

export default function Banner({navigation, route, options, back}) {
    const title = getHeaderTitle(options, route.name);

    return (
        <View style={{height:100,width:"100vw",backgroundColor:"#784444",justifyContent:"left",flexDirection:"row"}}>
            <View style={{height:"100%",justifyContent:"center"}}>
                <Button onPress={navigation.goBack}><Text style={{fontSize:28,fontFamily:"Arial"}}>Back</Text></Button>
            </View>
            <View style={{height:"100%",width:"80%",justifyContent:"center"}}>
                <Text style={{fontSize:36,fontFamily:"Arial"}}>Game Board</Text>
            </View>
            <View style={{height:"100%",justifyContent:"center"}}>
                <Button onPress={navigation.push("LoginCreate")}><Text style={{fontSize:36,fontFamily:"Arial"}}>Log In</Text></Button>
            </View>
        </View>
    )
}