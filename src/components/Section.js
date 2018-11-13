import React, { Component } from 'react'
import { 
  Text,
  View,
  FlatList,
  Image,
  StyleSheet
} from 'react-native'

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
          renderItem  = { ({item}) => {
            return(
              <View style = { styles.Card }>
                <Image style = { styles.CardImage } source = {{
                  uri: item.img,
                  width: 105,
                  height: 77
                }}/>
                <View style = { styles.CardTextContainer}>
                  <Text style = { styles.CardText }>{item.name + item.key}</Text>
                </View>
              </View>
            );
          }}
        />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  Section:{
    marginLeft: 20,
    marginBottom: 38,
  },
  SectionTitle:{
    fontFamily: 'hind-bold',
    fontSize: 18,
    marginBottom: 28,
  },
  Card: {
    width: 105,
    height: 105,
    marginRight: 10,
    
  },
  CardTextContainer:{
    height: 28, 
    justifyContent: 'center',
    paddingLeft: 6,
    backgroundColor: 'gray',
  },
  CardText:{
    fontSize: 10,
    fontFamily: 'hind-bold',
    color: 'white',
  }
});