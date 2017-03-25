import React, { Component } from 'react';
import { View, Button } from 'react-native';
import { connect } from 'react-redux'
import { addTodo } from '../actions'

class AddTodo extends Component {
  render() {
      const { dispatch } = this.props;
      return (
        <View>
          <Button type="submit" title="hoge" onPress={()=> {
            dispatch(addTodo("HOGE0"));
          }} />
        </View>
    );
  }
}

export default connect()(AddTodo)
