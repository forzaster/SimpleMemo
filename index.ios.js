import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './app/components/App';
import reducer from './app/reducers';
import styles from './app/styles'

const store = createStore(reducer);

export default class SimpleMemo extends Component {
  render() {
      return (
        <Provider store={store}>
          <App />
        </Provider>
      );
  }
}

AppRegistry.registerComponent('SimpleMemo', () => SimpleMemo);
