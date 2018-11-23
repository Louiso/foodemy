import React, { Component } from 'react'
import { 
  Text,
  View,
  FlatList,
  StyleSheet,
} from 'react-native'
import Card from './Card';

export default class Section extends Component {

  render() {
    const { name , data } = this.props; 
    return (
      <View style = { styles.Section }>
        <Text style = { styles.SectionTitle }>{name} :</Text>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data = { data }
          renderItem  = { ({item}) => (<Card item = {item} navigation = { this.props.navigation } />) }
        />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  Section:{
    marginLeft: 28,
    marginBottom: 32,
  },
  SectionTitle:{
    fontFamily: 'hind-bold',
    fontSize: 18,
    marginBottom: 28,
  }
});