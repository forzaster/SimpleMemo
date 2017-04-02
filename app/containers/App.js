import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import AddMemo from '../components/AddMemo'
import MemoList from '../components/MemoList'
import AddTodo from '../components/AddTodo'
import TodoList from '../components/TodoList'

class App extends Component {
  render() {
    const { dispatch, todos, memos } = this.props;
    return (
      <View>
        <AddTodo
          onAddClick={action => {
            dispatch(action)
          }} />
        <TodoList
          todos={todos} />
        <AddMemo
          onAddClick={action => {
            dispatch(action)
          }} />
        <MemoList
          memos={memos} />
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todos,
    memos: state.memos.memos
  }
}

export default connect(mapStateToProps)(App)
