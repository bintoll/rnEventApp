import {createStore, applyMiddleware} from 'redux'
import {AsyncStorage} from 'react-native'
import {connect} from 'react-redux'
import {persistStore, autoRehydrate} from 'redux-persist'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import { addNavigationHelpers, StackNavigator } from 'react-navigation'

import rootReducer from 'reducers/index'
import * as types from 'constants/ActionTypes'

const middleware = [thunk]

const persistConfig = {
    storage: AsyncStorage,
    whitelist: ['userData', 'articles'],
    blacklist: ['persist', 'initialLaunch', 'checkKey'],
}

export default store = composeWithDevTools(
    applyMiddleware(...middleware),
    autoRehydrate()
)(createStore)(rootReducer)

persistStore(store, persistConfig, () => store.dispatch({ type: types.PERSIST_READY }))

