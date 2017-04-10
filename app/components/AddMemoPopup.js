import React, { Component } from 'react'
import { Button, TouchableHighlight, Image, View, Text, TextInput, Animated, StyleSheet } from 'react-native'
import { actionAddMemo, actionCancelAddMemo } from '../actions'
import { styles } from '../styles'
import { strings } from '../resources/strings'
import { AddMemoFAB} from './AddMemoFAB'
import OKCancelButtons from './OKCancelButtons'

export default class AddMemoPopup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      style: StyleSheet.flatten([styles.popup,
        {top: new Animated.Value(200)}]),
      title: '',
      content: '',
      height: 0
    };
  }

  componentDidMount() {
    Animated.spring(
      this.state.style.top,
      {
        toValue: 20,
        duration: 100,
      }
    ).start();
  }

  render() {
      const { onAddClick, onCancelClick } = this.props
      const d = new Date()
      return (
        <Animated.View style={this.state.style} >
          <TextInput
            placeholder='title'
            keyboardType='default'
            style={{flex: 1, height: 32, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(text) => this.setState({title: text})}
            value={this.state.title} />
          <TextInput
            placeholder='content'
            keyboardType='default'
            multilines={true}
            numberOfLines={4}
            style={{flex: 10, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(text) => this.setState({content: text})}
            value={this.state.content} />
          <OKCancelButtons
            onOK={()=> {
              onAddClick(actionAddMemo({
                title: this.state.title,
                content: this.state.content,
                date: d
              }))
            }}
            onCancel={() => {
              onCancelClick(actionCancelAddMemo())
            }}/>
        </Animated.View>
      );
  }
}
