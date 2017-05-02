import React, { Component } from 'react'
import { View, Text, Image, ListView, Animated, StyleSheet, TouchableHighlight } from 'react-native';
import { styles } from '../styles'

let sAnimCache = {}

export default class ListItem extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {rowData, fadeAnim, onItemClick} = this.props;
    return (
      <TouchableHighlight
        style={styles.item}
        underlayColor="#AAAAAAAA"
        onPress={() => {
          onItemClick(rowData)
        }}>
        <Animated.View style={{opacity: fadeAnim}}>
          <View>
            <View style={{flexDirection: "row", height: 68 }}>
              {(() => {
                if (rowData.image) {
                  return (<Image style={{marginLeft: 16, marginTop: 16, marginBottom: 4, width: 48}} source={{uri: rowData.image}}/>)
                } else {
                  return (<View style={{marginLeft: 16, marginTop: 16, marginBottom: 4, width: 48, backgroundColor: '#BBAAAAAA'}}/>)
                }
              })()}
              <View>
                <Text style={StyleSheet.flatten([styles.itemTitleText,
                  {paddingRight: 16}])} ellipSizeMode='tail' numberOfLines={1}>{rowData.title}</Text>
                <Text style={styles.itemContentText}>{rowData.date.toDateString()}</Text>
              </View>
            </View>
            <Text style={StyleSheet.flatten([styles.itemContentText,
              {paddingTop: 8}])} >{rowData.content}</Text>
          </View>
        </Animated.View>
      </TouchableHighlight>
    )
  }
}
