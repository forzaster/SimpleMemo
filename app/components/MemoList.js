import React, { Component } from 'react'
import { View, Text, ListView } from 'react-native';

export default class MemoList extends Component {
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
    return (
      <View>
        <Text>{rowData.title}</Text>
        <Text>{rowData.content}</Text>
      </View>
    )
  }
}
