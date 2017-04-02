import React, { Component } from 'react'
import { View, Button } from 'react-native'
import { actionAddMemo } from '../actions'

export default class AddMemo extends Component {
  render() {
      const { onAddClick } = this.props
      const d = new Date()
      return (
        <View>
          <Button type="submit" title="AddMemo" onPress={()=> {
            onAddClick(actionAddMemo({
              title: "HOGE",
              content: "HOGE content.",
              date: d
            }));
          }} />
        </View>
    );
  }
}
