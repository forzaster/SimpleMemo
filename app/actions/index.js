export const ACTION_SHOW_ADD_MEMO = 'SHOW_ADD_MEMO'
export const ACTION_CANCEL_ADD_MEMO = 'CANCEL_ADD_MEMO'
export const ACTION_ADD_MEMO = 'ADD_MEMO'
export const ACTION_UPDATE_MEMO = 'UPDATE_MEMO'
export const ACTION_GOTO = 'GO_TO'

export const actionShowAddMemo = () => ({
  type: ACTION_SHOW_ADD_MEMO
})
export const actionCancelAddMemo = () => ({
  type: ACTION_CANCEL_ADD_MEMO
})
export const actionAddMemo = (d) => ({
  type: ACTION_ADD_MEMO,
  data: d
})
export const actionUpdateMemo = () => ({
  type: ACTION_UPDATE_MEMO
})
export const actionGoTo = (next, _navigate) => ({
  type: ACTION_GOTO,
  nextScreen: next,
  navigate: _navigate
})
