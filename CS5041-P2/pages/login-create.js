import LoginCreateFields from "../components/login-create-fields";

// the page for logging in or creating a new account
// modify the style

export default function LoginCreate({ navigation }) {
    return (
        // <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        //     <Text>Login or create account</Text>
        // </View>
        <LoginCreateFields></LoginCreateFields>
    )
}
