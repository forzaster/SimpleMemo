import React, { Component } from 'react'
import { Button, TouchableHighlight, Image } from 'react-native'
import { actionShowAddMemo } from '../actions'
import { styles } from '../styles'

export default class AddMemoFAB extends Component {
  render() {
      const { onAddClick } = this.props
      const d = new Date()
      return (
        <TouchableHighlight
          style={styles.circleButton}
          underlayColor="#AAAAAAAA"
          onPress={()=> {
            onAddClick(actionShowAddMemo())}}>
          <Image
            style={styles.circleImage}
            resizeMode={Image.resizeMode.stretch}
            source={require('../resources/ic_add_3x.png')} />
        </TouchableHighlight>
    );
  }
}
