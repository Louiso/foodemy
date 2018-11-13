import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import SocialStack from './SocialStack';
import ProgresoStack from './ProgresoStack';
import { Icon } from 'native-base';
import RecetasStack from './RecetasStack';
export default createBottomTabNavigator({
  RecetasStack: {
    screen: RecetasStack,
    navigationOptions:{
      tabBarLabel: 'Recetas',
      tabBarIcon: ({tintColor}) => (
        <Icon name='group' type="MaterialIcons"/>
      )
    }
  },
  ProgresoStack: {
    screen: ProgresoStack,
    navigationOptions:{
      tabBarLabel: 'Progreso',
      tabBarIcon: ({tintColor}) => (
        <Icon name='home'/>
      )
    }
  },
  SocialStack: {
    screen: SocialStack,
    navigationOptions:{
      tabBarLabel: 'Social',
      tabBarIcon: ({tintColor}) => (
        <Icon name='group' type="MaterialIcons"/>
      )
    }
  }
},{
  initialRouteName: 'ProgresoStack',
});