import React, { Component } from 'react'
import { Text, View , StyleSheet,TouchableWithoutFeedback } from 'react-native'

export default class Intro2 extends Component {
  next = () => {
    const { navigation } = this.props;
    navigation.navigate('Intro3');
  }
  render() {
    return (
      <View style = {styles.Container }>
        <View style = { styles.Content }>
          <Text style = { styles.Pregunta }>¿Quieres bajar de peso sin hacer tanto esfuerzo?</Text>
          <View style = { styles.Respuestas }>
          
            <Text style = { styles.Respuesta }>Si</Text>
            <Text style = { styles.Respuesta }>No</Text>
          </View>
          <TouchableWithoutFeedback onPress = { this.next }>
            <Text style = { styles.Continuar }>continuar</Text>
          </TouchableWithoutFeedback>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  Container:{
    flex: 1,
    alignItems: 'center'
  },
  Content:{
    marginTop: 193,
  },
  Pregunta: {
    textAlign: 'center',
    fontFamily: 'poiret-one-regular',
    width: 192,
    fontSize: 24,
  },
  Respuestas: {
    marginTop: 72,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  Respuesta:{
    fontSize: 24,
    fontFamily: 'poiret-one-regular'
  },
  Continuar:{
    marginTop: 72,
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'poiret-one-regular',
  }
});