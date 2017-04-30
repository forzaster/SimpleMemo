import React, { Component } from 'react'
import { Button, View, Animated, StyleSheet, WebView } from 'react-native'
import { styles } from '../styles'
import { strings } from '../resources/strings'

import licenseHtml from '../resources/license'

export default class LicensePopup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      style: StyleSheet.flatten([styles.popup,
        {top: new Animated.Value(200)}]),
      height: 0
    };
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
    const { onOK } = this.props
    return (
      <View style={{flex: 1}}>
        <WebView
          source={{html: licenseHtml}}
          style={{marginTop: 16}} />
        <Button type="submit" title={strings.OK} onPress={onOK} />
      </View>
    )
  }
}
