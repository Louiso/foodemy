import { createStackNavigator } from 'react-navigation';
import colors from '../../../../Theme/Tema1';
import Social from './Social';

export default createStackNavigator({
  Social: Social
},{
  navigationOptions: {
    title: 'Social',
    headerStyle: {
      backgroundColor: colors.primary,
    },
    
  }
});