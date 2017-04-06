let nextTodoId = 0
export const addTodo = (text) => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id
})

export const ACTION_SHOW_ADD_MEMO = 'SHOW_ADD_MEMO'
export const ACTION_ADD_MEMO = 'ADD_MEMO'
export const ACTION_UPDATE_MEMO = 'UPDATE_MEMO'

export const actionShowAddMemo = (d) => ({
  type: ACTION_SHOW_ADD_MEMO,
  data: d
})
export const actionAddMemo = (d) => ({
  type: ACTION_ADD_MEMO,
  data: d
})
export const actionUpdateMemo = () => ({
  type: ACTION_UPDATE_MEMO
})
