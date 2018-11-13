import React, { Component } from 'react'
import { View , StyleSheet , ScrollView } from 'react-native'
import Robot1 from '../../../../components/Robot1';

import Section from '../../../../components/Section';

const data = [
  {
    key: '1',
    name: 'Metabolismo',
    img: 'https://www.ecestaticos.com/imagestatic/clipping/fde/33c/fde33cf01d854fbbeddb03adf891ff23/7-comidas-que-nunca-debes-tomar-antes-de-acostarte-o-engordaras.jpg?mtime=1505216960'
  },
  {
    key: '2',
    name: 'Macromoleculas',
    img: 'https://www.ecestaticos.com/imagestatic/clipping/fde/33c/fde33cf01d854fbbeddb03adf891ff23/7-comidas-que-nunca-debes-tomar-antes-de-acostarte-o-engordaras.jpg?mtime=1505216960'
  },
  {
    key: '3',
    name: 'Metabolismo',
    img: 'https://www.ecestaticos.com/imagestatic/clipping/fde/33c/fde33cf01d854fbbeddb03adf891ff23/7-comidas-que-nunca-debes-tomar-antes-de-acostarte-o-engordaras.jpg?mtime=1505216960'
  },
  {
    key: '4',
    name: 'Macromoleculas',
    img: 'https://www.ecestaticos.com/imagestatic/clipping/fde/33c/fde33cf01d854fbbeddb03adf891ff23/7-comidas-que-nunca-debes-tomar-antes-de-acostarte-o-engordaras.jpg?mtime=1505216960'
  },
  {
    key: '5',
    name: 'Metabolismo',
    img: 'https://www.ecestaticos.com/imagestatic/clipping/fde/33c/fde33cf01d854fbbeddb03adf891ff23/7-comidas-que-nunca-debes-tomar-antes-de-acostarte-o-engordaras.jpg?mtime=1505216960'
  },
  {
    key: '6',
    name: 'Macromoleculas',
    img: 'https://www.ecestaticos.com/imagestatic/clipping/fde/33c/fde33cf01d854fbbeddb03adf891ff23/7-comidas-que-nunca-debes-tomar-antes-de-acostarte-o-engordaras.jpg?mtime=1505216960'
  },
  {
    key: '7',
    name: 'Metabolismo',
    img: 'https://www.ecestaticos.com/imagestatic/clipping/fde/33c/fde33cf01d854fbbeddb03adf891ff23/7-comidas-que-nunca-debes-tomar-antes-de-acostarte-o-engordaras.jpg?mtime=1505216960'
  }
];

export default class Progreso extends Component {
  render() {
    return (
      <View style = { styles.Container }>
        <ScrollView>
          <View style = { styles.Robot }>
            <Robot1/>
          </View>
          <Section name = "Basico" data = {data}/>         
          <Section name = "Intermedio" data = {data}/>
          <Section name = "Avanzado" data = {data}/>
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
