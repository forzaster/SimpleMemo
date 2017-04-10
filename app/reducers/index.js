import { combineReducers } from 'redux'
import screen from './screen'
import memos from './memos'

const todoApp = combineReducers({
  screen,
  memos,
})

export default todoApp
