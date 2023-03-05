
// styling for the login page

import { StyleSheet } from "react-native-web";

const logInStyles = StyleSheet.create({
    view: {
        justifyContent: "center",
        alignItems: "center"
    },

    usernameinput: {
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
        
    }
});

export default logInStyles;
