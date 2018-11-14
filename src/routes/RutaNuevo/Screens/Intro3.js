import React, { Component } from 'react'
import { Text, View , StyleSheet } from 'react-native'
import Robot1 from '../../../components/Robot1';

// Constant : statusbarHeight
export default class Intro3 extends Component {
  render() {
    return (
      <View style = {styles.Container }>
        <View style = { styles.Content }>
          <Text style = { styles.Lema }>Conocer tu cuerpo  y saber como funciona es la clave para lograr el EXITO!!</Text>
          <Robot1/>
          <Text style = { styles.Extra }>Te presento a MetaBot, representa tu metabolismo y a medida que aumentes tus conocimientos evolucionara</Text>
          <Text style = { styles.Continuar }>continuar</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  Container:{
    flex: 1,
  },
  Content:{
    marginTop: 120,
    alignItems: 'center'
  },
  Lema: {
    textAlign: 'center',
    fontFamily: 'poiret-one-regular',
    width: 270,
    fontSize: 24,
    marginBottom: 32
  },
  Extra:{
    marginTop: 32,
    fontSize: 18,
    width: 250,
    textAlign: 'center',
    fontFamily: 'poiret-one-regular'
  },
  Continuar:{
    marginTop: 20,
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'poiret-one-regular',
  }
});