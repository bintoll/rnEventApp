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
import {Image, StyleSheet, Text, View, ScrollView, StatusBar} from 'react-native';
import { SocialIcon, List, ListItem, Button } from 'react-native-elements'

export default class Categories extends Component {
    render() {
        const list = [
            {
                name: 'שלום מה שלומך 1',
                active: false
            },
            {
                name: 'שלום מה שלומך 2',
                active: true
            },
            {
                name: 'שלום מה שלומך 3',
                active: true
            },
            {
                name: 'שלום מה שלומך 4',
                active: false
            },
            {
                name: 'שלום מה שלומך 5',
                active: false
            },
            {
                name: 'שלום מה שלומך 6',
                active: true
            },
            {
                name: 'שלום מה שלומך 7',
                active: false
            },
            {
                name: 'שלום מה שלומך 8',
                active: true
            },
            {
                name: 'שלום מה שלומך 9',
                active: false
            },
            {
                name: 'שלום מה שלומך 10',
                active: true
            },
            {
                name: 'Category 11',
                active: true
            },
            {
                name: 'Category 12',
                active: true
            },
            {
                name: 'Category 13',
                active: false
            },
            {
                name: 'Category 14',
                active: true
            },
            {
                name: 'Category 15',
                active: true
            }


        ];
        return (
            <View style={styles.mainWrapper}>
                <StatusBar hidden={true} />    
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
                                            avatar= {<Image source={l.active ? require('./../resources/images/goldStar.png') : require('../resources/images/goldStar.png')} />}
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
            </View>
        );
    }
}



const styles = StyleSheet.create({
    mainWrapper: {
        flex: 1
    },
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

