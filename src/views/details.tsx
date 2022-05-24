import React from 'react';
import Post from '../components/post';
import Container from '../components/styled/container';

export default function Details({
  route: {
    params: {post},
  },
}) {
  return (
    <Container>
      <Post post={post} detailed={true} />
    </Container>
  );
}
