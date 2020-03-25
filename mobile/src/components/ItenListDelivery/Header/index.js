import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {Container, TextNameDelivery} from './styles';

export default function Header({productName}) {
  return (
    <Container>
      <Icon name="local-shipping" size={22} color="#7D40E7" />
      <TextNameDelivery>{productName} </TextNameDelivery>
    </Container>
  );
}

Header.propTypes = {
  productName: PropTypes.string,
};

Header.defaultProps = {
  productName: '',
};
