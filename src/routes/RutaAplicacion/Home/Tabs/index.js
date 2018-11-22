import React from 'react';
import { Icon } from 'native-base';
import Recetas from './Screens/Recetas';
import Progreso from './Screens/Progreso';
import Social from './Screens/Social';
import { createMaterialTopTabNavigator } from 'react-navigation';

export default createMaterialTopTabNavigator({
  Recetas: {
    screen: Recetas,
    navigationOptions:{
      tabBarLabel:'Recetas',
      tabBarIcon: ({tintColor}) => (
        <Icon name='group' type="MaterialIcons"/>
      )
    }
  },
  Progreso: {
    screen: Progreso,
    navigationOptions:{
      tabBarLabel:'Progreso',
      tabBarIcon: ({tintColor}) => (
        <Icon name='group' type="MaterialIcons"/>
      )
    }
  },
  Social: {
    screen: Social,
    navigationOptions:{
      tabBarLabel:'Social',
      tabBarIcon: ({tintColor}) => (
        <Icon name='group' type="MaterialIcons"/>
      )
    }
  }
},{
  initialRouteName: 'Progreso',
  tabBarPosition: 'bottom',
  animationEnabled: false,
  tabBarOptions:{
    activeTintColor: 'orange',
    inactiveTintColor: 'gray',
    style: {
      backgroundColor: '#f2f2f2',

    },
    showIcon: true
  }
})