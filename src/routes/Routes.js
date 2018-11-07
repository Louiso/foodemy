import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { createSwitchNavigator } from 'react-navigation';
import Home from '../components/Home';
import Auth from '../components/Auth';
import AuthLoading from '../components/AuthLoading';
import AppDrawer from './AppDrawer';

export default createSwitchNavigator({
  AuthLoading: AuthLoading,
  AppDrawer: AppDrawer,
  Auth: Auth
},{
  initialRouteName: 'AuthLoading'
});


