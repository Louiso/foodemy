import React, { Component } from 'react'
import { View, ActivityIndicator , StyleSheet } from 'react-native'
import colors from '../Theme/Tema1';
import { Font } from 'expo';

import * as firebase from 'firebase';

export default class Loader extends Component {
  async componentDidMount() {
    await Font.loadAsync({
      'poiret-one-regular': require('../../assets/fonts/PoiretOne-Regular.ttf'),
      'hind-bold': require('../../assets/fonts/Hind-Bold.ttf'),
      'hind-light': require('../../assets/fonts/Hind-Light.ttf'),
      'hind-medium': require('../../assets/fonts/Hind-Medium.ttf'),
      'hind-regular': require('../../assets/fonts/Hind-Regular.ttf'),
      'hind-semi-bold': require('../../assets/fonts/Hind-SemiBold.ttf'),
      
    });
    const { navigation } = this.props;
    firebase.auth().onAuthStateChanged((user) => {
      if (user != null) {
        navigation.navigate('RutaAplicacion');
      }else{
        navigation.navigate('RutaNuevo');
      }
    });
  }
  render() {
    return (
      <View style = {styles.container}>
         <ActivityIndicator size="large" color={colors.primary} />
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