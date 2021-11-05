import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect  } from 'react';
import { StyleSheet, Text, View , ScrollView ,FlatList} from 'react-native';
import axios from 'axios';
import {
    SafeAreaView,
    SafeAreaProvider,
    SafeAreaInsetsContext,
    useSafeAreaInsets,
    initialWindowMetrics,
} from 'react-native-safe-area-context';
import rederMap from './rederMap';
import { ListItem, Avatar, Icon } from 'react-native-elements'
function User_list({user}) {
 
    return (
 
    <View   >
       
       <FlatList
        data={user.data}
        renderItem={rederMap}
         
         
      />
         
            
    </View>
    )
}
export default User_list