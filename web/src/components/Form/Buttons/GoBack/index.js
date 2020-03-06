import React, { memo } from 'react';
import PropTypes from 'prop-types';

import { Container, Icon } from './styles';

function GoBack({ page }) {
  return (
    <Container to={`/${page}`}>
      <Icon />
      Voltar
    </Container>
  );
}

export default memo(GoBack);

GoBack.propTypes = {
  page: PropTypes.string.isRequired,
};
