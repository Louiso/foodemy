import React, { Component } from 'react'
import { Text, View , StyleSheet , ScrollView, Dimensions, FlatList ,Image } from 'react-native'
import Robot1 from '../../../../components/Robot1';

import { Header , createBottomTabNavigator } from 'react-navigation'; 

const { width , height } = Dimensions.get('window');

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
          <View style = { styles.Section }>
            <Text style = { styles.SectionTitle }>Basico :</Text>
            <FlatList
              horizontal
              data = { data }
              renderItem  = { ({item}) => {
                return(
                  <View style = { styles.Card }>
                    <Image style = { styles.CardImage } source = {{
                      uri: item.img,
                      width: 104,
                      height: 104
                    }}/>
                    <Text style = { styles.CardText }>{item.name + item.key}</Text>
                  </View>
                );
              }}
            />
          </View>
        </ScrollView>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  Container:{
    height: height - Header.HEIGHT - createBottomTabNavigator.HEIGHT
  },
  Robot:{
    marginTop: 16,
    marginBottom: 16,
    alignItems: 'center',
  },
  Card: {

  }
});
