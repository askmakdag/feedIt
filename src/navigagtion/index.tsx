import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import Dashboard from '../views/dashboard';
import Details from '../views/details';
import Profile from '../views/profile';
import {PostModel} from '../models';

type FeedStackParamList = {
  Dashboard: undefined;
  Details: {post: PostModel};
  Profile: undefined;
};

const FeedStack = createNativeStackNavigator<FeedStackParamList>();
export type ScreenProps = NativeStackScreenProps<FeedStackParamList, 'Details'>;

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
