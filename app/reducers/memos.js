import { writeMemo, getMemo } from './model'
import { ACTION_ADD_MEMO } from '../actions'

const memos = (state = {memos:[]}, action) => {
  switch (action.type) {
    case ACTION_ADD_MEMO:
      writeMemo(action);
      return Object.assign({}, state, {
        memos: getMemo()
      })
    default:
      return state
  }
}

export default memos
