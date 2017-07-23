/**
 * Created by admin on 23.07.2017.
 */
import React, { Component } from 'react';
import {Text, View} from 'react-native';
import { Button } from 'react-native-elements'

class ApplyCancel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            checkboxes: [
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

    render() {
        return(
            <View>
                <Button
                        backgroundColor='#FFFFFF'
                        color="#A8ABAC"
                        title=''
                        onPress={()=>this._ButtonOn(i)}
                />
                <Button backgroundColor='#FFFFFF'
                        color="#A8ABAC"
                        title={butt.name}
                        onPress={()=>this._ButtonOn(i)}
                />
            </View>
        );
    }

}

export default ApplyCancel;