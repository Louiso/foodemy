import React from 'react';
import { TouchableOpacity , View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Tabs from './Tabs';
import { Icon } from 'native-base';
import Topico from './screens/Topico';

export default createStackNavigator({
  Tabs:{
    screen: Tabs,
    navigationOptions: ({navigation})=>({
      title: 'Foodemy',
      headerLeft: (
        <TouchableOpacity onPress = { () => navigation.toggleDrawer()}>
          <View style = { { paddingHorizontal: 10}}>
            <Icon name='menu' type="MaterialIcons"/>
          </View>
        </TouchableOpacity>
      )
    })
  },
  Topico: {
    screen: Topico
  }
})