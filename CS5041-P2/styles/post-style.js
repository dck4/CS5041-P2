
import { StyleSheet } from 'react-native';
// styling for posts


export const styles = StyleSheet.create({
    FAB: {
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        position: "absolute",
        bottom: 70,
        right: 40,
        backgroundColor: "#26653A",
        paddingHorizontal: 20,
        paddingVertical: 10,
        width:100,
        height:60
    },
    metatext: {
        textAlign:"right",
        fontFamily:"Raleway",
        fontSize:18,
        paddingRight:10,
        paddingTop:15,
        padding:0
    },
    username: {
        fontSize:16
    },
    date: {
        fontSize:12
    },
    game: {
        fontSize:14
    },
    maintext: {
        padding: 20,
        paddingTop: 15,
        fontFamily: "Raleway"
    },
    title: {
        paddingBottom: 0,
        fontWeight:"bold",
        fontSize:26
    },
    body: {
        fontSize:16
    },
    postcontainer: {
        flexDirection:"row",
        paddingTop:25,
        flex:1,
        width:'100%'
    },
    mainbox: {
        flex:1,
        minWidth:400,
        justifyContent:"left",
        backgroundColor:"#efeef0",
        alignSelf:"stretch"
    },
    leftContent: {
        justifyContent:"right",
        width:100
    },
    reactionbox: {
        flexDirection:"row",
        justifyContent:"right",
        height:40
    }
})