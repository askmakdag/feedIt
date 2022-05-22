import React from 'react';
import Container from '../components/styled/container';
import {Text} from 'react-native';

export default function Profile({
  route: {
    params: {user},
  },
}) {
  console.log('user: ', user);
  return (
    <Container>
      <Text>user</Text>
    </Container>
  );
}
