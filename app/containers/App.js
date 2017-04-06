import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import AddMemo from '../components/AddMemo'
import AddMemoPopup from '../components/AddMemoPopup'
import MemoList from '../components/MemoList'
import AddTodo from '../components/AddTodo'
import TodoList from '../components/TodoList'
import { styles } from '../styles'

class App extends Component {
  render() {
    const { dispatch, todos, memos, showAddMemo } = this.props;
    return (
      <View style={styles.container}>
        <AddTodo
          onAddClick={action => {
            dispatch(action)
          }} />
        <TodoList todos={todos} />
        <View>
          <MemoList dataSource={memos} />
        </View>
        <View style={styles.fab} pointerEvents="box-none">
          <AddMemo onAddClick={action => {
            dispatch(action)
          }} />
        </View>
        {(() => {
          if (showAddMemo)
            return (
              <AddMemoPopup onAddClick={action => {
                dispatch(action)
              }}/>);
        })()}
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todos,
    memos: state.memos.memos,
    showAddMemo: state.memos.showAddMemo
  }
}

export default connect(mapStateToProps)(App)
