import { ListView } from 'react-native'
import { writeMemo, getMemo, updateMemo } from './model'
import { ACTION_SHOW_ADD_MEMO, ACTION_CANCEL_ADD_MEMO, ACTION_ADD_MEMO, ACTION_UPDATE_MEMO } from '../actions'

let dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

const memos = (state = {memos: getMemo() ? dataSource.cloneWithRows(getMemo()) : null}, action) => {
  switch (action.type) {
    case ACTION_SHOW_ADD_MEMO:
      return Object.assign({}, state, {
        memos: dataSource.cloneWithRows(getMemo()),
        showAddMemo: true,
        memoData: action.data
      })
    case ACTION_CANCEL_ADD_MEMO:
      return Object.assign({}, state, {
        memos: dataSource.cloneWithRows(getMemo()),
        showAddMemo: false
      })
    case ACTION_ADD_MEMO:
      if (action.data.id) {
        updateMemo(action)
      } else {
        writeMemo(action);
      }
      return Object.assign({}, state, {
        memos: dataSource.cloneWithRows(getMemo()),
        showAddMemo: false
      })
    case ACTION_UPDATE_MEMO:
      return Object.assign({}, state, {
        memos: getMemo() ? dataSource.cloneWithRows(getMemo()) : null
      })
    default:
      return state
  }
}

export default memos
