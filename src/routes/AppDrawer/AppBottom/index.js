import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import SocialStack from './SocialStack';
import ProgresoStack from './ProgresoStack';

import { Icon } from 'native-base';
import TestStack from './TestStack';
export default createBottomTabNavigator({
  TestStack: {
    screen: TestStack,
    navigationOptions:{
      tabBarLabel: 'Test',
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