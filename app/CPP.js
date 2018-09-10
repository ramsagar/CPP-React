import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import RootReducer from './Reducer.js'

import Routes from './Routes';


const store = createStore(RootReducer);

class Cpp extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
          <Routes />
      </Provider>
    );
  }
}


export default Cpp;
