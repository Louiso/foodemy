import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class Topico extends Component {
  render() {
    const item = this.props.navigation.getParam('item','No hay :,v');
    const { temaActual, temas } = item;
    console.log(temas[temaActual]);
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    )
  }
}
