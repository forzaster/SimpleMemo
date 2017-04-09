import React, { Component } from 'react'
import { View, Text, TouchableHighlight, Image } from 'react-native'
import { connect } from 'react-redux'
import { BlurView } from 'react-native-blur'
import AddMemoFAB from '../components/AddMemoFAB'
import AddMemoPopup from '../components/AddMemoPopup'
import MemoList from '../components/MemoList'
import { styles } from '../styles'
import { strings } from '../resources/strings'

class MainScreen extends Component {
  static navigationOptions = {
    title: strings.Home,
    header: ({ state, setParam }) => ({
      style: styles.navigationBar,
      right: (
        <TouchableHighlight
          style={styles.navigationButton}
          underlayColor="#99999999"
          onPress={()=> {}}>
          <Image
            style={{flex: 1}}
            resizeMode={Image.resizeMode.contain}
            source={require('../resources/ic_settings_3x.png')} />
        </TouchableHighlight>
      ),
    }),
  };

  render() {
    const { dispatch, todos, memos, showAddMemo } = this.props;
    return (
      <View style={styles.container}>
        <View>
          <MemoList dataSource={memos} />
        </View>
        <View style={styles.fabParent} pointerEvents="box-none">
          <AddMemoFAB onAddClick={action => {
            dispatch(action)
          }} />
        </View>
          {(() => {
            if (showAddMemo) {
              return (
                <BlurView blurType="light" blurAmount={5} style={styles.popupParent}>
                  <View style={styles.popupParent} pointerEvents="box-none">
                    <AddMemoPopup onAddClick={action => {
                      dispatch(action)
                    }}/>
                  </View>
                </BlurView>
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
    showAddMemo: state.memos.showAddMemo
  }
}

export default connect(mapStateToProps)(MainScreen)
