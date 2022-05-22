import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Dashboard from '../views/dashboard';
import Details from '../views/details';

const FeedStack = createNativeStackNavigator();

export default function AppStack() {
  return (
    <FeedStack.Navigator>
      <FeedStack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          headerStyle: {
            backgroundColor: '#161616',
          },
          title: '',
        }}
      />
      <FeedStack.Screen
        name="Details"
        component={Details}
        options={{headerShown: false}}
      />
    </FeedStack.Navigator>
  );
}
