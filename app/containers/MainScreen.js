import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import AddMemoFAB from '../components/AddMemoFAB'
import AddMemoPopup from '../components/AddMemoPopup'
import MemoList from '../components/MemoList'
import AddTodo from '../components/AddTodo'
import TodoList from '../components/TodoList'
import { styles } from '../styles'

class MainScreen extends Component {
  static navigationOptions = {
    title: 'Home',
  };

  render() {
    const { dispatch, todos, memos, showAddMemo } = this.props;
    return (
      <View style={styles.container}>
        <View>
          <MemoList dataSource={memos} />
        </View>
        <View style={styles.fabParent} pointerEvents="box-none">
          <AddMemoFAB onAddClick={action => {
            dispatch(action)
          }} />
        </View>
        <View style={styles.popupParent} pointerEvents="box-none">
          {(() => {
            if (showAddMemo)
              return (
                <AddMemoPopup onAddClick={action => {
                  dispatch(action)
                }}/>);
          })()}
        </View>
      </View>
    );
  }
}
//        <AddTodo
//          onAddClick={action => {
//            dispatch(action)
//          }} />
//        <TodoList todos={todos} />

function mapStateToProps(state) {
  return {
    todos: state.todos,
    memos: state.memos.memos,
    showAddMemo: state.memos.showAddMemo
  }
}

export default connect(mapStateToProps)(MainScreen)