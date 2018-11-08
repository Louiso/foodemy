import { createDrawerNavigator } from 'react-navigation';
import Profile from './Profile/Profile';
import Dashboard from './Dashboard';

export default createDrawerNavigator({
  Dashboard: Dashboard,
  Profile: Profile 
},{
  initialRouteName: 'Dashboard'
});