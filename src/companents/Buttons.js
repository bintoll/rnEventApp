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
                {
                    name: 'חופשי',
                    isActive: false
                },
                {
                    name:'עלות סימבול',
                    isActive: false
                },
                {
                    name:'עֲלוּת',
                    isActive:false,
                }
            ]
        }
    }
    _ButtonOn = (i) => {
        const newState = this.state.buttons
        newState[i].isActive = !newState[i].isActive
        this.setState({buttons: newState})
    }

        render() {
        let bckgColor
            return(
                <View>
                    {
                        this.state.buttons.map((butt,i) => {
                            return (
                                <View style={styles.buttons} key={'btn'+i}>
                                        <Button backgroundColor={butt.isActive ? '#18A15F' :'#FFFFFF' }
                                                color="#A8ABAC"
                                                title={butt.name}
                                                onPress={()=>this._ButtonOn(i)}
                                        />
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