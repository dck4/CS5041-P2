
// styling for the login page

import { StyleSheet } from "react-native-web";

const logInStyles = StyleSheet.create({
    view: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:"#784444",
        flexDirection:"row"
    },

    usernameInput: {
        margin: 20,
        height: 40,
        width: "50%",
        fontSize: 20,
        placeholderTextColor: "grey",
    },

    button: {
        backgroundColor:"#DDDDDD",
        height: 50,
        width: 100,
        borderRadius: 15,
        margin: 10,
        justifyContent: "center"
        
    },

    loginbox: {
        justifyContent: "center",
        alignItems: "center",
        width:800,
        height:400,
        backgroundColor:"#8c7777"
    },

    buttontext: {
        fontFamily:"Raleway",
        fontSize:24
    },

    titletext: {
        fontFamily:"Raleway",
        color:"white",
        fontSize:28
    }
});

export default logInStyles;
