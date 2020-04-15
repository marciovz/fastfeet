import React, { memo } from 'react';
import PropTypes from 'prop-types';

import { Container, Icon } from './styles';

function LinkRegister({ link }) {
  return (
    <Container to={link}>
      <Icon />
      Cadastrar
    </Container>
  );
}

LinkRegister.propTypes = {
  link: PropTypes.string.isRequired,
};

export default memo(LinkRegister);
