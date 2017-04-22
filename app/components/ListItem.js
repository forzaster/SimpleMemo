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
    return (
      <TouchableHighlight
        style={styles.item}
        underlayColor="#AAAAAAAA"
        onPress={()=> {
        }}>
      <Animated.View style={{opacity: fadeAnim}}>
        <View>
          <Text style={styles.itemTitleText} ellipSizeMode='tail' numberOfLines={1}>{rowData.title}</Text>
          <Text style={styles.itemContentText} >{rowData.content}</Text>
        </View>
      </Animated.View>
      </TouchableHighlight>
    )
  }
}
