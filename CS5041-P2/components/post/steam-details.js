
import { View } from "react-native"
import { Text } from "react-native-paper"
import ReactReadMoreReadLess from "react-read-more-read-less";
import { styles } from "../../styles/post-style";


export function SteamDetails({ info }) {

    const parsedata = (data) => {
        var tmp = data.replace(/(<([^>]+)>)/ig,"\n");
        return tmp.replace(/((\n\s*)+)/g,"\n").replaceAll("&quot;","\"").trim()
    }

    return (
        <View style={styles.gamebox}>
            <Text style={[styles.gametext,styles.title]}>Game Info</Text>
            <Text style={[styles.gametext,styles.gamebody]}>{info == null ? "No info found for this game" : 
            <ReactReadMoreReadLess
                charLimit={200}
                readMoreText={"Read more ▼"}
                readLessText={"Read less ▲"}
            >
                {parsedata(Object.values(info)[0].data.about_the_game)}
            </ReactReadMoreReadLess>}</Text>
        </View>
    )
}