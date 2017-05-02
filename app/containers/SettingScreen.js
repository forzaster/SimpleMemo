import React, { Component } from 'react'
import { View, Text, Switch, ListView, TouchableHighlight, WebView } from 'react-native'
import { connect } from 'react-redux'
import { styles } from '../styles'
import { strings } from '../resources/strings'
import { createAction, ACTION_SHOW_LICENSE, ACTION_CRYPTO_DB } from '../actions'
import LicensePopup from '../components/LicensePopup'

const ITEM_TYPE_NORMAL = 0
const ITEM_TYPE_SWITCH = 1

let listItems = [
  {id: 0, type: ITEM_TYPE_SWITCH, title: strings.Crypto, content: strings.CryptoContent, action: ACTION_CRYPTO_DB, data: false },
  {id: 1, type: ITEM_TYPE_NORMAL, title: "License", content: undefined, action: ACTION_SHOW_LICENSE, data: true },
  {id: 2, type: ITEM_TYPE_NORMAL, title: "App Version", content: "0.0.1", data: undefined}
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
    this.renderRow = this.renderRow.bind(this)
    this.state =
      {dataSource:
        new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2 || r1.data !== r2.data})
        .cloneWithRows(listItems)
    }
  }

  render() {
    const { dispatch, settings } = this.props;
    return (
      <View style={styles.container}>
        <ListView
          enableEmptySections={true}
          dataSource={this.state.dataSource}
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

    if (rowData.type == ITEM_TYPE_SWITCH) {
      return (
        <TouchableHighlight style={styles.settingItem}
          underlayColor="#AAAAAAAA"
          onPress={() => {
            if (rowData.action) {
              dispatch(createAction(rowData.action, rowData.data))
            }
          }}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View>
            <Text style={styles.settingItem1stText}>{rowData.title}</Text>
            <Text style={styles.settingItem2ndText}>{rowData.content}</Text>
          </View>
          <Switch onValueChange={(value) => {
                //this.setState({falseSwitchIsOn: value})
                //rowData.data = value
                listItems[rowData.id].data = value
                this.setState({dataSource:
                  new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2 || r1.data !== r2.data})
                  .cloneWithRows(listItems)
                })
            }}
            style={{marginBottom: 10}}
            value={rowData.data} />
          </View>
        </TouchableHighlight>
      )
    }
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
