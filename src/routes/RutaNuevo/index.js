import { createSwitchNavigator } from 'react-navigation';
import Intro from './Screens/Intro';
import Login from './Screens/Login';
import Register from './Screens/Register';
import Intro2 from './Screens/Intro2';
import Intro3 from './Screens/Intro3';
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
  Login: {
    screen: Login
  },
  Register: {
    screen: Register
  }
},{
  initialRouteName: 'Intro3'
});

export default RutaNuevo;