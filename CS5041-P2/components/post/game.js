
// sub-component of post displaying information about the game - basic is just the name from the data

import { View } from "react-native";
import { Text } from "react-native-paper";
import { styles } from "../../styles/post-style"

export function Game ({ game }) {

    return (
        <View>
            <Text style={[styles.metatext, styles.game]}>{game}</Text>
        </View>
    )
}