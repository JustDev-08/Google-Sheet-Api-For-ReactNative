import { StatusBar } from 'expo-status-bar';
import React,{useState , useEffect} from 'react';
import { StyleSheet, Text, View ,Alert} from 'react-native';
import { Header , Icon} from 'react-native-elements'
import { Button } from 'react-native-elements/dist/buttons/Button';
import axios from 'axios';
import {
    SafeAreaView,
    SafeAreaProvider,
    SafeAreaInsetsContext,
    useSafeAreaInsets,
    initialWindowMetrics,
  } from 'react-native-safe-area-context';
import User_list from './User';
const HeaderComponent = ( {navigation }) => {
    const [user, chrageUser] = useState(null)
    useEffect(() => {
        axios.get('https://sheet.best/api/sheets/47569241-b77e-461b-8e14-8df84a8a8c70')
            .then(res => {
                chrageUser(res)
                console.log(res)
            })
    }, [])
    if (!user) {
        return <Text>Notyet API</Text>
    }
    return (
        <SafeAreaView>
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
                    onPress={() => navigation.push('formScreen')}
                  />
                  }
                centerComponent={{ text: 'LOGIN PAGE', style: { color: '#fff' ,fontWeight:'bold'}}}
                rightComponent={<Icon
                    type='ionicon'
                    name='md-refresh'
                    onPress={() => {
                        axios.get('https://sheet.best/api/sheets/47569241-b77e-461b-8e14-8df84a8a8c70')
                        .then(res => {
                            Alert.alert('Reflesh','Click OK TO Continue')
                            chrageUser(res)
                            console.log(res)
                        })
                    }}
        
                />}
            />
            <User_list user={user}/>
        </SafeAreaView>

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