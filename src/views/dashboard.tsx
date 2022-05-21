import React, {useEffect} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import FeedService from '../services/feedService';

export default function Dashboard() {
  const navigation = useNavigation();

  useEffect(() => {
    FeedService.getItems(1)
      .then(res => {
        console.log('result: ', res);
      })
      .catch(err => {
        console.log('error: ', err);
      });
  });

  return (
    <TouchableOpacity
      style={{
        flex: 1,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onPress={() => navigation?.push('Details')}>
      <Text>Hello</Text>
    </TouchableOpacity>
  );
}
