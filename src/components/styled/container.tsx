import React from 'react';
import styled from 'styled-components/native';
const ContainerView = styled.View`
  flex: 1;
  background-color: #161616;
`;

// @ts-ignore
const Container = ({children}) => <ContainerView>{children}</ContainerView>;
export default Container;
