/**
 * Created by admin on 20.07.2017.
 */
/**
 * Created by admin on 20.07.2017.
 */

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Image,
    AppRegistry,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { SocialIcon } from 'react-native-elements'
import { List, ListItem } from 'react-native-elements'
import { Button } from 'react-native-elements'

export default class Categories extends Component {
    render() {
        const list = [
            {
                title: 'Category 1',
                icon: 'star'
            },
            {
                title: 'Category 2',
                icon: 'star'
            },
            {
                title: 'Category 3',
                icon: 'star'
            },
            {
                title: 'Category 4',
                icon: 'star'
            },
            {
                title: 'Category 5',
                icon: 'star'
            },
            {
                title: 'Category 6',
                icon: 'star'
            },
            {
                title: 'Category 7',
                icon: 'star'
            },
            {
                title: 'Category 8',
                icon: 'star'
            },
            {
                title: 'Category 9',
                icon: 'star'
            },
            {
                title: 'Category 10',
                icon: 'star'
            },

        ]
        let pic= {
            uri: 'https://png.icons8.com/back/android/24'
        };
        return (
            <View >
                <Image source={pic} style={{width: 24, height: 24}} />
                <SocialIcon
                    title='Sign In With Facebook'
                    button
                    type='facebook'
                    size='10'
                />
                <List>
                    {
                        list.map((item, i) => (
                            <ListItem
                                key={i}
                                title={item.title}
                                leftIcon={{name: item.icon}}
                            />
                        ))
                    }
                </List>
                <Button
                    title='Contact us' />
            </View>


        );
    }
}




AppRegistry.registerComponent('Categories', () => Categories);
