import { writeMemo, getMemo } from './model'
import { ACTION_ADD_MEMO } from '../actions'

const memos = (state = {memos:getMemo()}, action) => {
  switch (action.type) {
    case ACTION_ADD_MEMO:
      writeMemo(action);
      console.log("memos write")
      console.log(getMemo().length)
      return Object.assign({}, state, {
        memos: getMemo()
      })
    default:
      return state
  }
}

export default memos
