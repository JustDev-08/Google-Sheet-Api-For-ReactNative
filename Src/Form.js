import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Alert } from 'react-native';
import axios from 'axios'
import PureHeader from './pureHeader';
import { Input, Icon ,Button } from 'react-native-elements';




export default function Form({ navigation }) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const Create = () => {

    }
    return (
        <View>
            <PureHeader navigation={navigation} />
            <Input
                label='Name'
                placeholder='Add your Name'
                leftIcon={<Icon name='md-person' type='ionicon' style={{ paddingHorizontal: 10 }} />}
                value={name}
                onChange={(e) => setName(e.target.value)}
                inputContainerStyle={{ borderWidth: 0 }}



            />

            <Input
                label='email'
                placeholder='Email'
                leftIcon={<Icon name='md-person' type='ionicon' style={{ paddingHorizontal: 10 }} />}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                inputContainerStyle={{ borderWidth: 0 }}
            />
            <Input
                label='Password'
                placeholder='password'
                leftIcon={<Icon name='md-person' type='ionicon' style={{ paddingHorizontal: 10 }} />}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                secureTextEntry
                inputContainerStyle={{ borderWidth: 0 }}
            />
            <Button
                icon={{
                    name: "check",
                    size: 15,
                    color: "white"
                }}
                style={{marginTop:20}}
                title="ADD"
                
                onPress={() => {
                    if (name == '' || email =='' || password=='' ){
                        Alert.alert('Plese Fill in Bank To Continue')
                    }
                    else {
                        const userObj = {
                            Name :name,
                            Email:email,
                            PassWord:password
                        }
                        axios.post('https://sheet.best/api/sheets/47569241-b77e-461b-8e14-8df84a8a8c70',userObj)
                            .then(res => console.log(res))
                             setName('')
                             setPassword('')
                             setEmail('')
                    }}  
                    }
                     
            />

        </View>
    )
}


