import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Main from "./pages/posts"
import LoginCreate from "./pages/login-create"
import CreatePost from "./pages/create-post"
import Banner from "./components/banner";
import { Header } from '@react-navigation/stack';

export const firebaseConfig = {
  apiKey: "AIzaSyDBjUEw_DQNMQsZJWfTtLL0PQJoH-xF0kk",
  authDomain: "sta-cs5041.firebaseapp.com",
  databaseURL: "https://sta-cs5041-p2.firebaseio.com",
  projectId: "sta-cs5041",
  storageBucket: "sta-cs5041.appspot.com",
  messagingSenderId: "639987847762",
  appId: "1:639987847762:web:c5a35616a1aa1cf243458b"
 }; 

const Stack = createNativeStackNavigator();

export default function App() {

  const linking = {
    prefixes: [],
  };

  return (
    <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>
      <Stack.Navigator screenOptions={{header:Banner}}>
        <Stack.Screen name="Home" component={Main}/>
        <Stack.Screen name="LoginCreate" component={LoginCreate}/>
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
