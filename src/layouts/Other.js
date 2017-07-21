import React, { Component } from 'react';
import { View, Text, StatusBar, I18nManager } from 'react-native'

class Other extends Component {
  
  componentWillMount() {
    this.props.navigation.navigate('DrawerOpen')
  }
  
  render() {
    return (
      <View>
        <StatusBar hidden={true} />
        {
          I18nManager.isRTL
            ? <Text>Hello rtl!</Text>
            : <Text>Hello ltr!</Text>
        }
      </View>
    );
  }
}

export default Other;