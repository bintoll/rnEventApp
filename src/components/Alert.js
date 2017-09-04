import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import PopupDialog from 'react-native-popup-dialog';

import { width, height } from 'constants/config'

class Alert extends Component {
  render() {
    return(
        <View style={{position:'absolute'}}>
          <PopupDialog
              ref={(popupDialog) => { this.popupDialog = popupDialog; }}
              width={width(70)}
              height={110}
              show={true}
              onDismissed={() => this.props.callbackClose()}>
            <View style={styles.popUpWrapper}>
                <Text style={styles.textStyle}>{this.props.title}</Text>
                <View style={styles.button}>
                  <TouchableOpacity onPress={() => this.props.callbackClose()}>
                    <Text style={styles.buttonText}>{this.props.buttonText}</Text>
                  </TouchableOpacity>
                </View>
            </View>
          </PopupDialog>
        </View>
    );
  }
}


const styles = StyleSheet.create({
  popUpWrapper: {
    height:'100%',
    backgroundColor:'white',
    flexDirection:'column',
    justifyContent:'space-between',
    borderRadius: width(4),
    overflow: 'hidden'
  },
  textStyle: {
    fontFamily: 'System',
    fontSize: width(4),
    color: '#000000',
    textAlign:'center',
    paddingTop:width(5.5),
  },
  border: {
    borderColor: '#C7C7C7',
    borderWidth:0.3,
  },
  buttonText: {
    fontFamily: 'System',
    fontSize: width(4),
    color: '#409AFC',
    textAlign: 'center'
  },
  button: {
    width:width(100),
    height:width(11),
    justifyContent:'center',
    borderTopWidth:1,
    borderRightWidth:1,
    borderColor:'#E8E8E8',
    alignSelf:'center'
  }
})

export default Alert;
