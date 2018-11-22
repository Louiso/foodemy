import React from 'react';
import { createDrawerNavigator, DrawerItems, SafeAreaView} from 'react-navigation';
import Profile from './Profile/Profile';
import { ScrollView , Text } from 'react-native';
import Home from './Home';
import SignOut from './SignOut';

const CustomDrawerContentComponent = (props) => (
  <ScrollView>
    <SafeAreaView style={{ flex: 1}} forceInset={{ top: 'always', horizontal: 'never' }}>
      <Text>Foodemy</Text>
      <DrawerItems {...props} />
    </SafeAreaView>
  </ScrollView>
);

export default createDrawerNavigator({
  Home: Home,
  Profile: Profile,
  SignOut: SignOut
},{
  initialRouteName: 'Home',
  contentComponent: CustomDrawerContentComponent,
  contentOptions:{
    activeTintColor: 'green'
  }
});
