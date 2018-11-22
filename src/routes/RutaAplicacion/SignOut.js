import React, { Component } from 'react';
import { Text } from 'react-native';
import * as firebase from 'firebase';
export default class SignOut extends Component{
  componentDidMount(){
    firebase.auth().signOut();
    this.props.navigation.navigate('Login');
  }
  render(){
    return(
      <Text>...Loading</Text>
    );
  }
}
