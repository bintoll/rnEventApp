import React from 'react'
import { Provider } from 'react-redux'

import Store from 'api/ReduxStore'
import AppWithNavigationState from 'api/AppNavigator'

import { BASE_URL } from "constants/config.js"

class rnEventApp extends React.Component {
  render() {
    return (
      <Provider store={ store }>
        <AppWithNavigationState />
      </Provider>
    );
  }
}

export default rnEventApp