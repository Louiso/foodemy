import { createStackNavigator } from 'react-navigation';
import Social from '../../../../components/Social';
import colors from '../../../../Theme/Tema1';

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