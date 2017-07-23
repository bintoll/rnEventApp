/**
 * Created by admin on 23.07.2017.
 */
/**
 * Created by admin on 22.07.2017.
 */
import React, { Component } from 'react';
import {Text, View} from 'react-native';
import { CheckBox } from 'react-native-elements'

class Checkbox extends Component {
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
    _CheckOn = (i) => {
        const newState = this.state.checkboxes
        newState[i].isActive = !newState[i].isActive
        this.setState({checkboxes: newState})
    }

    render() {
        return(
            <View>
                {
                    this.state.checkboxes.map((chk,i) => {
                        return (
                            <View  key={'chk'+i}>
                                <CheckBox
                                    checkedIcon='check-square-o'
                                    uncheckedIcon='square-o'
                                    title={chk.name}
                                    checked={chk.isActive}
                                    onPress={()=>this._CheckOn(i)}
                                    containerStyle={{borderWidth:0}}
                                />
                            </View>
                        )
                    })
                }
            </View>
        );
    }

}

export default Checkbox;