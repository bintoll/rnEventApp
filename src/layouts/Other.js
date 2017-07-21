import React, { Component } from 'react';
import { View, Text, StatusBar } from 'react-native'

class Other extends Component {
  
  componentWillMount() {
    this.props.navigation.navigate('DrawerOpen')
  }
  
  render() {
    return (
      <View>
        <StatusBar hidden={true} />  
        <Text>Hello Text!</Text>
      </View>
    );
  }
}

export default Other;