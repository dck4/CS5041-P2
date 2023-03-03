
// meta-information such as the username and date posted

import { View } from "react-native";
import { Text } from "react-native-paper";
import { styles } from "../../styles/post-style"


export function Meta({ author, date }) {
    let formatdate = new Date(date)
    let datestring = formatdate.toDateString()

    return(
        <View>
            <Text style={[styles.metatext, styles.username]}>{author == null ? "Anyonymous" : author}</Text>
            {/* <Text style={[styles.metatext, styles.date]}>Date posted:</Text> */}
            <Text style={[styles.metatext, styles.date]}>{datestring}</Text>
        </View>
    )
}