import React from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'mobx-react';
import store from './src/store/store';
import Routes from './src/routes/Routes';
export default class App extends React.Component {
  render() {
    return (
      <Provider store = {store}>
        <Routes/>
      </Provider>
    );
  }
}

