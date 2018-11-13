import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableWithoutFeedback} from 'react-native'
import Robot1 from '../../../components/Robot1';
import Input from '../../../components/Input';

export default class Register extends Component {
  register = () => {
    const { navigation } = this.props;
    navigation.navigate('Progreso');
  }
  render() {
    return (
      <View style = { styles.Container }>
        <View style = { styles.Content } >
          <Text style = { styles.Title }> Foodemy </Text>
          <Robot1/>
          <View style = {styles.Form}>
            <Input label = "Nombre de usuario"/>
            <Input label = "Correo"/>
            <Input label = "Contraseña"/>
            <TouchableWithoutFeedback onPress = { this.register  }>
              <Text style = { styles.IniciarSesion }>Iniciar Sesion</Text>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: 'center',
  },
  Content: {
    marginTop: 60,
    alignItems: 'center'
  },
  Title:{
    fontSize: 64,
    fontFamily: 'poiret-one-regular',
    marginBottom: 22,
  },
  Form: {
    marginTop: 22,
  },
  GroupInput:{
    width: 256,
    marginBottom: 28,
    position: 'relative'
  },
  Label: {
    fontFamily: 'poiret-one-regular',
    fontSize: 14,
    opacity: 0.5,
    position: 'absolute'
  },
  TextInput:{

  },
  Line:{
    borderWidth: 0.5,
    opacity: 0.2
  },
  IniciarSesion: {
    fontFamily: 'hind-bold',
    fontSize: 24,
    textAlign: 'center'
  }
});
