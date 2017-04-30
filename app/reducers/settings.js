import { ListView } from 'react-native'
import { ACTION_SHOW_LICENSE } from '../actions'

const settings = (state = {license: false}, action) => {
  switch (action.type) {
    case ACTION_SHOW_LICENSE:
      return Object.assign({}, state, {
        license: action.data
      })
    default:
      return state
  }
}

export default settings
