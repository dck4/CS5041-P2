
// styling for the create posts page
import { StyleSheet } from "react-native-web";

const createPostStyles = StyleSheet.create({
    
    view: {
        justifyContent: "center"
    },

    texthead: {
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 2,
        fontSize: 24
    },

    titleinput: {
        marginTop:10,
        marginBottom: 40,
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: 'grey',
        height: 40,
        fontSize: 24,
        marginLeft: 10,
        marginRight: 10
    },

    postinput: {
        marginTop:10,
        marginBottom: 20,
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: 'grey',
        height: 100,
        fontSize: 20,
        marginLeft: 10,
        marginRight: 10
    },

    button: {
        backgroundColor:"#DDDDDD",
        height: 50,
        width: 100,
        borderRadius: 15,
        marginTop: 20,
        marginLeft: "45%",
        justifyContent: "center",        
    }
});

export default createPostStyles;
