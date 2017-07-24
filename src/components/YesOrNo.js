import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'

class saveOrNo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.noWrapper}>
          <Button backgroundColor="#d86066"
            color="#ffffff"
            title={this.props.buttons.no}
            onPress={() => this.props.callback(false)}
            containerViewStyle={{marginLeft: 0, marginRight: 0}}/>
        </View>  
        <View style={styles.yesWrapper}>
          <Button backgroundColor="#18A15F"
            color="#ffffff"
            title={this.props.buttons.yes}
            onPress={() => this.props.callback(true)}
            containerViewStyle={{marginLeft: 0, marginRight: 0}}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10
  },
  yesWrapper: {
    justifyContent: 'center'
  },
  noWrapper: {
    justifyContent: 'center'
  }
})

export default saveOrNo;