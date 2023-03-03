
import { StyleSheet } from 'react-native';
// universal styling to be applied across the app


export const styles = StyleSheet.create({
    banner: {
        height:95,
        backgroundColor:"#784444",
        alignItems:"center",
        justifyContent:"space-between",
        flexDirection:"row"
    },
    title: {
        fontSize:38,
        fontFamily:"Raleway",
        fontWeight:"bold",
        color:"#DDDDDD"
    },
    back: {
        fontSize:32,
        fontFamily:"Raleway",
        color:"#DDDDDD"
    },
    logbutton: {
        backgroundColor:"#DDDDDD",
        height:60,
        width:130,
        borderRadius:15,
        marginRight:20,
        justifyContent:"center"
    },
    logbuttontext: {
        fontSize:24,
        fontFamily:"Raleway"
    }
  });