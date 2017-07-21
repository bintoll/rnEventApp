import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { addNavigationHelpers, StackNavigator, DrawerNavigator, DrawerItems } from 'react-navigation'

// Imports for routes
import Categories from 'layouts/Categories'
import Other from 'layouts/Other'

const styles = StyleSheet.create({
  drawerWrapper: {
    flex: 1,
  },
})

const CustomDrawerContentComponent = (props) => (
  <View style={ styles.drawerWrapper }>
    <Categories />
  </View>
);

const DrawerNavigatorConfig = {
  drawerWidth: 300,
  drawerPosition: 'right',
  contentComponent: props => <CustomDrawerContentComponent {...props} />,
}

export const AppNavigator = DrawerNavigator(
  {
    Other: {
      screen: Other,
    },
  }, DrawerNavigatorConfig);

@connect(state => ({
    routes: state.routes
}))
export default class AppWithNavigationState extends Component {
  render() {
    const { dispatch, routes } = this.props
    return (
      <AppNavigator
        navigation={
          addNavigationHelpers({
            dispatch,
            state: routes
          })
        }/>
    )
  }
}