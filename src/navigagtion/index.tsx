import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Dashboard from '../views/dashboard';
import Details from '../views/details';
import Profile from '../views/profile';

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
        name="Post Details"
        component={Details}
        options={{
          headerStyle: {
            backgroundColor: '#161616',
          },
          headerTitleAlign: 'center',
          headerTintColor: '#fff',
        }}
      />
      <FeedStack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerStyle: {
            backgroundColor: '#161616',
          },
          headerTitleAlign: 'center',
          headerTintColor: '#fff',
        }}
      />
    </FeedStack.Navigator>
  );
}
