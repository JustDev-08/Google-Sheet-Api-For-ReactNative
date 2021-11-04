import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';
import {
    SafeAreaView,
    SafeAreaProvider,
    SafeAreaInsetsContext,
    useSafeAreaInsets,
    initialWindowMetrics,
} from 'react-native-safe-area-context';
import { ListItem, Avatar, Icon } from 'react-native-elements'
function User_list() {
    const [user, chrageUser] = useState(null)
    useEffect(() => {
        axios.get('https://sheet.best/api/sheets/d0e530b9-669d-4f07-82bd-16658620e1b4')
            .then(res => {
                chrageUser(res)
                console.log(res)
            })
    }, [])
    if (!user) {
        return <Text>Notyet API</Text>
    }
    return (<View>
        {
            user.data.map((item, i) => (
                <ListItem key={i} bottomDivider>
                    <ListItem.Content>

                        <ListItem.Title>
                            <Icon
                                name="person-circle-outline"
                                type='ionicon'
                                
                            />
                            <Text style={{ paddingHorizontal: 10  , fontStyle:"italic"}}>{item.Name}</Text>

                        </ListItem.Title>
                        <ListItem.Subtitle>
                            {item.Email}
                        </ListItem.Subtitle>

                    </ListItem.Content>

                </ListItem>
            ))
        }


    </View>
    )
}
export default User_list