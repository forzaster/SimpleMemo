import { ListView, InteractionManager } from 'react-native'
import { ACTION_SHOW_LICENSE, ACTION_CRYPTO_DB, ACTION_ENTER_PIN, ACTION_INIT_DB } from '../actions'
import { writeSetting, switchMainDB, initDb } from './model'

const settings = (state = {license: false}, action) => {
  switch (action.type) {
    case ACTION_SHOW_LICENSE:
      return Object.assign({}, state, {
        license: action.data
      })
    case ACTION_CRYPTO_DB:
    console.log("AAA="+action.data)
      writeSetting({crypto: action.data})
      InteractionManager.runAfterInteractions(() => {
        switchMainDB(action.data, action.key4, action.callback)
      });
      return Object.assign({}, state, {
        crypto: action.data,
        enterPin: false
      })
    case ACTION_ENTER_PIN:
      return Object.assign({}, state, {
        enterPin: action.data
      })
    case ACTION_INIT_DB:
      initDb(action.data)
      return state
    default:
      return state
  }
}

export default settings
