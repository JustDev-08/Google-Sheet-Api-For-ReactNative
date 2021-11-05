import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View ,RefreshControl} from 'react-native';
import HeaderComponent from './Src/Header'
import User_list from './Src/User'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Form from './Src/Form';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomePage} options={{ headerShown: false }} />
        <Stack.Screen name="formScreen" component={Form} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const HomePage = ({ navigation }) => {
 
   
  return (

    <View >
      <HeaderComponent  navigation={navigation}  />
    </View>
  );
}
   
  


