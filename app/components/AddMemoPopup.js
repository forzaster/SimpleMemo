import React, { Component } from 'react'
import { Button, TouchableHighlight, Image, View, Text, Animated, StyleSheet } from 'react-native'
import { actionAddMemo } from '../actions'
import { styles } from '../styles'
import { strings } from '../resources/strings'

export default class AddMemoPopup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      style: StyleSheet.flatten([styles.popup,
        {top: new Animated.Value(200)}])
    };
  }

  componentDidMount() {
    Animated.timing(
      this.state.style.top,
      {
        toValue: 20,
        duration: 100,
      }
    ).start();
  }

  render() {
      const { onAddClick } = this.props
      const d = new Date()
      return (
        <Animated.View style={this.state.style} >
          <Text>title</Text>
          <Button type="submit" title={strings.OK} onPress={()=> {
            onAddClick(actionAddMemo({
              title: "HOGE",
              content: "HOGE content." + d,
              date: d
            }))}}/>
        </Animated.View>
      );
  }
}
