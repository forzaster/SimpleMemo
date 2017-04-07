import React, { Component } from 'react'
import { View, Text, ListView, Animated, StyleSheet } from 'react-native';
import { styles } from '../styles'

export default class MemoList extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { dataSource } = this.props;
    return (
      <View>
      <ListView
        dataSource={dataSource}
        renderRow={this.renderRow} />
      </View>
    );
  }

  renderRow(rowData) {
    let fadeAnim = new Animated.Value(0);
    Animated.timing(fadeAnim, {toValue: 1}).start()
    let _style = StyleSheet.flatten([styles.item, {opacity: fadeAnim}])
    return (
      <Animated.View style={_style}>
        <Text>{rowData.title}</Text>
        <Text>{rowData.content}</Text>
      </Animated.View>
    )
  }
}
