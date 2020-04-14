import React, {useState, useEffect, useMemo} from 'react';
import {useDispatch} from 'react-redux';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

import formatDate from '~/util/formatDate';
import {saveCurrentDeliveryRequest} from '~/store/modules/CurrentDelivery/actions';

import StatusBarDelivery from './StatusBarDelivery';

import {Container, Header, TextHeader, Content, Column, Title, Text, ButtonLink } from './styles';

export default function ItenListDelivery({dataDelivery, navigation}) {
  const dispatch = useDispatch();
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


  const dateCreatedFormated = useMemo(() => {
    return formatDate(delivery && delivery.createdAt || '');
  }, [delivery]);

  function handleLinkDetail() {
    dispatch(saveCurrentDeliveryRequest(delivery));
    navigation.navigate('Detail');
  }

  return (
    <Container>
      <Header>
        <Icon name="local-shipping" size={22} color="#7D40E7" />
        <TextHeader>{(delivery && delivery.product) || ''}</TextHeader>  
      </Header>  

      <StatusBarDelivery dataDelivery={delivery} />
      
      <Content>
        <Column>
          <Title>Data</Title>
          <Text>{dateCreatedFormated}</Text>
        </Column>
        <Column>
          <Title>Cidade</Title>
          <Text>{(delivery && delivery.recipient.city) || ''}</Text>
        </Column>
        <Column>
          <ButtonLink onPress={handleLinkDetail}>Ver detalhes</ButtonLink>
        </Column>
      </Content>

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
