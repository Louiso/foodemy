import React, { Component } from 'react'
import { Text, View , TextInput , StyleSheet} from 'react-native'

export default class Input extends Component {
  render() {
    const { label } = this.props;
    return (
      <View style = { styles.GroupInput }>
        <Text style = {styles.Label}>{ label }:</Text>
        <TextInput style = {styles.TextInput}/>
        <View style = { styles.Line }/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  GroupInput:{
    width: 256,
    marginBottom: 28,
  },
  Label: {
    fontFamily: 'poiret-one-regular',
    fontSize: 14,
    opacity: 0.5
  },
  TextInput:{

  },
  Line:{
    borderWidth: 0.5,
    opacity: 0.2
  },
});