import { ListView, InteractionManager } from 'react-native'
import { ACTION_SHOW_LICENSE, ACTION_CRYPTO_DB } from '../actions'
import { writeSetting, switchMainDB } from './model'

const settings = (state = {license: false}, action) => {
  switch (action.type) {
    case ACTION_SHOW_LICENSE:
      return Object.assign({}, state, {
        license: action.data
      })
    case ACTION_CRYPTO_DB:
      writeSetting({crypto: action.data})
      InteractionManager.runAfterInteractions(() => {
        switchMainDB(action.data, action.callback)
      });
      return Object.assign({}, state, {
        crypto: action.data
      })
    default:
      return state
  }
}

export default settings
