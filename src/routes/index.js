import { createSwitchNavigator } from 'react-navigation';
import AuthLoading from '../components/AuthLoading';
import AppDrawer from './AppDrawer';
import AuthSwitch from './AuthSwitch';

export default createSwitchNavigator({
  AuthLoading: AuthLoading,
  AppDrawer: AppDrawer,
  AuthSwitch: AuthSwitch
},{
  initialRouteName: 'AppDrawer'
});


