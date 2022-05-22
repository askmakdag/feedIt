/**
 * @format
 */

import React from 'react';
import {AppRegistry, LogBox} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {NavigationContainer} from '@react-navigation/native';
import {store} from './src/store';
import {Provider} from 'react-redux';

function AppRoot() {
  return (
    <Provider store={store}>
      <NavigationContainer style={{flex: 1}}>
        <App />
      </NavigationContainer>
    </Provider>
  );
}

LogBox.ignoreAllLogs();
AppRegistry.registerComponent(appName, () => AppRoot);
