import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableWithoutFeedback, KeyboardAvoidingView, Dimensions , Button } from 'react-native'
import Robot1 from '../../../components/Robot1';
import Input from '../../../components/Input';
import validator from 'validator';
import * as firebase from 'firebase';
import DissmissKeyboard from '../../../components/DissmissKeyboard';
import InputValidator from '../../../helpers/InputValidator';
import { TestDefault, formatError } from '../../../helpers/utils';

const { width , height } = Dimensions.get('window');

export default class Register extends Component {
  state = {
    
    email: new InputValidator('Correo Electronico',[
      TestDefault,
      {
        test: (value) => validator.isEmail(value),
        message: (label) => `${label} no es un Correo Electronico`
      }
    ]),
    password: new InputValidator('Contraseña',[
      TestDefault,
      {
        test: (value) => validator.isLength(value,{ min: 6 }),
        message: (label) => `${label} es muy pequeño`
      }
    ]),
    confirmPassword: new InputValidator('Confirmar Contraseña',[
      TestDefault,
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
  register = async () => {
    const { navigation } = this.props;
    const { email  , password , confirmPassword } = this.state;
    const errors = [];
    if( email.errors.length > 0 ) errors.push(email.errors);
    if( password.errors.length > 0 ) errors.push(password.errors);
    if( confirmPassword.errors.length > 0 ) errors.push(confirmPassword.errors);
    /* Manejo de errores del frontend */
    if(errors.length > 0){
      this.setState({
        serverError: 'Llene los campos correctamente >:T'
      });
    }else{
      if( password.value !== confirmPassword.value ){
        this.setState({
          serverError: 'Las contraseña no coinciden'
        });
      }else{
        /* Manejo de errores del backend */
        try{
          await firebase.auth().createUserWithEmailAndPassword(email.value, password.value);
          navigation.navigate('Progreso');
        }catch(e){
          this.setState({
            serverError: formatError(e)
          });
        }
      }
    } 
  }
  render() {
    return (
      <KeyboardAvoidingView style = {{flex: 1}} behavior="position" enabled>
        <DissmissKeyboard>
          <View style = { styles.Content } >
            <Text style = { styles.Title }> Foodemy </Text>
            <Robot1/>
            <View style = {styles.Form}>
              <Input 
                label = "Correo" 
                name="email" 
                onChangeText = { this.handleChangeText }
                error = { this.state.email.errors[0] } 
              />
              <Input 
                label = "Contraseña" 
                name="password" 
                onChangeText = { this.handleChangeText }
                error = { this.state.password.errors[0] }
                />
              <Input 
                label = "Confirmar Contraseña"
                name= "confirmPassword" 
                onChangeText = { this.handleChangeText }
                error = { this.state.confirmPassword.errors[0]}
              />
              <Text style = { styles.ErrorServer }>{this.state.serverError}</Text>
              <Button onPress = {this.register} title = 'Crear Cuenta'/>
            <TouchableWithoutFeedback onPress = { () => this.props.navigation.navigate('Login') }>
              <Text style = { styles.CrearCuenta }>Tengo Cuenta?</Text>
            </TouchableWithoutFeedback>
            </View>
          </View>
        </DissmissKeyboard>
      </KeyboardAvoidingView>
    )
  }
}
const styles = StyleSheet.create({
  Content: {
    paddingTop: 36,
    width: width,
    height: height,
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
  ErrorServer:{
    width: 256,
    color: 'red',
    textAlign: 'center',
    fontSize: 9
  },
  CrearCuenta: {
    fontFamily: 'hind-bold',
    marginTop: 4,
    fontSize: 14,
    textAlign: 'center'
  }
});
