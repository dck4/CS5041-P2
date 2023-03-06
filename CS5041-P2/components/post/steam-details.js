
import { View } from "react-native"
import { Text } from "react-native-paper"
import ReactReadMoreReadLess from "react-read-more-read-less";
import { styles } from "../../styles/post-style";


export function SteamDetails({ info }) {

    // if (info != null) console.log(Object.values(info)[0].data)

    // remove all the html and extra whitespace from the game details
    // this lets it display nicely
    const parsedata = (data) => {
        var tmp = data.replace(/(<([^>]+)>)/ig,"\n");
        return tmp.replace(/((\n\s*)+)/g,"\n").replaceAll("&quot;","\"").trim()
    }

    return (
        <View style={styles.gamebox}>
            {/* <Text style={[styles.gametext,styles.title]}>Game Info</Text> */}
            <Text style={[styles.gametext,styles.gamebody]}>
                {info == null 
                    ? "No info found for this game" 
                    : 
                    <View>
                    {/* <Text>{Object.values(info)[0].data.name}</Text> */}
                    {/* image for the game - functions like a title */}
                    <img style={styles.gamegenres} src={Object.values(info)[0].data.header_image} width={200}/>
                    {/* list of game developers */}
                    <Text style={[styles.gamegenres]}>Developed by {Object.values(info)[0].data.developers.join(", ") + "\n"}</Text>
                    {/* list of publishers */}
                    <Text style={[styles.gamegenres]}>Published by {Object.values(info)[0].data.publishers.join(", ") + "\n"}</Text>
                    {/* list of genres */}
                    <Text style={[styles.gamegenres]}>Genres: {Object.values(info)[0].data.genres.map(el => el.description).join(", ") + "\n"}</Text>
                    {/* use ReadMoreReadLess to only display a limited amount of information,
                        so it fits on screen better, but allow the display to be expanded */}
                    <ReactReadMoreReadLess
                        charLimit={200}
                        readMoreText={"Read more ▼"}
                        readLessText={"Read less ▲"}
                    >
                        {parsedata(Object.values(info)[0].data.about_the_game)}
                    </ReactReadMoreReadLess>
                    </View>
                }
            </Text>
        </View>
    )
}