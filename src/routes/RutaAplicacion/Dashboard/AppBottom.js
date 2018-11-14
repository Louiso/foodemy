import { createBottomTabNavigator } from 'react-navigation';
import HomeStack from './HomeStack';
import SocialStack from './SocialStack';
import ProgresoStack from './ProgresoStack';

export default createBottomTabNavigator({
  HomeStack: HomeStack,
  ProgresoStack: ProgresoStack,
  SocialStack: SocialStack 
});