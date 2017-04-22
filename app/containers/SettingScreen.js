import React, { Component } from 'react'
import { View, Text, ListView } from 'react-native'
import { connect } from 'react-redux'
import { styles } from '../styles'
import { strings } from '../resources/strings'

let listItems = [
  {title: "License"},
  {title: "App Version"}
]

class SettingScreen extends Component {
  static navigationOptions = {
    title: strings.Settings,
    header: ({ state, setParam }) => ({
      style: styles.navigationBar,
    }),
  }

  constructor(props) {
    super(props)
    this.renderRow = this.renderRow.bind(this)
    this.dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
      .cloneWithRows(listItems)
  }

  render() {
    const { dispatch } = this.props;
    return (

      <View style={styles.container}>
        <ListView
          enableEmptySections={true}
          dataSource={this.dataSource}
          renderRow={this.renderRow} />
      </View>
    );
  }

  renderRow(rowData) {
    return (
      <View style={styles.item}>
        <Text style={styles.itemTitleTextSingleLine}>{rowData.title}</Text>
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {
  }
}

export default connect(mapStateToProps)(SettingScreen)
