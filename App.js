/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Provider} from 'react-redux';
import List from './src/components/List';
import {store} from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <List />
    </Provider>
  );
};

export default App;
