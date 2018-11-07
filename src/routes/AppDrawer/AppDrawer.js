import { createDrawerNavigator } from 'react-navigation';
import Profile from '../../components/Profile';
import AppBottom from './AppBottom';

export default createDrawerNavigator({
  Inicio: {
    screen: AppBottom,
  },
  Profile: Profile
});