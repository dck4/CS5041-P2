import { StatusBar } from 'expo-status-bar';
import * as React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Main from "./pages/posts"
import LoginCreate from "./pages/login-create"
import CreatePost from "./pages/create-post"
import Banner from "./components/banner";
import { Header } from '@react-navigation/stack';

const Stack = createNativeStackNavigator();

export default function App() {

  const linking = {
    prefixes: [],
  };

  return (
    <NavigationContainer>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway"></link>
      <Stack.Navigator screenOptions={{header:Banner}}>
        <Stack.Screen name="Home" component={Main}/>
        <Stack.Screen name="LoginCreate" component={LoginCreate}/>
        <Stack.Screen name="CreatePost" component={CreatePost}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

