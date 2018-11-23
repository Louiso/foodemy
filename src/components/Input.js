import React, { Component } from 'react'
import { Text, View , TextInput , StyleSheet, Animated } from 'react-native'

export default class Input extends Component {
  static defaultProps = {
    onChangeText: (value,name) => '',
    name: '',
    value: ''
  }
  state = {
    spin: new Animated.Value(0),
  }
  handleFocus = () => {
    if(!this.props.value){
      Animated.timing(
        this.state.spin,
        {
          toValue: 1
        }
      ).start();
    }
  }
  handleBlur = () => {
    if(!this.props.value){
      Animated.timing(
        this.state.spin,{
          toValue: 0
        }
      ).start();
    }
  }
  getKeyboard = () => {
    switch(this.props.name){
      case 'email':
        return 'email-address';
      default:
        return 'default'
    }
  }
  
  render() {
    const { label, name } = this.props;
    const left = this.state.spin.interpolate({
      inputRange: [0,1],
      outputRange: [ 16, 0]
    });
    const top = this.state.spin.interpolate({
      inputRange: [0,1],
      outputRange: [6,-11]
    });
    const fontSize = this.state.spin.interpolate({
      inputRange: [0,1],
      outputRange: [14,11]
    });
    const opacity = this.state.spin.interpolate({
      inputRange: [0,1],
      outputRange: [0.5, 1]
    });

    
    return (
      <View style = { styles.GroupInput }>
        <Animated.Text style = {{
          position: 'absolute',
          fontFamily: 'poiret-one-regular',
          left,
          top,
          fontSize,
          opacity
        }}>{ label }:</Animated.Text>
        <TextInput
          keyboardType = { this.getKeyboard() }
          secureTextEntry = { this.props.name == 'password' || this.props.name == 'confirmPassword' }
          style = {styles.TextInput} 
          onChangeText = { (value) => {
            this.props.onChangeText(value, name);
          } } 
          onFocus = { this.handleFocus }
          onBlur = { this.handleBlur }
          value = { this.props.value }
          />
        <View style = { styles.Line }/>
        <Text style = { styles.Error }>{ this.props.error } </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  GroupInput:{
    width: 256,
    height: 48,
    marginBottom: 28,
  },
  TextInput:{

  },
  Line:{
    marginTop: 12,
    borderWidth: 0.5,
    opacity: 0.2
  },
  Error:{
    fontSize: 8,
    marginLeft: 16,
    color: 'orange'
  }
});