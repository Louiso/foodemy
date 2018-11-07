import React, { Component } from 'react'
import { 
  Text,
  View,
  ImageBackground,
  TouchableHighlight,
  StyleSheet
} from 'react-native'

import { 
  Form,
  Item,
  Input,
  Label
} from 'native-base';

import fondo from '../../../assets/fondo.png'
import DissmissKeyboard from '../DissmissKeyboard';
import colors from '../../Theme/Tema1';

export default class Login extends Component {
  state = {
    username: '',
    password: ''
  }
  clickLogin = () => {
    const { navigation } = this.props;
    navigation.navigate('Progreso');
  }
  clickRegister = () => {
    const { navigation } = this.props;
    navigation.navigate('Register');
  }
  render() {
    const  { username , password } = this.state;
    return (
      <DissmissKeyboard>
        <ImageBackground source={fondo} style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
          <Form style = { styles.Form }>
              <Item style = { styles.Item} last floatingLabel>
                <Label>Username</Label>
                <Input
                  style = { styles.Input }
                  onChangeText = { (value) => this.setState({username: value }) }
                  value = {username}
                  floatingLabel
                  />
              </Item>
              <Item style = { styles.Item } last floatingLabel>
                <Label>Password</Label>                
                <Input
                  style = { styles.Input }
                  onChangeText = { (value)=> this.setState({password: value})}
                  value = {password}
                  />
              </Item>
              <View style = {styles.Botones }>
                <TouchableHighlight
                  style = { styles.BotonLogin }
                  onPress = { this.clickLogin }>
                  <Text style = { styles.BotonLoginText }>Iniciar Session</Text>
                </TouchableHighlight>
                <Text style = { styles.Registrar } onPress = { this.clickRegister }>Registrar</Text>
              </View>
            </Form>
        </ImageBackground>
      </DissmissKeyboard>
    )
  }
}

const styles = StyleSheet.create({
  Form:{
    width: '80%',
    alignItems: 'center',
  },
  Item:{
    width: '100%',
    backgroundColor: 'rgba(255,255,255,0.8)'
  },
  Input:{
    width: '100%',
    borderRadius: 5,
  },
  Botones:{
    width: '100%',
    flexDirection: 'row',
    marginTop: 16,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  BotonLogin:{
    padding: 8,
    backgroundColor: colors.secondary,
    borderRadius: 5,
  },
  BotonLoginText:{
    color: 'white',
    textAlign: 'center'
  }, 
  Registrar:{
    color: 'blue',
    textDecorationLine: 'underline',
    textAlign: 'center'
  }

});