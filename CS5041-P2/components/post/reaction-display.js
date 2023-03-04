
// should return a display of all reactions on the post

import { View } from "react-native"
import { Button } from "react-native-paper"
import { reactionlist } from "./emojis"


export function Reactions({ reactions }) {
    console.log(reactions)

    let reacts = {}
    if (reactions != undefined) {
        reactions = reactions.map(el => el.reaction)

        reactions.forEach((react) => reacts[react] = (reacts[react] || 0) + 1)

        console.log(reacts)
    }

    return (
        <>
            {reactions != undefined ? 
                <View style={{flexDirection:"row"}}>
                    {Object.entries(reacts).map(([react,count], i) =>
                        <Text style={{fontSize:16,fontFamily:"Raleway"}} key={i}>{react} {count}</Text>
                    )}
                </View>
            :
                <></>
            }
        </>
    )
}