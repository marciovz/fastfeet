import React, {useState, useEffect, useMemo} from 'react';
import {format, parseISO} from 'date-fns';
import PropTypes from 'prop-types';

import {Container, Column, Title, Text, ButtonLink} from './styles';

export default function Content({
  dataDelivery,
  navigation,
}) {
  const [delivery, setDelivery] = useState({});
  const [dateCreated, setDateCreated] = useState('');
  const [city, setCity] = useState('');

  useEffect(() => {
    if (dataDelivery) {
      setDelivery(dataDelivery);
      setDateCreated(dataDelivery.createdAt);
      setCity(dataDelivery.recipient.city);
    }
  }, [dataDelivery]);

  const dateCreatedFormated = useMemo(() => {
    try {
      return format(parseISO(dateCreated), 'dd/MM/yyyy');
    } catch (err) {
      return '';
    }
  }, [dateCreated]);


  function handleLinkDetail() {
    navigation.navigate('Detail', {
      delivery,
    });
  }

  return (
    <Container>
      <Column>
        <Title>Data</Title>
        <Text>{dateCreatedFormated}</Text>
      </Column>
      <Column>
        <Title>Cidade</Title>
        <Text>{city}</Text>
      </Column>
      <Column>
        <ButtonLink onPress={handleLinkDetail}>Ver detalhes</ButtonLink>
      </Column>
    </Container>
  );
}

Content.propTypes = {
  dataCity: PropTypes.string,
  dataCreatedAt: PropTypes.string,
  dataDeliveryId: PropTypes.number,
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

Content.defaultProps = {
  dataCity: '',
  dataCreatedAt: '',
  dataDeliveryId: null,
};
