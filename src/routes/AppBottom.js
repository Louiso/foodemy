import { createBottomTabNavigator } from 'react-navigation';
import HomeStack from './HomeStack';
import SocialStack from './SocialStack';

export default createBottomTabNavigator({
  HomeStack: HomeStack,
  SocialStack: SocialStack 
});