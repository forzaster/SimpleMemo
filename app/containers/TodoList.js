import React, { Component } from 'react'
import { View, Text } from 'react-native';
import { connect } from 'react-redux'

class TodoList extends Component {
  render() {
    const { todos } = this.props;
    return (
      <View>
      {todos.map(todo => <Text key={todo.id}>{todo.text}</Text>)}
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps)(TodoList)
