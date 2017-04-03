import React, { Component } from 'react'
import { View, Text } from 'react-native';

export default class MemoList extends Component {
  render() {
    const { memos } = this.props;
    return (
      <View>
        {memos.map(memo => <Text key={memo.id}>{memo.id}{memo.title}</Text>)}
      </View>
    );
  }
}
