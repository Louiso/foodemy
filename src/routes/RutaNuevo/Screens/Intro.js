import React, { Component } from 'react'
import { Text, View , StyleSheet ,TouchableWithoutFeedback } from 'react-native'

export default class Intro extends Component {
  next = () => {
    const { navigation } = this.props;
    navigation.navigate('Intro2');
  }
  render() {
    return (
      <View style = {styles.Container }>
        <View style = { styles.Content }>
          <Text style = { styles.Pregunta }>¿Haces dieta y no bajas de peso?</Text>
          <View style = { styles.Respuestas }>
            
            <Text style = { styles.Respuesta }>Si</Text>
            <Text style = { styles.Respuesta }>No</Text>
          </View>
          <TouchableWithoutFeedback onPress = { this.next }>
            <Text style = { styles.Continuar }>continuar</Text>
          </TouchableWithoutFeedback>
          <Text style = { styles.IniciarSession }>Tengo Cuenta</Text>
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
  },
  IniciarSession: {
    textAlign: 'center',
    fontSize: 24,
    marginTop: 62,
    textDecorationLine: 'underline',
    fontFamily: 'poiret-one-regular',
    
  }
});