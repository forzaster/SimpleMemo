import React, { Component } from 'react'
import { View, Text, ListView, TouchableHighlight, WebView } from 'react-native'
import { connect } from 'react-redux'
import { styles } from '../styles'
import { strings } from '../resources/strings'
import { createAction, ACTION_SHOW_LICENSE } from '../actions'
import LicensePopup from '../components/LicensePopup'

let listItems = [
  {title: "License", content: undefined, action: ACTION_SHOW_LICENSE, data: true },
  {title: "App Version", content: "0.0.1"}
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
    this.renderRow = this.renderRow.bind(this)
  }

  render() {
    const { dispatch, settings } = this.props;
    return (
      <View style={styles.container}>
        <ListView
          enableEmptySections={true}
          dataSource={this.dataSource}
          renderRow={this.renderRow} />
        {(() => {
          if (settings.license) {
            return (
              <View style={styles.popupParent} pointerEvents="box-none">
                <LicensePopup
                  onOK={() => {
                    dispatch(createAction(ACTION_SHOW_LICENSE, false))
                  }}/>
              </View>
            )
          }
        })()}
      </View>
    );
  }

  renderRow(rowData) {
    const { dispatch } = this.props;
    if (rowData.content != undefined) {
      return (
        <TouchableHighlight style={styles.settingItem}
          underlayColor="#AAAAAAAA"
          onPress={() => {
            if (rowData.action) {
              dispatch(createAction(rowData.action, rowData.data))
            }
          }}>
        <View>
          <Text style={styles.settingItem1stText}>{rowData.title}</Text>
          <Text style={styles.settingItem2ndText}>{rowData.content}</Text>
        </View>
        </TouchableHighlight>
      )
    } else {
      return (
        <TouchableHighlight style={styles.settingItem}
          underlayColor="#AAAAAAAA"
          onPress={() => {
            if (rowData.action) {
              dispatch(createAction(rowData.action, rowData.data))
            }
          }}>
          <Text style={styles.settingItemSingleText}>{rowData.title}</Text>
        </TouchableHighlight>
      )
    }
  }
}

function mapStateToProps(state) {
  return {
    settings: state.settings
  }
}

export default connect(mapStateToProps)(SettingScreen)