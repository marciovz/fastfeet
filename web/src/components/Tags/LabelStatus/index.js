import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function LabelStatus({ status }) {
  const [colorLabel, setColorLabel] = useState('');
  const [colorBackground, setColorBackground] = useState('');

  useEffect(() => {
    switch (status) {
      case 'PENDENTE': {
        setColorLabel('#C1BC35');
        setColorBackground('#F0F0DF');
        break;
      }
      case 'RETIRADA': {
        setColorLabel('#4D85EE');
        setColorBackground('#BAD2FF');
        break;
      }
      case 'ENTREGUE': {
        setColorLabel('#2CA42B');
        setColorBackground('#DFF0DF');
        break;
      }
      case 'CANCELADA': {
        setColorLabel('#DE3B3B');
        setColorBackground('#FAB0B0');
        break;
      }
      default:
        setColorLabel('#444444');
        setColorBackground('#dddddd');
    }
  }, [status]);

  return (
    <Container colorLabel={colorLabel} colorBackground={colorBackground}>
      <span />
      <p>{status}</p>
    </Container>
  );
}

LabelStatus.propTypes = {
  status: PropTypes.string.isRequired,
};
