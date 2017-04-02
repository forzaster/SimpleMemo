import { combineReducers } from 'redux'
import memos from './memos'
import todos from './todos'

const todoApp = combineReducers({
  memos,
  todos
})

export default todoApp
