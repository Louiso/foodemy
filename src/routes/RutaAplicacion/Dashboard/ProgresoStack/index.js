import { createStackNavigator } from 'react-navigation'
import colors from '../../../../Theme/Tema1';
import Progreso from './Progreso';
export default createStackNavigator({
  Progreso: Progreso,
},{
  navigationOptions: {
    headerStyle: {
      backgroundColor: colors.primary,
    }
  },
});