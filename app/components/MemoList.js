import React, { Component } from 'react'
import { View, Text, ListView, Animated, StyleSheet } from 'react-native';
import { actionShowAddMemo } from '../actions'
import { styles } from '../styles'
import ListItem from './ListItem'

let sAnimCache = {}

export default class MemoList extends Component {
  constructor(props) {
    super(props)
    this.renderRow = this.renderRow.bind(this)
  }
  render() {
    const { dataSource } = this.props
    return (
      <ListView
        enableEmptySections={true}
        dataSource={dataSource}
        renderRow={this.renderRow} />
    );
  }

  renderRow(rowData) {
    const { onItemClick } = this.props
    var fadeAnim = sAnimCache[rowData.id]
    if (fadeAnim == null) {
      fadeAnim = new Animated.Value(0)
      Animated.timing(fadeAnim, {toValue: 1}).start()
      sAnimCache[rowData.id] = 1
    }
    return (
      <ListItem rowData={rowData} fadeAnim={fadeAnim} onItemClick={(d) => {
        onItemClick(actionShowAddMemo(d))
      }} />
    )
  }
}
