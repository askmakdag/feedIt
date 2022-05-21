import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Dashboard from '../views/dashboard';
import Details from '../views/details';

const FeedStack = createNativeStackNavigator();

export default function AppStack() {
  return (
    <FeedStack.Navigator>
      <FeedStack.Screen name="Dashboard" component={Dashboard} />
      <FeedStack.Screen name="Details" component={Details} />
    </FeedStack.Navigator>
  );
}
