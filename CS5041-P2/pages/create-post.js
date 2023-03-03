
import CreatePostFields from "../components/post-create-fields"
// the page for creating a new post

export default function CreatePost({ navigation }) {

    return (
        // <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        //     <Text>Create a post</Text>
        // </View>
        <CreatePostFields navigation={navigation}></CreatePostFields>
    )
}
