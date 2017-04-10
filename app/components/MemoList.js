import React, { Component } from 'react'
import { View, Text, ListView, Animated, StyleSheet } from 'react-native';
import { styles } from '../styles'
import ListItem from './ListItem'

let sAnimCache = {}

export default class MemoList extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { dataSource } = this.props;
    return (
      <ListView
        enableEmptySections={true}
        dataSource={dataSource}
        renderRow={this.renderRow} />
    );
  }

  renderRow(rowData) {
    var fadeAnim = sAnimCache[rowData.id]
    if (fadeAnim == null) {
      fadeAnim = new Animated.Value(0)
      Animated.timing(fadeAnim, {toValue: 1}).start()
      sAnimCache[rowData.id] = 1
    }
    return (
      <ListItem rowData={rowData} fadeAnim={fadeAnim} />
    )
  }
}
