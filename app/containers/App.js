import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux'
import AddTodo from '../components/AddTodo'
import TodoList from '../components/TodoList'

class App extends Component {
  render() {
    const { dispatch, todos } = this.props;
    return (
      <View>
        <AddTodo
          onAddClick={action => {
            dispatch(action)
          }} />
        <TodoList
          todos={todos} />
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps)(App)
