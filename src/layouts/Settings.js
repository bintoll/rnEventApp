/**
 * Created by admin on 23.07.2017.
 */
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { Button } from 'react-native-elements'

import NavBar from 'components/NavBar'
import Buttons from 'components/Buttons'
import YesOrNo from 'components/YesOrNo'
import ApproveCancel from 'components/ApproveCancel'

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

const modalButtons = [
  {
    name: 'Approve',
    isActive: false
  },
  {
    name:'Cancel',
    isActive: false
  },
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

const priceSettings = [
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
        this.state = {
            notfSettings: notfSettings,
            catSettings: catSettings,
            priceSettings: priceSettings,
            modalButtons: modalButtons,
            isModalActive: false
        }
    }

    setSettings =(i,listname) => {
        const newState = this.state[listname]
        console.log('newState')
        console.log(i)
        console.log(newState)
        newState[i].isActive = !newState[i].isActive
        this.setState({[listname]: newState})
    }

    saveSettings = (bool) => {
        console.log('saved ' + bool)
        this.props.navigation.navigate('Events')
        this.props.navigation.navigate('DrawerOpen')
    }

  setSettingsModal =(i,listname) => {
    const newState = this.state[listname]
    console.log('newState')
    console.log(i)
    console.log(newState)
    newState[i].isActive = !newState[i].isActive
    this.state.isModalActive=false
    this.setState({[listname]: newState})

  }



  render() {
        return (
            <ScrollView>
                <View style={styles.mainWrapper}>
                    <NavBar navName="back" handleBack={() => this.props.navigation.goBack() } />    
                    <View style={styles.settingsWrapper}>
                        <View style={styles.settingsCat}>
                            <Text style={styles.settingLable}>Notification settings</Text>
                            <Buttons
                                list={ this.state.notfSettings}
                                callback={(i) => this.setSettings(i, 'notfSettings')}
                                navNam= "notfSettings"/>
                        </View>
                        <View style={styles.settingsCat}>
                            <Text style={styles.settingLable}>חופשי</Text>
                            <Buttons
                                list={this.state.catSettings}
                                callback={(i)=>this.setSettings(i, 'catSettings')}
                                checkbox={true}/>
                        </View>
                        <View style={styles.settingsCat}>
                            <Text style={styles.settingLable}>חופשי</Text>
                            <Buttons
                                list={this.state.priceSettings}
                                callback={(i)=>this.setSettings(i, 'priceSettings')}/>
                        </View>
                        <View style={styles.saveOrNoWrapper}>
                            <YesOrNo buttons={{ yes: 'save', no: 'cancel' }} callback={(bool) => this.saveSettings(bool)}/>
                        </View>
                        <Button
                            backgroundColor='#FFFFFF'
                            color="#A8ABAC"
                            title='test'
                            onPress={()=>this.setState({isModalActive: !this.state.isModalActive})}
                        />
                    </View>
                    <View>
                      {
                        this.state.isModalActive
                            ? <ApproveCancel
                                list={this.state.modalButtons}
                                isModalActive={this.state.isModalActive}
                                callback={(i)=>this.setSettingsModal(i, 'modalButtons')}
                            />
                            : <View></View>
                      }
                    </View>
                </View>
            </ScrollView>
        )

    }
}

const styles = StyleSheet.create({
    mainWrapper: {
        flex: 1
    },
    settingsWrapper: {
        paddingHorizontal: 10,
        paddingVertical: 6
    },
    settingLable: {
        fontSize: 16,
        textAlign: 'left',
        padding: 1
    },
    settingsCat: {
        paddingVertical: 10
    },
    saveOrNoWrapper: {
        marginVertical: 10,
        marginHorizontal: 16
    }
})

export default Settings;