import React from 'react'
import { View ,Text } from 'react-native'
import { ListItem, Avatar, Icon } from 'react-native-elements'
export default function rederMap({ item, index, separators }) {
    console.log(item)
    return (
        <View >
            <ListItem  bottomDivider key={index}>
                <ListItem.Content>

                    <ListItem.Title>
                        <Icon
                            name="person-circle-outline"
                            type='ionicon'

                        />
                        <Text style={{ paddingHorizontal: 10, fontStyle: "italic" }}>{item.Name}</Text>

                    </ListItem.Title>
                    <ListItem.Subtitle>
                        {item.Email}
                    </ListItem.Subtitle>

                </ListItem.Content>

            </ListItem>
        </View>
    )
}
