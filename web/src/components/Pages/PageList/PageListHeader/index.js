import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function PageListHeader({ title, children }) {
  return (
    <Container>
      <h1>{title}</h1>
      <div>{children}</div>
    </Container>
  );
}

PageListHeader.defaultProps = {
  title: '',
  children: null,
};

PageListHeader.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
