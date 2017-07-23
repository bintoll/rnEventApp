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
import {Image, StyleSheet, Text, View, ScrollView, StatusBar, TouchableOpacity} from 'react-native';
import { List, ListItem, Button } from 'react-native-elements'
import CategoriesTopPg from './../companents/CategoriesTopPg'

export default class Categories extends Component {
    constructor(props){
        super(props)
    }
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
                        <CategoriesTopPg/>
                        <View>
                            <List containerStyle={styles.list}>
                                {
                                    list.map((l, i) => (
                                        <ListItem
                                            key={i}
                                            title={l.name}
                                            rightIcon = {<Image source={l.active ? require('./../resources/images/goldStar.png') : require('../resources/images/goldStar.png')} />}
                                            containerStyle={styles.listContainer}
                                        />
                                    ))
                                }
                            </List>
                        </View >
                        <View style={[styles.buttons,styles.bottom]}>
                            <Button
                                    title='Contact us'
                                    backgroundColor="#18A15F"
                            />
                        </View>
                        <View style={[styles.buttons,styles.bottom]}>
                            <Button
                                title='Settings'
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
        alignSelf: 'center',
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
    },//for bottom elements
    avatar:{
        height:70,
        width:170,
        marginRight:10,

    },
    topPage:{
        marginTop:10,
        flex:1,
        flexDirection: 'row',
        alignSelf: 'center'


    }
});

