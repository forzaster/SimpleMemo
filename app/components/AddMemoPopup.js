import React, { Component } from 'react'
import { Button, KeyboardAvoidingView, TouchableHighlight, Image, View, Text, TextInput, Animated, ScrollView, StyleSheet } from 'react-native'
import { actionAddMemo, actionCancelAddMemo } from '../actions'
import { styles } from '../styles'
import { strings } from '../resources/strings'
import { AddMemoFAB } from './AddMemoFAB'
import OKCancelButtons from './OKCancelButtons'
import ImagePicker from 'react-native-image-picker'
import { DOCUMENTS_PATH, MEMO_IMAGE_FOLDER } from '../reducers/model'

export default class AddMemoPopup extends Component {
  constructor(props) {
    super(props);
    var title = ""
    var content = ""
    var id = undefined
    var image = ""
    if (props.memoData) {
      title = props.memoData.title
      content = props.memoData.content
      id = props.memoData.id
      image = DOCUMENTS_PATH + props.memoData.image
    }
    this.state = {
      style: StyleSheet.flatten([styles.addmemopopup,
        {top: new Animated.Value(200)}]),
      title: title,
      content: content,
      id: id,
      image: image,
      height: 0
    };

    this.pickImage = this.pickImage.bind(this)
  }

  componentDidMount() {
    Animated.spring(
      this.state.style.top,
      {
        toValue: 20,
        duration: 100,
      }
    ).start();
  }

  render() {
      const { onAddClick, onCancelClick } = this.props
      const d = new Date()
      return (
        <Animated.View style={this.state.style} >
          <OKCancelButtons
            onOK={()=> {
              onAddClick(actionAddMemo({
                title: this.state.title,
                content: this.state.content,
                id: this.state.id,
                date: d,
                image: this.state.image
              }))
            }}
            onCancel={() => {
              onCancelClick(actionCancelAddMemo())
            }}/>
          <View style={{flexGrow: 1, height: 48, flexDirection: 'row'}}>
            <TouchableHighlight
              style={{flexGrow: 1, width: 64, height: 64}}
              underlayColor="#99999999"
              onPress={this.pickImage}>
              {(() => {
                if (this.state.image) {
                  return (<Image style={{width: '100%', height: '100%'}} source={{uri: this.state.image}}/>);
                } else {
                  return (<Image style={{width: '100%', height: '100%'}} source={require('../resources/ic_add_3x.png')}/>);
                }
              })()}
            </TouchableHighlight>
            <TextInput
              placeholder='title'
              keyboardType='default'
              style={{flexGrow: 10, padding: 8, fontSize: 16, height: 64, borderColor: 'gray', borderWidth: 1}}
              multiline={true} numberOfLines={2} editable={true}
              onChangeText={(text) => this.setState({title: text})}
              value={this.state.title} />
          </View>
          <TextInput
            placeholder='content'
            keyboardType='default'
            multiline={true}
            numberOfLines={4}
            editable={true}
            style={{width: '100%', flexGrow: 5, padding: 8, borderWidth: 1, fontSize: 14}}
            onChangeText={(text) => this.setState({content: text})}
            value={this.state.content} />
        </Animated.View>
      );
  }

  pickImage() {
    ImagePicker.showImagePicker({storageOptions: {path: MEMO_IMAGE_FOLDER}}, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        this.setState(Object.assign({}, this.state, {
          image: response.uri,
        }))
      }
    })
  }
}
