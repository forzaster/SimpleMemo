import React, { Component } from 'react'
import { View, Text, TouchableHighlight, Image, Platform, Animated, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { connect } from 'react-redux'
import AddMemoFAB from '../components/AddMemoFAB'
import AddMemoPopup from '../components/AddMemoPopup'
import MemoList from '../components/MemoList'
import { styles } from '../styles'
import { strings } from '../resources/strings'
import { actionGoTo, createAction, ACTION_INIT_DB, ACTION_UPDATE_MEMO } from '../actions'
import { getCrypto, DOCUMENTS_PATH } from '../reducers/model'
import PinPopup from '../components/PinPopup'

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

  createAlphaAnim() {
    let anim = new Animated.Value(0.0)
    Animated.timing(anim, {toValue: 0.5, duration: 600}).start()
    this.setState({bganim: anim})
  }

  render() {
    const { dispatch, todos, memos, showAddMemo, memoData, curScreen, prevScreen } = this.props
    if (getCrypto() && !memos) {
      return (
        <PinPopup
          onOK={(key4) => {
            dispatch(createAction(ACTION_INIT_DB, key4, null))
            dispatch(createAction(ACTION_UPDATE_MEMO, null, null))
          }}
          onCancel={() =>{
          }}/>
      )
    }
    return (
      <View style={styles.container}>
        <View>
          <MemoList dataSource={memos} onItemClick={action => {
            this.createAlphaAnim()
            dispatch(action)
          }}/>
        </View>
        <View style={styles.fabParent} pointerEvents="box-none">
          <AddMemoFAB onAddClick={action => {
            this.createAlphaAnim()
            dispatch(action)
          }} />
        </View>
          {(() => {
            if (showAddMemo) {
              return (
                <TouchableWithoutFeedback
                  style={{position: 'absolute',
                    width: '100%', height: '100%'}}
                  onPress={Keyboard.dismiss} >
                  <Animated.View style={{position: 'absolute',
                    width: '100%', height: '100%', backgroundColor: '#000000', opacity: this.state.bganim}}/>
                </TouchableWithoutFeedback>
              )
            }
          })()}
          {(() => {
            if (showAddMemo) {
                return (
                    <View style={{position: 'absolute', width: '100%', height: '100%'}}>
                      <View style={styles.addmemoPopupParent} pointerEvents="box-none">
                        <AddMemoPopup
                          onAddClick={action => {
                            dispatch(action)
                          }}
                          onCancelClick={action => {
                            dispatch(action)
                          }}
                          onDelete={action => {
                            dispatch(action)
                          }}
                          memoData={memoData}/>
                      </View>
                      {(() => {
                        if (memoData && memoData.image) {
                          return (
                            <Image style={{width: '100%', height: '50%', marginTop: 16, marginBottom: 16}}  resizeMode={Image.resizeMode.contain} source={{uri: DOCUMENTS_PATH + memoData.image}}/>
                          )
                        }
                      })()}
                    </View>
                );
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
    memoData: state.memos.memoData,
    curScreen: state.screen.currentScreen,
    prevScreen: state.screen.prevScreen,
  }
}

export default connect(mapStateToProps)(MainScreen)
