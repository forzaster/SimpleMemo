import React, { Component } from 'react'
import { View, Text, TouchableHighlight, Image, Platform } from 'react-native'
import { connect } from 'react-redux'
import { BlurView } from 'react-native-blur'
import AddMemoFAB from '../components/AddMemoFAB'
import AddMemoPopup from '../components/AddMemoPopup'
import MemoList from '../components/MemoList'
import { styles } from '../styles'
import { strings } from '../resources/strings'
import { actionGoTo } from '../actions'

class MainScreen extends Component {
  static navigationOptions = {
    title: strings.Home,
    header: ({ state, setParams }) => ({
      style: styles.navigationBar,
      right: (
        <TouchableHighlight
          style={styles.navigationButton}
          underlayColor="#99999999"
          onPress={()=> {
            setParams({toSetting: true, setParams: setParams})
          }}>
          <Image
            style={{flex: 1}}
            resizeMode={Image.resizeMode.contain}
            source={require('../resources/ic_settings_3x.png')} />
        </TouchableHighlight>
      ),
    }),
  }

  componentWillReceiveProps(nextProps) {
    const { dispatch } = nextProps
    if (nextProps.navigation.state.params != null) {
      if (nextProps.navigation.state.params.toSetting == true) {
        const { navigate } = nextProps.navigation
        dispatch(actionGoTo('SettingScreen', navigate))
        nextProps.navigation.state.params.toSetting = false
      }
    }
  }

  render() {
    const { dispatch, todos, memos, showAddMemo, memoData } = this.props
    return (
      <View style={styles.container}>
        <View>
          <MemoList dataSource={memos} onItemClick={action => {
            dispatch(action)
          }}/>
        </View>
        <View style={styles.fabParent} pointerEvents="box-none">
          <AddMemoFAB onAddClick={action => {
            dispatch(action)
          }} />
        </View>
          {(() => {
            if (showAddMemo) {
              if (Platform.OS == 'android') {
                // workaround for crash due to BlurView when android
                return (
                  <View style={styles.popupParent} pointerEvents="box-none">
                    <AddMemoPopup
                      onAddClick={action => {
                        dispatch(action)
                      }}
                      onCancelClick={action => {
                        dispatch(action)
                      }}
                      memoData={memoData}/>
                  </View>
                );
              } else {
                return (
                  <BlurView blurType="light" blurAmount={5} style={styles.popupParent}>
                    <View style={styles.popupParent} pointerEvents="box-none">
                      <AddMemoPopup
                        onAddClick={action => {
                          dispatch(action)
                        }}
                        onCancelClick={action => {
                          dispatch(action)
                        }}
                        memoData={memoData}/>
                    </View>
                  </BlurView>
                );
              }
            }
          })()}
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todos,
    memos: state.memos.memos,
    showAddMemo: state.memos.showAddMemo,
    memoData: state.memos.memoData
  }
}

export default connect(mapStateToProps)(MainScreen)
