import React, {useState, useEffect, useMemo} from 'react';
import {format, parseISO} from 'date-fns';
import PropTypes from 'prop-types';

import {Container, Column, Title, Text, ButtonLink} from './styles';

export default function Content({dataCreatedAt, dataCity}) {
  const [dateCreated, setDateCreated] = useState('');
  const [city, setCity] = useState('');

  const dateCreatedFormated = useMemo(() => {
    try {
      return format(parseISO(dateCreated), 'dd/MM/yyyy');
    } catch (err) {
      return '';
    }
  }, [dateCreated]);

  useEffect(() => {
    if (dataCreatedAt) setDateCreated(dataCreatedAt);
    if (dataCity) setCity(dataCity);
  }, [dataCreatedAt, dataCity]);

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
        <ButtonLink>Ver detalhes</ButtonLink>
      </Column>
    </Container>
  );
}

Content.propTypes = {
  dataCity: PropTypes.string,
  dataCreatedAt: PropTypes.string,
};

Content.defaultProps = {
  dataCity: '',
  dataCreatedAt: '',
};
