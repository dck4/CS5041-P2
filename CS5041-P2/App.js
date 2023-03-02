import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import * as React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Main from "./pages/posts"
import LoginCreate from "./pages/login-create"
import CreatePost from "./pages/create-post"


const Stack = createNativeStackNavigator();

export default function App() {

  const linking = {
    prefixes: [],
  };

  return (
    <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>
      <Text>F</Text>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Main}/>
        <Stack.Screen name="LoginCreate" component={LoginCreate} 
        options={{title: 'Login or Create a New Account',
        headerRight: () => (
            <Button onPress={() => navigation.navigate('Home')}
            title="View without login"
            color="#f4511e"
            />
        ),
        }}/>
        <Stack.Screen name="CreatePost" component={CreatePost}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
