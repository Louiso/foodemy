import { createStackNavigator } from 'react-navigation';
import colors from '../../../../Theme/Tema1';
import Test from '../../../../components/Test';
export default createStackNavigator({
  Social: Test
},{
  navigationOptions: {
    title: 'Test',
    headerStyle: {
      backgroundColor: colors.primary,
    },
    
  }
});