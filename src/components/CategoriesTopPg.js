import React, { Component } from 'react';
import { Image, StyleSheet, Platform, View, Text, TouchableOpacity } from 'react-native'

import { width, height } from 'constants/config'

class CategoriesTopPg extends Component {

  _checkAuthorization = () => {
    let icon =
        <View style={styles.avatarWrapper}>
          <Image
              style={[styles.image,{borderRadius: Platform.OS == 'ios' ? 0 : width(15)}]}
              source={require('./../resources/images/avatar.png')}/>
        </View>
    if (this.props.isAuthorized) {
      if (this.props.superUser) {
        return (
            <View style={styles.containerAdmin}>
              <View style={styles.rowElementsAdmin}>
                {icon}
                <View>
                  <Text style={styles.userName}>sכינוי</Text>
                  <TouchableOpacity style={styles.buttonAdmin}>
                    <Text style={styles.buttonTextAdmin}>אשר את האירוע</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
        )
      }//superuser
      else//authorized, but not superuser (picture and nickname)
      {
        return (
            <View style={styles.containerUser}>
              <View style={styles.rowElementsUser}>
                <View style={styles.avatarWrapper}>{icon}</View>
                <Text style={styles.userName}>כינוי</Text>
              </View>
            </View>
        )
      }
    }

    else//non-authorized (just button log on)
    {
      return (
          <View style={styles.containerUnLogin}>
            <TouchableOpacity>
              <Text style={styles.userName}>Login in with Facebook</Text>
            </TouchableOpacity>
          </View>
      )
    }
  }

  render() {
    return (
        <View>
          {this._checkAuthorization()}
        </View>
    );
  }
}

const styles = StyleSheet.create({
  containerUnLogin: {
    backgroundColor:'#B783A9',
    height:width(25),
    alignItems:'center',
    justifyContent: 'center',
  },
  containerUser: {
    backgroundColor:'#B783A9',
    height:width(25),
    justifyContent: 'center',
  },
  containerAdmin: {
    backgroundColor:'#B783A9',
    height:width(25),
    justifyContent: 'center',
  },
  rowElementsUser: {
    flexDirection:'row',
    alignItems:'center',
    paddingLeft:width(5)
  },
  rowElementsAdmin: {
    flexDirection:'row',
    paddingLeft:width(5)
  },
  buttonAdmin: {
    marginTop:width(0.25),
    borderWidth:1,
    borderColor:'white',
    borderRadius:width(1),
    alignItems:'center',
    width:width(25),
    opacity:0.9
  },
  buttonTextAdmin: {
    paddingVertical:width(2),
    fontFamily:'System',
    fontSize:width(3),
    color: '#FFFFFF',

  },
  userName:{
    fontFamily:'System',
    fontSize:width(5),
    color:'#FFFFFF',
    fontWeight:'bold',
    textAlign:'left'
  },
  avatarWrapper: {
    width:width(15),
    height:width(15),
    marginRight:width(2.5),
    borderRadius: width(15),
    overflow: 'hidden'
  },
  image: {
    width: '100%',
    height: '100%',
  },
})

export default CategoriesTopPg;
