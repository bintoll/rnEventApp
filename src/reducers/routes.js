import { NavigationActions } from 'react-navigation';

import { AppNavigator } from '../api/AppNavigator';

const mainSceneAction = AppNavigator.router.getActionForPathAndParams('Other');
const initialStateMain = AppNavigator.router.getStateForAction(mainSceneAction);
// const secondAction = AppNavigator.router.getActionForPathAndParams('Other');



const initialNavState = AppNavigator.router.getStateForAction(
  initialStateMain,
);

export default function (state = initialNavState, action = {}) {
  return AppNavigator.router.getStateForAction(action, state) || state
}