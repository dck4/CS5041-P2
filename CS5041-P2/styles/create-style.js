
// styling for the create posts page
import { StyleSheet } from "react-native-web";

const createPostStyles = StyleSheet.create({
    
    view: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:"#8184b2",
        flexDirection:"row"
    },

    textHead: {
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 2,
        fontSize: 24,
        fontFamily:"Raleway"
    },

    titleInput: {
        marginBottom:10,
        backgroundColor: 'white',
        fontSize: 24,
        placeholderTextColor: "grey",
    },

    postInput: {
        marginTop:10,
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: 'grey',
        height: 100,
        fontSize: 20
    },

    button: {
        backgroundColor:"#DDDDDD",
        height: 60,
        width: 120,
        borderRadius: 15,
        marginTop: 20,
        marginLeft:30,
        marginRight:30,
        // marginLeft: "45%",
        justifyContent: "center",        
    },

    createbutton: {
        backgroundColor:"#656bca"
    },

    rtf: {
        minHeight:400,
        backgroundColor:"white"
    },
    
    buttontext: {
        fontFamily:"Raleway",
        fontSize:24
    },

    createtext: {
        color:"white"
    },

    title: {
        fontFamily:"Raleway",
        color:"white",
        fontSize:28,
        maginBottom:10
    }
});

export default createPostStyles;
