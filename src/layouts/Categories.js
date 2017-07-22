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
import { SocialIcon, List, ListItem, Button } from 'react-native-elements'

export default class Categories extends Component {
    constructor(props){
        super(props)
        this.state = {
            authorized: true,
            superUser: false
                     }
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
        var topPage
        let icon =<View style={styles.avatar}>
            <Image style={{width:'100%', height:'100%'}}
                   source={require('./../resources/images/avatar.png')}>
                <Image style={{width:'80%', height:'80%'}}
                       source={require('./../resources/images/avatar.png')}></Image>
            </Image>
        </View>
        if(this.state.authorized)
        {
            if(this.state.superUser) {
                topPage =
                    <View style={styles.topPage}>
                        {icon}
                        <View>
                            <Text style={{marginTop:25}}>כינוי</Text>
                            <Text style={{color:'#FF0505'}}>משתמש סופר</Text>
                            <Text style={{color:'#FF0505'}}>לאשר אירועים</Text>
                            <Text>האירועים שלי</Text>
                        </View>
                    </View>
            }//superuser
            else//authorized, but not superuser (picture and nickname)
            {
                topPage =
                    <View style={styles.topPage}>
                        {icon}
                        <Text style={{marginTop:25}}>כינוי</Text>
                    </View>
            }
        }
        else//non-authorized (just button log on)
        {
                topPage = <View style={styles.buttons}>
                    <SocialIcon
                        title='Log In With Facebook'
                        button
                        type='facebook'
                        borderRadius={0}
                    />
                </View >
        }
        return (
            <View style={styles.mainWrapper}>
                <StatusBar hidden={true} />    
                <ScrollView>
                    <View>
                        {topPage}
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

