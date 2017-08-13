import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { addNavigationHelpers, StackNavigator, DrawerNavigator, DrawerItems } from 'react-navigation'
import { width, height } from 'constants/config'

// Imports for routes
import Drawer from 'layouts/Drawer'
import Events from 'layouts/Events'
import Event from 'layouts/Event'
import EventMap from 'layouts/EventMap'
import ContactUs from 'layouts/ContactUs'

const styles = StyleSheet.create({
  drawerWrapper: {
    flex: 1,
  },
})

const CustomDrawerContentComponent = (props) => (
  <View style={ styles.drawerWrapper }>
    <Drawer {...props} />
  </View>
);

const DrawerNavigatorConfig = {
  drawerWidth: width(76),
  drawerPosition: 'right',
  contentComponent: props => <CustomDrawerContentComponent {...props} />,
}

const stckNav = StackNavigator({
  Events: { screen: Events, },
  Event: { screen: Event, },
  EventMap: {screen: EventMap }
}, {navigationOptions: {
  header: null
}
});

export const AppNavigator = DrawerNavigator(
  {
    Main: {
      screen: stckNav,
    },
    ContactUs: {
      screen: ContactUs
    }
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
