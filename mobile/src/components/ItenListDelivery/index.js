import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import StatusBarDelivery from './StatusBarDelivery';
import Content from './Content';

import {Container} from './styles';

export default function ItenListDelivery({dataDelivery, navigation}) {
  const [delivery, setDelivery] = useState(null);

  useEffect(() => {
    try {
      if (dataDelivery) {
        setDelivery(dataDelivery);
      }
    } catch (err) {
      setDelivery(null);
    }
  }, [dataDelivery]);

  return (
    <Container>
      <Header productName={(delivery && delivery.product) || null} />
      <StatusBarDelivery dataDelivery={delivery} />
      <Content
        navigation={navigation}
        dataDelivery={delivery}
      />
    </Container>
  );
}

ItenListDelivery.propTypes = {
  dataDelivery: PropTypes.shape(),
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

ItenListDelivery.defaultProps = {
  dataDelivery: null,
};
