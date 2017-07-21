import React from 'react'
import { I18nManager } from 'react-native'
import { Provider } from 'react-redux'

import Store from 'api/ReduxStore'
import AppWithNavigationState from 'api/AppNavigator'

import { BASE_URL } from "constants/config.js"

class rnEventApp extends React.Component {
  constructor(params) {
    super(params)
    I18nManager.forceRTL(true);
  }
  render() {
    return (
      <Provider store={ store }>
        <AppWithNavigationState />
      </Provider>
    );
  }
}

export default rnEventApp