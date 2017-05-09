import { ListView } from 'react-native'
import { writeMemo, getMemo, updateMemo, deleteMemo } from './model'
import { ACTION_SHOW_ADD_MEMO, ACTION_CANCEL_ADD_MEMO, ACTION_ADD_MEMO, ACTION_UPDATE_MEMO, ACTION_DELETE_MEMO, ACTION_DELETING_MEMO } from '../actions'

let dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

const memos = (state = {memoState: "default", memos: getMemo() ? dataSource.cloneWithRows(getMemo()) : null}, action) => {
  switch (action.type) {
    case ACTION_SHOW_ADD_MEMO:
      return Object.assign({}, state, {
        memos: dataSource.cloneWithRows(getMemo()),
        memoState: "showAddMemo",
        memoData: action.data
      })
    case ACTION_CANCEL_ADD_MEMO:
      return Object.assign({}, state, {
        memos: dataSource.cloneWithRows(getMemo()),
        memoState: "default"
      })
    case ACTION_ADD_MEMO:
      if (action.data.id) {
        updateMemo(action)
      } else {
        writeMemo(action);
      }
      return Object.assign({}, state, {
        memos: dataSource.cloneWithRows(getMemo()),
        memoState: "default"
      })
    case ACTION_UPDATE_MEMO:
      return Object.assign({}, state, {
        memos: getMemo() ? dataSource.cloneWithRows(getMemo()) : null,
        memoState: "default"
      })
    case ACTION_DELETING_MEMO:
      //deleteMemo(action.id)
      return Object.assign({}, state, {
        memos: getMemo() ? dataSource.cloneWithRows(getMemo()) : null,
        memoState: "deleting",
        deleteId: action.id
      })
    case ACTION_DELETE_MEMO:
      deleteMemo(action.id)
      return Object.assign({}, state, {
        memos: getMemo() ? dataSource.cloneWithRows(getMemo()) : null,
        memoState: "default",
        deleteId: null
      })
    default:
      return state
  }
}

export default memos
