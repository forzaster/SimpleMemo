import React, { Component } from 'react';
import { View } from 'react-native';
import AddTodo from '../containers/AddTodo'
import TodoList from '../containers/TodoList'

export default class App extends Component {
  render() {
    return (
      <View>
        <AddTodo />
        <TodoList />
      </View>
    );
  }
}
