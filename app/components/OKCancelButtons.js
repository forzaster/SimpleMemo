import React, { Component } from 'react'
import { Button, View } from 'react-native'
import { styles } from '../styles'
import { strings } from '../resources/strings'

export default class OKCancelButtons extends Component {
  render() {
    const { onOK, onCancel } = this.props
    return (
      <View style={{width: '100%', flexDirection: 'row'}}>
        <View style={{flex: 1}}>
          <Button type="submit" title={strings.OK} onPress={onOK} />
        </View>
        <View style={{flex: 1}}>
          <Button type="submit" title={strings.Cancel} onPress={onCancel} />
        </View>
      </View>
    );
  }
}
