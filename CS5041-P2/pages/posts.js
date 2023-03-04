
import { View } from "react-native";
import { ScrollView } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { PostList } from "../components/postsview"
import { CreateButton } from '../components/create-button';
import { PostsContainer } from "../components/posts-container";

// this should be the frame for the "posts" page
// this should fetch posts from the database to display a scrolling view of posts starting from the most recent
// advanced: scrolling to the bottom triggers more posts to load (should be a framework allowing lazy loading like this)
// basic: simply pages showing X number of posts

export default function Main({ navigation, dimensions }) {

    return (
        <PostsContainer>
            <ScrollView>
                <View style={{justifyContent:"space-between",flexDirection:"row"}}>
                    <View style={{alignSelf:"flex-start"}}></View>
                    <PostList/>
                    <View style={{alignSelf:"flex-end"}}></View>
                    <StatusBar style="auto" />
                </View>
            </ScrollView>
            <CreateButton navigation={navigation}/>
        </PostsContainer>
    )
}