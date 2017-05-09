import React, { Component } from 'react'
import { View, Text, ListView, Animated, StyleSheet } from 'react-native';
import { actionShowAddMemo, actionDeleteMemo } from '../actions'
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
    const { onItemClick, deleteId, onDelete } = this.props
    var fadeAnim = sAnimCache[rowData.id]
    if (fadeAnim == null) {
      fadeAnim = new Animated.Value(0)
      Animated.timing(fadeAnim, {toValue: 1}).start()
      sAnimCache[rowData.id] = 1
    }
    var deleteAnim = null
    if (deleteId != null && rowData.id == deleteId) {
        deleteAnim = new Animated.ValueXY({x: 0, y: 0})
        Animated.timing(deleteAnim, {toValue: {x: -500, y: 0}, duration: 400})
          .start(() => {
            onDelete(actionDeleteMemo(rowData.id))
          })
        return (
          <Animated.View style={deleteAnim.getLayout()}>
            <ListItem rowData={rowData} fadeAnim={fadeAnim} onItemClick={(d) => {
            }} />
          </Animated.View>
        )
    }
    return (
      <ListItem rowData={rowData} fadeAnim={fadeAnim} onItemClick={(d) => {
        onItemClick(actionShowAddMemo(d))
      }} />
    )
  }
}
