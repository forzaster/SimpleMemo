import React, { Component } from 'react'
import { Button, TouchableHighlight, Image, View, Text, TextInput, Animated, ScrollView, StyleSheet } from 'react-native'
import { actionAddMemo, actionCancelAddMemo } from '../actions'
import { styles } from '../styles'
import { strings } from '../resources/strings'
import { AddMemoFAB} from './AddMemoFAB'
import OKCancelButtons from './OKCancelButtons'

export default class AddMemoPopup extends Component {
  constructor(props) {
    super(props);
    var title = ""
    var content = ""
    var id = undefined
    if (props.memoData) {
      title = props.memoData.title
      content = props.memoData.content
      id = props.memoData.id
    }
    this.state = {
      style: StyleSheet.flatten([styles.popup,
        {top: new Animated.Value(200)}]),
      title: title,
      content: content,
      id: id,
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
          <View style={{flexGrow: 1, height: 48, flexDirection: 'row'}}>
            <Image style={{flexGrow: 1, width: 64, height: 64}} source={require('../resources/ic_add_3x.png')}/>
            <TextInput
              placeholder='title'
              keyboardType='default'
              style={{flexGrow: 10, padding: 8, fontSize: 16, height: 64, borderColor: 'gray', borderWidth: 1}}
              multiline={true} numberOfLines={2} editable={true}
              onChangeText={(text) => this.setState({title: text})}
              value={this.state.title} />
          </View>
          <TextInput
            placeholder='content'
            keyboardType='default'
            multiline={true}
            numberOfLines={4}
            editable={true}
            style={{flexGrow: 20, padding: 8, fontSize: 14, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(text) => this.setState({content: text})}
            value={this.state.content} />
          <OKCancelButtons
            onOK={()=> {
              onAddClick(actionAddMemo({
                title: this.state.title,
                content: this.state.content,
                id: this.state.id,
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
