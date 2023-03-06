
// should return a display of all reactions on the post

import { View } from "react-native"
import { Text } from "react-native-paper"


export function Reactions({ reactions }) {
    console.log(reactions)

    // turn the list of reaction messages into counts for each emoji
    let reacts = {}
    if (reactions != undefined) {
        reactions = reactions.map(el => el.reaction)

        reactions.forEach((react) => reacts[react] = (reacts[react] || 0) + 1)

        console.log(reacts)
    }

    return (
        <>
            {reactions != undefined ? 
            // if there are reactions, display all the reactions in a row with their counts
                <View style={{flexDirection:"row"}}>
                    {Object.entries(reacts).map(([react,count], i) =>
                    // use Arial instead of Raleway for nicer number display
                        <Text style={{fontSize:24,fontFamily:"Arial",verticalAlign:"middle"}} key={i}>{react}{count} </Text>
                    )}
                </View>
            :
                <></>
            }
        </>
    )
}