import React, { Component } from 'react'
import { View, ActivityIndicator , StyleSheet } from 'react-native'
import { observer , inject } from 'mobx-react'
import colors from '../Theme/Tema1';
import { Font } from 'expo';

@inject('store') @observer 
export default class Loader extends Component {
  async componentDidMount() {
    await Font.loadAsync({
      'poiret-one-regular': require('../../assets/fonts/PoiretOne-Regular.ttf'),
    });
    const { navigation , store : { user } } = this.props;
    navigation.navigate(user? 'RutaAplicacion': 'RutaNuevo');
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