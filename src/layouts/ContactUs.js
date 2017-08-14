import React, { Component } from 'react';
import {Image, StyleSheet, Text, View, ScrollView, TouchableOpacity,I18nManager,TextInput} from 'react-native';
import FloatLabelTextInput from 'react-native-floating-label-text-input';

import {ContactPlaceholders} from 'constants/config'
import { width, height } from 'constants/config'

import NavBar from 'components/NavBar'

class ContactUs extends Component {
  constructor(props) {
    super(props);
    const form = {
      Name: '',
      Phone: '',
      Email: '',
      CompanyName: '',
      Subject: '',
      Descriprion: '',
    }
      this.state = {
      form
    }
  }

  changeForm = (value, fieldName) => {
    const newState = this.state.form
    newState[fieldName] = value
    console.log(newState)
    this.setState({form: newState})
  }
  render () {
    return (
        <ScrollView>
          <View>
            <NavBar navName="backContact" handleBack={() => this.props.navigation.goBack() } />
          </View>
        <View style={styles.container}>
          { ContactPlaceholders.map((item,i) => {
            return(
                <View key={'txt'+item.heading}>
                  <Text style={styles.headings}>{item.heading}</Text>
                  <TextInput
                    style={item.heading=='Description' ?styles.textInputDescription :styles.textInput}
                    value={this.state.form[i]}
                    underlineColorAndroid='transparent'
                    placeholderTextColor="#888d91"
                    placeholder={item.placeholder}
                    onChangeText={(text) => this.changeForm(text,item.heading)}/>
                </View>
              )
            })
          }
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Send</Text>
          </TouchableOpacity>
        </View>
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#F8F8F8',
    paddingLeft:width(4.8),
    paddingRight:width(2.5),
    paddingBottom:100,
  },
  headings: {
    fontFamily: 'System',
    fontSize: width(3.8),
    color: '#333333',
    textAlign:'left',
    marginBottom:5,
    marginTop:10,
    marginLeft: width(3)
  },
  textInput: {
    textAlign: I18nManager.isRTL ? 'right' : 'left',
    height: 45,
    backgroundColor:'white',
    borderWidth:1,
    borderColor:'#EBEBEC',
    borderRadius:5,
  },
  textInputDescription: {
    textAlign: I18nManager.isRTL ? 'right' : 'left',
    height: 95,
    borderWidth:1,
    borderColor:'#EBEBEC',
    borderRadius:5,
    justifyContent:'flex-end',
    marginBottom:20,
  },
  button: {
    backgroundColor: '#BE8FB1',
    borderRadius: 4,
    height:40,
    alignItems:'center',
    justifyContent:'center'
  },
  buttonText: {
    fontFamily: 'System',
    fontSize: width(4),
    color: '#FFFFFF'
  }
})

export default ContactUs;