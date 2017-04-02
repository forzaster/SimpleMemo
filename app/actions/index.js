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

export const ACTION_ADD_MEMO = 'ADD_MEMO'

export const actionAddMemo = (d) => ({
  type: ACTION_ADD_MEMO,
  data: d
})
