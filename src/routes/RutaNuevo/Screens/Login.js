import React, { Component } from 'react'
import { Text, View, StyleSheet , TouchableWithoutFeedback} from 'react-native'
import Robot1 from '../../../components/Robot1';
import Input from '../../../components/Input';

export default class Login extends Component {
  login = () => {
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
            <Input label = "Correo"/>
            <Input label = "Contraseña"/>
            <TouchableWithoutFeedback onPress = { this.login }>
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
    marginBottom: 40,
  },
  Form: {
    marginTop: 40,
  },
  
  IniciarSesion: {
    fontFamily: 'hind-bold',
    fontSize: 24,
    textAlign: 'center'
  }
});
