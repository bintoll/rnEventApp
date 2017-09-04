import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import PopupDialog from 'react-native-popup-dialog';

import { width, height } from 'constants/config'

class ChooseCategory extends Component {
  render() {
    return(
          <View style={{position:'absolute'}}>
            <PopupDialog
                ref={(popupDialog) => { this.popupDialog = popupDialog; }}
                width={width(90)}
                show={true}
                onDismissed={() => this.props.callbackClose()}>
              <View style={styles.popUpWrapper}>
                <View>
                  <Text style={styles.textStyle}>אנא בחר קטגוריה</Text>
                  <View style={styles.border}/>
                  <View style={[styles.rowElements,styles.categoriesWrapper]}>
                  {
                    this.props.categoriesForPopup.map((item,index) => {
                      return(
                          <View style={item.isActive ?[styles.category,styles.categoryActive] :[styles.category,styles.categoryDisactive]}
                                key={item.name}>
                      <TouchableOpacity onPress={() => this.props.ChangeColorPopup(index)}>
                        <Text style={styles.categoryText}>{item.name}</Text>
                      </TouchableOpacity>
                          </View>
                      )
                    })
                  }
                  </View>
                </View>
                <View style={styles.rowElements}>
                  <View style={styles.button}>
                    <TouchableOpacity onPress={() => this.props.callbackClose()}>
                      <Text style={styles.buttonText}>Cancel</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.button}>
                    <TouchableOpacity onPress={() => this.props.callbackSave()}>
                      <Text style={styles.buttonText}>Save</Text>
                    </TouchableOpacity>
                  </View>
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
    paddingVertical:width(5),
  },
  border: {
    borderColor: '#C7C7C7',
    borderWidth:0.3,
  },
  rowElements: {
    flexDirection: 'row',
  },
  categoriesWrapper: {
    justifyContent: 'space-between',
    justifyContent: 'space-around',
    flexWrap: 'wrap'
  },
  categoryText: {
    fontFamily: 'System',
    fontSize: width(4),
    color: '#5C5C5C',
    textAlign: 'center'
  },
  category: {
    width:width(26),
    marginTop:width(3.35),
    borderRadius:width(1),
    height:width(8.3),
    justifyContent:'center'
  },
  categoryDisactive: {
    backgroundColor: '#E8E8E8',
  },
  categoryActive: {
    backgroundColor: '#BE8FB1',
  },
  buttonText: {
    fontFamily: 'System',
    fontSize: width(4),
    color: '#409AFC',
    textAlign: 'center'
  },
  button: {
    width:width(45),
    marginTop:width(3.35),
    height:width(11.7),
    justifyContent:'center',
    borderTopWidth:1,
    borderRightWidth:1,
    borderColor:'#E8E8E8',
  }
})

export default ChooseCategory;
