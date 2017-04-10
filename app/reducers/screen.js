import { ListView } from 'react-native'
import { writeMemo, getMemo } from './model'
import { ACTION_GOTO } from '../actions'

let curScreen = ''

const screen = (state = {currentScreen: curScreen}, action) => {
  switch (action.type) {
    case ACTION_GOTO:
      let _prevScreen = curScreen;
      curScreen = action.nextScreen
      action.navigate(action.nextScreen)
      return Object.assign({}, state, {
        prevScreen: _prevScreen,
        currentScreen: curScreen,
      })
    default:
      return state
  }
}

export default screen
