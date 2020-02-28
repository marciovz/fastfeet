import React from 'react';
import PropTypes from 'prop-types';

import { Container, Icon } from './styles';

export default function LinkNewRegister({ link }) {
  return (
    <Container to={link}>
      <Icon />
      Cadastrar
    </Container>
  );
}

LinkNewRegister.propTypes = {
  link: PropTypes.string.isRequired,
};
