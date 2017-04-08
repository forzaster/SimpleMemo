import { combineReducers } from 'redux'
import memos from './memos'

const todoApp = combineReducers({
  memos
})

export default todoApp
