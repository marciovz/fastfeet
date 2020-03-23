import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

import {getInitialLetters, randomColor} from './utils';

import {Container, Initials} from './styles';

export default function InitialLetters({size, name, fontColor}) {
  const [initialLetter, setInitialLetter] = useState('NO');
  const [color, setColor] = useState({
    letter: '#A28FD0',
    background: '#F4EFFC',
  });
  useEffect(() => {
    setInitialLetter(getInitialLetters(name));
    if (!fontColor) {
      setColor(randomColor());
    }
  }, [name]);

  return (
    <Container size={size} color={color.background}>
      <Initials size={size} color={color.letter}>
        {initialLetter}
      </Initials>
    </Container>
  );
}

InitialLetters.defaultProps = {
  fontColor: null,
};

InitialLetters.propTypes = {
  size: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  fontColor: PropTypes.shape({
    letter: PropTypes.string,
    background: PropTypes.string,
  }),
};
