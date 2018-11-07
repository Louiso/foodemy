import React, { Component } from 'react'
import { 
  Text,
  View,
  TouchableHighlight,
  StyleSheet
} from 'react-native'

import { 
  Form,
  Item,
  Input,
  Label,
  Container
} from 'native-base';

import DissmissKeyboard from '../DissmissKeyboard';
import colors from '../../Theme/Tema1';

export default class Register extends Component {
  state = {
    username: '',
    password: '',
    email: ''
  }
  render() {
    const  { username , password, email } = this.state;
    return (
      <DissmissKeyboard>
        <Container style = { styles.Container }>
          <View style = { styles.Content }>

            <Text style = { styles.Title }>Crear una cuenta</Text>
            <Form style = { styles.Form }>
              <Item style = { styles.Item } floatingLabel>
                <Label style = { styles.Label }>Username</Label>
                <Input
                  style = { styles.Input }
                  onChangeText = { (value) => this.setState({username: value }) }
                  value = {username}
                  floatingLabel
                  />
              </Item>
              <Item style = { styles.Item} floatingLabel>
                <Label style = { styles.Label }>Correo Electronico</Label>
                <Input
                  style = { styles.Input }
                  onChangeText = { (value) => this.setState({email: value }) }
                  value = {email}
                  floatingLabel
                  />
              </Item>
              <Item style = { styles.Item } floatingLabel>
                <Label style = { styles.Label }>Password</Label>                
                <Input
                  style = { styles.Input }
                  onChangeText = { (value)=> this.setState({password: value})}
                  value = {password}
                  />
              </Item>
              <View style = {styles.Botones }>
                <View style = {styles.Pregunta}> 
                  <Text style = { styles.PreguntaText }>¿Tienes una cuenta?</Text>
                  <Text style = { styles.IniciarSession }>Iniciar Sesion</Text>
                </View>
                <TouchableHighlight
                  style = { styles.BotonRegistrar }
                  >
                  <Text style = { styles.BotonRegistrarText }>REGISTRAR</Text>
                </TouchableHighlight>
              </View>
            </Form>
          </View>
        </Container>
      </DissmissKeyboard>
    )
  }
}

const styles = StyleSheet.create({
  Container:{
    backgroundColor: colors.primary,
    alignItems: 'center'
  },
  Content:{
    width: '90%',
    marginTop: 24
  },
  Title: {
    fontSize: 25,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold'
  },
  Form:{
    
  },
  Item:{

  },
  Label:{
    fontSize: 13
  },
  Input:{
  },
  Botones:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24
  },
  Pregunta: {

  },
  PreguntaText:{
    fontWeight: 'bold',
    color: 'white'
  },
  IniciarSession:{
    color: 'blue',
    margin: 4
  },
  BotonRegistrar:{
    padding: 16,
    backgroundColor: colors.secondary,
    borderRadius: 4
  },
  BotonRegistrarText:{
    color: 'white'
  }



});