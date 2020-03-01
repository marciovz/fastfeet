import React from 'react';
import PropTypes from 'prop-types';

import { Container, Button } from './styles';

export default function Actions({ children, onClick }) {
  return (
    <Container>
      <Button onClick={onClick}>{children}</Button>
    </Container>
  );
}

Actions.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  onClick: PropTypes.func.isRequired,
};
