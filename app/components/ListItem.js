import React, { Component } from 'react'
import { View, Text, ListView, Animated, StyleSheet, TouchableHighlight } from 'react-native';
import { styles } from '../styles'

let sAnimCache = {}

export default class ListItem extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {rowData, fadeAnim} = this.props;
    var _style = styles.item
    if (fadeAnim != null) {
      _style = StyleSheet.flatten([styles.item, {opacity: fadeAnim}])
    }
    return (
      <TouchableHighlight
        style={{margin: 8}}
        underlayColor="#AAAAAAAA"
        onPress={()=> {
        }}>
      <Animated.View style={_style}>
        <View>
          <Text style={styles.itemTitleText} ellipSizeMode='tail' numberOfLines={1}>{rowData.title}</Text>
          <Text style={styles.itemContentText} >{rowData.content}</Text>
        </View>
      </Animated.View>
      </TouchableHighlight>
    )
  }
}
