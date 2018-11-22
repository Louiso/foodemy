import React from 'react';
import { Provider } from 'mobx-react';
import store from './src/store/store';
import Routes from './src/routes';
import 'firebase/database';
import 'firebase/auth';
import * as firebase from 'firebase';

import { SafeAreaView } from 'react-native'

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDpFMvt8WMrcDCHqQ49oEsVu-vzXbRYfuo",
  authDomain: "foodemy.firebaseapp.com",
  databaseURL: "https://foodemy.firebaseio.com",
  projectId: "foodemy",
  storageBucket: "foodemy.appspot.com",
  messagingSenderId: "745089755822"
};
firebase.initializeApp(firebaseConfig); 


export default class App extends React.Component {
  render() {
    return (
      <Provider store = {store}>
        <SafeAreaView style = { { flex : 1}}>
          <Routes/>
        </SafeAreaView>
      </Provider>
    );
  }
}

