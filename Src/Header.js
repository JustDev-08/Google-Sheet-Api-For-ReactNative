import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header , Icon} from 'react-native-elements'
import {
    SafeAreaView,
    SafeAreaProvider,
    SafeAreaInsetsContext,
    useSafeAreaInsets,
    initialWindowMetrics,
  } from 'react-native-safe-area-context';
 
const HeaderComponent = () => {
     
    
    return (
        <SafeAreaProvider
        >
            <Header
                placement="center"
                containerStyle={{
                    backgroundColor:'#4ca3dd',
                    justifyContent: 'space-around',
                    
                }}
                
                leftComponent={<Icon
                    name='add-outline'
                    type='ionicon'
                    color='#fff'
                     
                  />
                  }
                centerComponent={{ text: 'LOGIN PAGE', style: { color: '#fff' ,fontWeight:'bold'}}}
                 
            />
        </SafeAreaProvider>

    );
}
const styles = StyleSheet.create({
    body: {
        height: 30,
        backgroundColor: '#cffafe',
        alignContent: 'center',
        paddingTop: 30,
        flexDirection: 'row',
        flex: 1,


    }
})


export default HeaderComponent;