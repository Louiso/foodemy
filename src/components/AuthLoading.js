import React, { Component } from 'react'
import { Text, View, ActivityIndicator , StyleSheet } from 'react-native'
import { observer , inject } from 'mobx-react'

@inject('store') @observer 
export default class AuthLoading extends Component {
  componentWillMount(){
    const { navigation , store : { user } } = this.props;
    setTimeout(()=>{
      navigation.navigate(user? 'Home': 'Auth');
    },3000);
  }
  render() {
    return (
      <View style = {styles.container}>
        <ActivityIndicator/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    backgroundColor: '#cccbc7'
  }
});