import React, { Component } from 'react';
import { View, TouchableOpacity, Image, Text, StyleSheet } from 'react-native';

export default class Card extends Component{
  handleClickElement = (item) => {
    this.props.navigation.navigate('Topico',{
      item: item
    });
  }
  render(){
    const { item} = this.props;
    return(

    <View style = { styles.Card }>
      <TouchableOpacity onPress = { () => this.handleClickElement(item) }>
            <Image style = { styles.CardImage } source = {{
              uri: item.img,
              width: 120,
              height: 88
            }}/>
            <View style = { styles.CardTextContainer}>
              <Text style = { styles.CardText }>{item.name + item.key}</Text>
            </View>
      </TouchableOpacity>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  Card: {
    width: 120,
    height: 120,
    marginRight: 12,
    
  },
  CardTextContainer:{
    height: 32, 
    justifyContent: 'center',
    paddingLeft: 13,
    backgroundColor: 'gray',
  },
  CardText:{
    fontSize: 10,
    fontFamily: 'hind-bold',
    color: 'white',
  }
})