
// the main body of the post - the title and text body

import { View } from "react-native";
import { Text } from "react-native-paper";
import { styles } from "../../styles/post-style"


export function PostMain({ title, body }) {
    const parse = require('html-react-parser')

    return(
        <View style={{width:"100%"}}>
            <Text style={[styles.title,styles.maintext]}>{title}</Text>
            <Text style={[styles.body,styles.maintext]}>{parse(body)}</Text>
        </View>
    )
}