import React, { Component } from 'react'
import { Button, TouchableHighlight, View, Animated, StyleSheet, Text } from 'react-native'
import { styles } from '../styles'
import { strings } from '../resources/strings'
import OKCancelButtons from '../components/OKCancelButtons'

export default class PinPopup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pin: []
    };
  }

  componentDidMount() {
  }

  render() {
    const { onOK, onCancel } = this.props
    const buttonStyle = {margin: 10, width: 64, height: 64, borderRadius: 32,
       borderWidth: 1, alignItems: 'center', justifyContent: 'center'}
    let dummyStr = []
    for (var i = 0; i < 4; i++) {
      if (i < this.state.pin.length) {
        dummyStr.push('#000000')
      } else {
        dummyStr.push('#FFFFFF')
      }
    }
    return (
      <View style={{padding: 32, flex: 1, flexDirection: 'column', justifyContent: 'space-between'}}>
        <View style={{marginTop: 32, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
          <View style={{width: 16, height: 16, margin: 16, borderRadius: 16, borderWidth: 1, backgroundColor: dummyStr[0]}} />
          <View style={{width: 16, height: 16, margin: 16, borderRadius: 16, borderWidth: 1, backgroundColor: dummyStr[1]}} />
          <View style={{width: 16, height: 16, margin: 16, borderRadius: 16, borderWidth: 1, backgroundColor: dummyStr[2]}} />
          <View style={{width: 16, height: 16, margin: 16, borderRadius: 16, borderWidth: 1, backgroundColor: dummyStr[3]}} />
        </View>
        <View>
          <View style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
            <TouchableHighlight
              style={buttonStyle}
              underlayColor="#AAAAAAAA"
              onPress={() => {
                this.state.pin.push(9)
                this.setState({pin: this.state.pin})
              }}>
              <Text style={{fontSize: 24, alignSelf: 'center'}}>9</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={buttonStyle}
              underlayColor="#AAAAAAAA"
              onPress={() => {
                this.state.pin.push(8)
                this.setState({pin: this.state.pin})
              }}>
              <Text style={{fontSize: 24, alignSelf: 'center'}}>8</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={buttonStyle}
              underlayColor="#AAAAAAAA"
              onPress={() => {
                this.state.pin.push(7)
                this.setState({pin: this.state.pin})
              }}>
              <Text style={{fontSize: 24, alignSelf: 'center'}}>7</Text>
            </TouchableHighlight>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
            <TouchableHighlight
              style={buttonStyle}
              underlayColor="#AAAAAAAA"
              onPress={() => {
                this.state.pin.push(9)
                this.setState({pin: this.state.pin})
              }}>
              <Text style={{fontSize: 24, alignSelf: 'center'}}>6</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={buttonStyle}
              underlayColor="#AAAAAAAA"
              onPress={() => {
                this.state.pin.push(6)
                this.setState({pin: this.state.pin})
              }}>
              <Text style={{fontSize: 24, alignSelf: 'center'}}>5</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={buttonStyle}
              underlayColor="#AAAAAAAA"
              onPress={() => {
                this.state.pin.push(5)
                this.setState({pin: this.state.pin})
              }}>
              <Text style={{fontSize: 24, alignSelf: 'center'}}>4</Text>
            </TouchableHighlight>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
            <TouchableHighlight
              style={buttonStyle}
              underlayColor="#AAAAAAAA"
              onPress={() => {
                this.state.pin.push(4)
                this.setState({pin: this.state.pin})
              }}>
              <Text style={{fontSize: 24, alignSelf: 'center'}}>3</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={buttonStyle}
              underlayColor="#AAAAAAAA"
              onPress={() => {
                this.state.pin.push(3)
                this.setState({pin: this.state.pin})
              }}>
              <Text style={{fontSize: 24, alignSelf: 'center'}}>2</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={buttonStyle}
              underlayColor="#AAAAAAAA"
              onPress={() => {
                this.state.pin.push(2)
                this.setState({pin: this.state.pin})
              }}>
              <Text style={{fontSize: 24, alignSelf: 'center'}}>1</Text>
            </TouchableHighlight>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
            <TouchableHighlight
              style={buttonStyle}
              underlayColor="#AAAAAAAA"
              onPress={() => {
                this.state.pin.push(1)
                this.setState({pin: this.state.pin})
              }}>
              <Text style={{fontSize: 24, alignSelf: 'center'}}>0</Text>
            </TouchableHighlight>
          </View>
        </View>
        <OKCancelButtons
          okDisable={this.state.pin.length < 4}
          onOK={()=> {
            onOK(this.state.pin)
          }}
          onCancel={() => {
            if (this.state.pin.length > 0) {
              this.state.pin.pop()
              this.setState({pin: this.state.pin})
            } else {
              onCancel()
            }
          }}/>
      </View>
    )
  }
}
