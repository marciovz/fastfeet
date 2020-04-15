import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function HeaderPagesForm({ title, children }) {
  return (
    <Container>
      <h1>{title}</h1>
      <div>{children}</div>
    </Container>
  );
}

HeaderPagesForm.defaultProps = {
  title: '',
  children: null,
};

HeaderPagesForm.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
