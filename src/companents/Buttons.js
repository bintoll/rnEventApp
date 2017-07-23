/**
 * Created by admin on 22.07.2017.
 */
import React, { Component } from 'react';
import {Image, StyleSheet, Text, View, ScrollView, StatusBar, TouchableOpacity} from 'react-native';
import { Button } from 'react-native-elements'

class Buttons extends Component {
    constructor(props) {
        super(props)
        this.state = {
            buttons: [
                'חופשי',
                'עלות סימבול',
                'עֲלוּת',
            ]
        }
    }
        render() {
            return(
                <View>
                    {
                        this.state.buttons.map((butt,i) => {
                            return (
                                <View style={styles.buttons} key={'cat'+i}>
                                        <Button backgroundColor='#FFFFFF' color="#A8ABAC" title={butt}/>
                                </View>
                            )
                        })
                    }
                </View>
            );
        }

    }
const styles = StyleSheet.create({
    buttons: {
        width:300,
        alignSelf: 'center',
        marginTop:10,
        marginBottom:10,
        borderWidth: 1,
        borderColor:'#A8ABAC'

    },
})
export default Buttons;