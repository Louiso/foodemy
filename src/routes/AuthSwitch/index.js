import { createSwitchNavigator } from 'react-navigation'
import Register from '../../components/Auth/Register';
import Login from '../../components/Auth/Login';

export default createSwitchNavigator({
  'Login': Login,
  'Register': Register
},{
  initialRouteName: 'Register'
});