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
import {Image, StyleSheet, Text, View, ScrollView} from 'react-native';
import { SocialIcon, List, ListItem, Button } from 'react-native-elements'

export default class Categories extends Component {
    render() {
        const list = [
            {
                name: 'Category 1',
                leftIcon: <Image source={require('../resources/images/star.png')} />
            },
            {
                name: 'Category 2',
                leftIcon: <Image source={require('../resources/images/goldStar.png')} />
            },
            {
                name: 'Category 3',
                leftIcon: <Image source={require('../resources/images/goldStar.png')} />
            },
            {
                name: 'Category 4',
                leftIcon: <Image source={require('../resources/images/star.png')} />
            },
            {
                name: 'Category 5',
                leftIcon: <Image source={require('../resources/images/star.png')} />
            },
            {
                name: 'Category 6',
                leftIcon: <Image source={require('../resources/images/goldStar.png')} />
            },
            {
                name: 'Category 7',
                leftIcon: <Image source={require('../resources/images/star.png')} />
            },
            {
                name: 'Category 8',
                leftIcon: <Image source={require('../resources/images/goldStar.png')} />
            },
            {
                name: 'Category 9',
                leftIcon: <Image source={require('../resources/images/star.png')} />
            },
            {
                name: 'Category 10',
                leftIcon: <Image source={require('../resources/images/goldStar.png')} />
            },
            {
                name: 'Category 11',
                leftIcon: <Image source={require('../resources/images/goldStar.png')} />
            },
            {
                name: 'Category 12',
                leftIcon: <Image source={require('../resources/images/goldStar.png')} />
            },
            {
                name: 'Category 13',
                leftIcon: <Image source={require('../resources/images/goldStar.png')} />
            },
            {
                name: 'Category 14',
                leftIcon: <Image source={require('./../resources/images/goldStar.png')} />
            },
            {
                name: 'Category 15',
                leftIcon: <Image source={require('./../resources/images/goldStar.png')} />
            }


        ];//list of categories(title,image)
        return (
            <ScrollView>
                <View>
                    <View style={styles.buttons}>
                        <SocialIcon
                            title='Log In With Facebook'
                            button
                            type='facebook'
                            borderRadius={0}
                        />
                    </View >
                    <View>
                        <List containerStyle={styles.list}>
                            {
                                list.map((l, i) => (
                                    <ListItem
                                        avatar= {l.leftIcon}
                                        key={i}
                                        title={l.name}
                                        hideChevron
                                        containerStyle={styles.listContainer}
                                    />
                                ))
                            }
                        </List>
                    </View >
                    <View style={[styles.buttons, styles.contact]}>
                        <Button style={styles.contact}
                                title='Contact us'
                                backgroundColor="#18A15F"
                        />
                    </View>
                </View>
            </ScrollView>



        );
    }
}



const styles = StyleSheet.create({
    allElements: {
        marginBottom:25
    },
    buttons: {
        width:300,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop:10
    },
    list:{
        marginBottom: 20,
        borderTopWidth:0,
        borderBottomWidth:0
    },
    listContainer: {
        width:200,
        alignSelf:'center',
        borderBottomWidth:0
    },//for each category from list
    bottom: {
        marginBottom:10
    }//for bottom elements
});

