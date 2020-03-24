import React from 'react';
import {ActivityIndicator} from 'react-native';
import PropTypes from 'prop-types';

import {Container, Text} from './styles';

export default function Button({
  children,
  loading,
  color,
  fontSize,
  fontWeight,
  ...rest
}) {
  return (
    <Container {...rest}>
      {loading ? (
        <ActivityIndicator size="small" color="#ffffff" />
      ) : (
        <Text style={{color, fontSize, fontWeight}}>{children}</Text>
      )}
    </Container>
  );
}

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  loading: PropTypes.bool,
  color: PropTypes.string,
  fontSize: PropTypes.number,
  fontWeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Button.defaultProps = {
  loading: false,
  color: '#000000',
  fontSize: 12,
  fontWeight: 'normal',
};
