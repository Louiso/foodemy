import React, { Component } from 'react'
import { Text, View, StyleSheet , TouchableWithoutFeedback, Button} from 'react-native'
import Robot1 from '../../../components/Robot1';
import Input from '../../../components/Input';

import * as firebase from 'firebase';
import 'firebase/auth';

import InputValidator from '../../../helpers/InputValidator';
import { TestDefault } from '../../../helpers/utils';
import validator from 'validator';
import ViewForm from '../../../components/ViewForm';

export default class Login extends Component {
  state = {
    email: new InputValidator('Correo Electronico',[
      TestDefault,
    ]),
    password: new InputValidator('Contraseña',[
      TestDefault,
      {
        test: (value) => validator.isEmail(value),
        message: (label) => `${label} no es Correo Electronico` 
      }
    ]),
    serverError: ''
  }
  handleChangeText = (value, name) => {
    const inputValidator = this.state[name];
    inputValidator.value = value;
    inputValidator.validar();
    this.setState({
      [name]: inputValidator
    });
  }
  login = () => {
    const { navigation } = this.props;
    const { email  , password } = this.state;
    const errors = [];
    if( email.errors.length > 0 ) errors.push(email.errors);
    if( password.errors.length > 0 ) errors.push(password.errors);
    /* Manejo de errores del frontend */
    if(errors.length > 0){
      this.setState({
        serverError: 'Llene los campos correctamente >:T'
      });
    }else{
      /* Manejo de errores del backend */
      try{
        firebase.auth().signInWithEmailAndPassword(email.value, password.value);
        navigation.navigate('Progreso');
      }catch(e){
        this.setState({
          serverError: formatError(e)
        });
      }
    }
  }

  render() {
    return (
      <ViewForm>
        <View style = { styles.Content } >
          <Text style = { styles.Title }> Foodemy </Text>
          <Robot1/>
          <View style = {styles.Form}>
            <Input 
              label = "Correo"
              name = 'email'
              onChangeText = { this.handleChangeText }
              error = { this.state.email.errors[0]}
              />
            <Input 
              label = "Contraseña"
              name = 'password'
              onChangeText = { this.handleChangeText }
              error = { this.state.password.errors[0]}
              />
            <Text style = { styles.ErrorServer}>{this.state.serverError}</Text>
            
            <Button onPress = {this.login} title = 'Iniciar Sesion'/>
            <TouchableWithoutFeedback onPress = { () => this.props.navigation.navigate('Register') }>
              <Text style = { styles.IniciarSesion }>Soy Nuevo?</Text>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </ViewForm>
    )
  }
}
const styles = StyleSheet.create({
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
  ErrorServer:{
    width: 256,
    color: 'red',
    textAlign: 'center',
    fontSize: 9
  },
  IniciarSesion: {
    fontFamily: 'hind-bold',
    marginTop: 4,
    fontSize: 14,
    textAlign: 'center'
  }
});
