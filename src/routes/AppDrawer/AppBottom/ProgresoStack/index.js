import { createStackNavigator } from 'react-navigation'
import Progreso from '../../../../components/Progreso';
import colors from '../../../../Theme/Tema1';
export default createStackNavigator({
  Progreso: Progreso,
},{
  navigationOptions: {
    headerStyle: {
      backgroundColor: colors.primary,
    }
  },
});