import React from 'react';
import { Provider } from 'mobx-react';
import store from './src/store/store';
import Routes from './src/routes';
export default class App extends React.Component {
  render() {
    return (
      <Provider store = {store}>
        <Routes/>
      </Provider>
    );
  }
}

