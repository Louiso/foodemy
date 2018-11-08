import { createStackNavigator } from 'react-navigation';
import colors from '../../../../Theme/Tema1';
import Test from './Test';

export default createStackNavigator({
  Test: Test
},{
  navigationOptions: {
    title: 'Test',
    headerStyle: {
      backgroundColor: colors.primary,
    },
    
  }
});