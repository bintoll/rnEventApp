/**
 * Created by admin on 23.07.2017.
 */
import React, { Component } from 'react';
import {View} from 'react-native'
import Buttons from 'components/Buttons'

const notfSettings = [
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

const catSettings = [
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


class Settings extends Component {
    constructor(props) {
        super(props)
        this.state={
            catSetting: catSettings,
            notfSetting: notfSettings,
        }
    }
    setSettings =(i,listname) => {
        const newState = this.state[listname]
        newState[i].isActive = !newState[i].isActive
        this.setState({[listname]: newState})
    }
    render() {
        console.log('this.state')
        console.log(this.state)
        return (
            <View>
                <View>
                    <Text>Notification settings</Text>
                    <Buttons
                        list={ this.state.notfSettings}
                        callback={(i)=>this.setSettings(i,'notfSettings')}
                    />
                </View>
                <View>
                    <Text>חופשי</Text>
                    <Buttons
                    list={this.state.catSettings}
                    callback={(i)=>this.setSettings(i, 'catSettings')}
                    checkbox={true}
                    />
                </View>
            </View>
        )

    }
}

export default Settings;