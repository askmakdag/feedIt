/**
 * @format
 */

import React, {useEffect} from 'react';
import {AppRegistry, LogBox} from 'react-native';
import {name as appName} from './app.json';
import {NavigationContainer} from '@react-navigation/native';
import {store} from './src/store';
import {Provider} from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import AppStack from './src/navigagtion';
import {navigationRef} from './src/navigagtion/RootNavigation';

function AppRoot() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef} style={{flex: 1}}>
        <AppStack />
      </NavigationContainer>
    </Provider>
  );
}

LogBox.ignoreAllLogs();
AppRegistry.registerComponent(appName, () => AppRoot);
