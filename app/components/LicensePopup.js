import React, { Component } from 'react'
import { Button, View, Animated, StyleSheet, WebView } from 'react-native'
import { styles } from '../styles'
import { strings } from '../resources/strings'

import licenseHtml from '../resources/license'

export default class LicensePopup extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
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
