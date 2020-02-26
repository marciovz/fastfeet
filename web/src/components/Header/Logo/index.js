import React from 'react';

import logo from '~/assets/logo.svg';

import { Container } from './styles';

export default function Logo() {
  return (
    <Container to="/delivery">
      <img src={logo} alt="FastFeet" />
    </Container>
  );
}
