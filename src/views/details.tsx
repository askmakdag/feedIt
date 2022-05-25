import React from 'react';
import Post from '../components/post';
import Container from '../components/styled/container';
import {ScreenProps} from '../navigagtion';

export default function Details({
  route: {
    params: {post},
  },
}: ScreenProps) {
  return (
    <Container>
      <Post post={post} detailed={true} />
    </Container>
  );
}
