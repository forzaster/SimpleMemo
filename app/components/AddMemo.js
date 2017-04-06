import React, { Component } from 'react'
import { Button, TouchableHighlight, Image } from 'react-native'
import { actionShowAddMemo } from '../actions'
import { styles } from '../styles'

export default class AddMemo extends Component {
  render() {
      const { onAddClick } = this.props
      const d = new Date()
      return (
        <TouchableHighlight style={styles.circleButton} onPress={()=> {
          onAddClick(actionShowAddMemo())}}>
          <Image style={styles.circleImage} resizeMode={Image.resizeMode.stretch} source={require('./AddMemo.png')} />
        </TouchableHighlight>
    );
  }
}
