import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import AddMemo from '../components/AddMemo'
import MemoList from '../components/MemoList'
import AddTodo from '../components/AddTodo'
import TodoList from '../components/TodoList'
import { styles } from '../styles'

class App extends Component {
  render() {
    const { dispatch, todos, memos } = this.props;
    return (
      <View style={styles.container}>
        <AddTodo
          onAddClick={action => {
            dispatch(action)
          }} />
        <TodoList
          todos={todos} />
        <View>
          <MemoList memos={memos} />
        </View>
        <View style={styles.fab}>
          <AddMemo
            onAddClick={action => {
              dispatch(action)
            }} />
        </View>
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
