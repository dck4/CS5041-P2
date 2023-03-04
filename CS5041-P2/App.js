import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import * as React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Main from "./pages/posts"
import LoginCreate from "./pages/login-create"
import CreatePost from "./pages/create-post"
import Banner from "./components/banner";
import { Header } from '@react-navigation/stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NativeRouter as Router, Route, Routes} from 'react-router-native'

const Stack = createNativeStackNavigator();

export default function App() {

  const linking = {
    prefixes: [],
  };

  return (
    <SafeAreaProvider>
      <Router>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway"/>
        <Routes>
          <Route exact path="/" element={<Banner after={<Main/>} />}/>
          <Route path="LoginCreate" element={<Banner after={<LoginCreate />}/>}/>
          <Route path="CreatePost" element={<Banner after={<CreatePost />}/>}/>
        </Routes>
      </Router>
    </SafeAreaProvider>
  );
}

