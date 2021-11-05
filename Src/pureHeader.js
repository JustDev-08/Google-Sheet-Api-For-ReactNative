import { StyleSheet, Text, View ,Alert} from 'react-native';
import { Header , Icon} from 'react-native-elements'
import { Button } from 'react-native-elements/dist/buttons/Button';
import {
    SafeAreaView,
    SafeAreaProvider,
    SafeAreaInsetsContext,
    useSafeAreaInsets,
    initialWindowMetrics,
  } from 'react-native-safe-area-context';
import React from 'react';
const PureHeader = ({navigation}) => {
    return (
        <SafeAreaView>
            <Header
                placement="center"
                containerStyle={{
                    backgroundColor:'#4ca3dd',
                    justifyContent: 'space-around',
                    
                }}
                
                leftComponent={<Icon
                    name='md-arrow-back'
                    type='ionicon'
                    color='#fff'
                     onPress={() => navigation.popToTop()}
                  />
                  }
                centerComponent={{ text: 'Add User PAGE', style: { color: '#fff' ,fontWeight:'bold'}}}
              
            />
            
        </SafeAreaView>
    )
}

export default PureHeader