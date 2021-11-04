import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HeaderComponent from './Src/Header'
import User_list from './Src/User'
export default function App() {
  return (

    <View >
         <HeaderComponent/>
         <User_list/>
    </View>
  );
}
 
