import { createSwitchNavigator } from 'react-navigation';
import Intro from './Screens/Intro';
import Login from './Screens/Login';
import Register from './Screens/Register';
import Intro2 from './Screens/Intro2';
import Intro3 from './Screens/Intro3';
import Intro4 from './Screens/Intro4';

const RutaNuevo = createSwitchNavigator({
  Intro:{
    screen: Intro
  },
  Intro2:{
    screen: Intro2
  },
  Intro3:{
    screen: Intro3
  },
  Intro4:{
    screen: Intro4
  },
  Login: {
    screen: Login
  },
  Register: {
    screen: Register
  }
},{
  initialRouteName: 'Register'
});

export default RutaNuevo;