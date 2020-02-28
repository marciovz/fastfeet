import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function DashboardHeader({ title, children }) {
  return (
    <Container>
      <h1>{title}</h1>
      <div>{children}</div>
    </Container>
  );
}

DashboardHeader.defaultProps = {
  title: '',
  children: null,
};

DashboardHeader.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
