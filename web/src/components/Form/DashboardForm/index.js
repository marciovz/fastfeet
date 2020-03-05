import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function DashboardForm({ children }) {
  return <Container>{children}</Container>;
}

DashboardForm.propTypes = {
  children: PropTypes.node.isRequired,
};
