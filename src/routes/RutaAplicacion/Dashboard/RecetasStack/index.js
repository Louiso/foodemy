import { createStackNavigator } from 'react-navigation';
import colors from '../../../../Theme/Tema1';
import Recetas from './Recetas';

export default createStackNavigator({
  Recetas: Recetas
},{
  navigationOptions: {
    title: 'Recetas',
    headerStyle: {
      backgroundColor: colors.primary,
    },
    
  }
});