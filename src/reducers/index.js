import { combineReducers } from 'redux'
import routes from './routes'
import persist from './persist'

export default combineReducers({
  routes,
  persist,
})