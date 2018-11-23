import React, { Component } from 'react'
import { View , StyleSheet , ScrollView } from 'react-native'
import * as firebase from 'firebase';

import Robot1 from '../../../../../components/Robot1';
import Section from '../../../../../components/Section';

import { inject , observer } from 'mobx-react'


@inject('store') @observer
class Progreso extends Component {
  componentDidMount(){
    // console.log(firebase.auth().currentUser);
  }
  render() {
    const { data } = this.props.store;
    return (
      <View style = { styles.Container }>
        <ScrollView>
          <View style = { styles.Robot }>
            <Robot1/>
          </View>
          <Section name = "Basico" data = { data } navigation = { this.props.navigation }/>         
          <Section name = "Intermedio"  data = { data } navigation = { this.props.navigation }/>
          <Section name = "Avanzado" data = { data } navigation = { this.props.navigation } />
        </ScrollView>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  Container:{
    flex: 1
  },
  Robot:{
    marginTop: 38,
    marginBottom: 38,
    alignItems: 'center',
  },
});

export default Progreso;