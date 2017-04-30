import { combineReducers } from 'redux'
import screen from './screen'
import memos from './memos'
import settings from './settings'

const todoApp = combineReducers({
  screen,
  memos,
  settings,
})

export default todoApp
