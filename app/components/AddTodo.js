import React, { Component } from 'react';
import { View, Button } from 'react-native';
import { addTodo } from '../actions'

export default class AddTodo extends Component {
  render() {
      const { onAddClick } = this.props;
      return (
        <View>
          <Button type="submit" title="hoge" onPress={()=> {
            onAddClick(addTodo("HOGE0"));
          }} />
        </View>
    );
  }
}
