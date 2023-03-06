
import { View } from "react-native";
import { Dimensions } from "react-native";
import { useState } from "react";
import { useEffect } from "react";


export function PostsContainer(props) {

    const windowDimensions = Dimensions.get('window')
    const [dimensions, setDimensions] = useState(windowDimensions);

    useEffect(() => {
        const subscription = Dimensions.addEventListener(
        'change',
        (window) => {
            setDimensions(window);
        },
        );
        return () => subscription?.remove();
    });


    return (
        <View style={{height:dimensions.height-95,backgroundColor:"#cac8ce",width:dimensions.width}}>
            {props.children}
        </View>
    )
}