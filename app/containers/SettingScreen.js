import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { styles } from '../styles'
import { strings } from '../resources/strings'

class SettingScreen extends Component {
  static navigationOptions = {
    title: strings.Settings,
    header: ({ state, setParam }) => ({
      style: styles.navigationBar,
    }),
  };

  render() {
    const { dispatch } = this.props;
    return (
      <View style={styles.container}>
        <Text>Settings</Text>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todos,
    memos: state.memos.memos,
    showAddMemo: state.memos.showAddMemo
  }
}

export default connect(mapStateToProps)(SettingScreen)
