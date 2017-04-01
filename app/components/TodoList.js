import React, { Component } from 'react'
import { View, Text } from 'react-native';

export default class TodoList extends Component {
  render() {
    const { todos } = this.props;
    return (
      <View>
        {todos.map(todo => <Text key={todo.id}>{todo.text}</Text>)}
      </View>
    );
  }
}
