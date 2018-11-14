import React, { Component } from 'react'
import { Text, View , StyleSheet , TextInput } from 'react-native'

export default class Intro4 extends Component {
  render() {
    return (
      <View style = {styles.Container }>
        <View style = { styles.Content }>
          <Text style = { styles.Peticion }>Necesitamos saber mas de ti: </Text>
          <View style = { styles.Row }>
            <View styles = { styles.Col}>
              <Text style = { styles.Text }>Altura :</Text>
              <View style = { styles.TextInputContainer }>
                <TextInput style = { styles.TextInput } />
                <View style = { styles.Line}/>
              </View>
            </View>
            <View styles = { styles.Col}>
              <Text style = { styles.Text }>Peso :</Text>
              <View style = { styles.TextInputContainer }>
                <TextInput style = { styles.TextInput}/>
                <View style = { styles.Line}/>
              </View>
            </View>
          </View>
          <View style = { styles.Row }>
            <View styles = { styles.Col}>
              <Text style = { styles.Text }>Edad :</Text>
              <View style = { styles.TextInputContainer }>
                <TextInput style = { styles.TextInput}/>
                <View style = { styles.Line}/>
              </View>
            </View>
            <View styles = { styles.Col}>
              <Text style = { styles.Text }>Sexo :</Text>
              <View style = { styles.TextInputContainer }>
                <TextInput style = { styles.TextInput}/>
                <View style = { styles.Line}/>
              </View>
            </View>
          </View>
          <Text style = { styles.Continuar }>continuar</Text>
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
    marginTop: 120,
  },
  Peticion: {
    textAlign: 'center',
    fontFamily: 'poiret-one-regular',
    width: 192,
    fontSize: 24,
  },
  Row: {
    width: 200,
    marginTop: 72,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  Col:{
    alignItems: 'center'
  },
  Text:{
    fontFamily: 'poiret-one-regular',
    fontSize: 24,
  },
  TextInputContainer:{
    width: 48,
    flexDirection: 'column',
    alignItems: 'center'
  },
  TextInput:{

  },
  Line:{
    width: '100%',
    borderWidth: 0.5,
  },
  Continuar:{
    marginTop: 72,
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'poiret-one-regular',
  }
});