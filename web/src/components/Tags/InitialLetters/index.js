import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import getInitialLetters from '~/util/getInitialLetters';
import raffleColorFromList from '~/util/raffleColorFromList';

import { Container } from './styles';

export default function InitialLetters({ name, children, listColor }) {
  const [initialLetters, setInitialLetters] = useState('');
  const [raffleColor, setRaffleColor] = useState('');

  useEffect(() => {
    setRaffleColor(raffleColorFromList(listColor));
    setInitialLetters(getInitialLetters(name));
  }, [name, listColor]);

  return (
    <Container backgroundColor={raffleColor}>
      <span>{initialLetters}</span>
      {children}
    </Container>
  );
}

InitialLetters.defaultProps = {
  listColor: ['#f4effc', '#fcf4ee', '#ebfbfa', '#FFEEF1', '#F4F9EF', '#FCFCEF'],
  children: null,
};

InitialLetters.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.node,
  listColor: PropTypes.arrayOf(PropTypes.string),
};
