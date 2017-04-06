import React, { Component } from 'react'
import { Button, TouchableHighlight, Image, View, Text } from 'react-native'
import { actionAddMemo } from '../actions'
import { styles } from '../styles'

export default class AddMemoPopup extends Component {
  render() {
      const { onAddClick } = this.props
      const d = new Date()
      return (
        <View  style={styles.popup} >
          <Text>title</Text>
          <Button type="submit" title="AddMemo" onPress={()=> {
            onAddClick(actionAddMemo({
              title: "HOGE",
              content: "HOGE content.",
              date: d
            }))}}/>
        </View>
      );
  }
}
