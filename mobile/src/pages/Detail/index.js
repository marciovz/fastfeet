import React, {useState, useEffect, useMemo} from 'react';
import {useSelector} from 'react-redux';
import {StatusBar, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

import getStatus from '~/util/getStatus';
import formatDate from '~/util/formatDate';

import {
  Container, 
  HeaderTop, 
  ContainerInformation,
  BlockInformation, 
  BlockTitleInformation, 
  TitleInformation, 
  BlockLine, 
  BlockColumn,
  Title, 
  Content,
  ButtonContainer,
  LinkButton, 
} from './styles';

export default function Detail({navigation}) {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [product, setProduct] = useState('');
  const [status, setStatus] = useState('');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [canceledDate, setCanceledDate] = useState(null);
  const delivery = useSelector(state => state.currentDelivery.delivery);

  

  useEffect(() => {
    if(delivery) {
      const address = 
        `${delivery.recipient.street}, ${delivery.recipient.number}, ${delivery.recipient.city} - ${delivery.recipient.state}, ${delivery.recipient.zip_code}`;
      setName(delivery.recipient.name);
      setAddress(address);
      setProduct(delivery.product);
      setStartDate(delivery.start_date);
      setEndDate(delivery.end_date);
      setCanceledDate(delivery.canceled_at);
    }      
  }, [delivery]);

  const startDateFormated = useMemo(() => {
    return formatDate(startDate)
  }, [startDate]);

  const endDateFormated = useMemo(() => {
    return formatDate(endDate)
  }, [endDate]);

  useMemo(() => {
    setStatus(getStatus(startDate, endDate, canceledDate));
  }, [startDate, endDate, canceledDate]);

  const isActiveBtnFinalizeDelivery= useMemo(() => {
    return status === 'Entregue' ? false : true;
  }, [status]);

  function handleReportProblem() {
    navigation.navigate('ReportProblem');
  }

  function handleViewProblem() {
    navigation.navigate('ViewProblem');
  }

  function handleFinalizeDelivery() {
    navigation.navigate('FinalizeDelivery');
  }
  
  return (
    <Container>
    <StatusBar barStyle="hight-content" backgroundColor="#7D40E7" />
    <HeaderTop/>

    <ContainerInformation>
      <BlockInformation>
        <BlockTitleInformation>
          <Icon name="local-shipping" size={22} color="#7D40E7" />
          <TitleInformation>Informações da entrega </TitleInformation>
        </BlockTitleInformation>
        
        <Title>DESTINATÁRIO</Title>
        <Content>{name}</Content>

        <Title>ENDEREÇO DA ENTREGA</Title>
        <Content>{address}</Content>
        
        <Title>PRODUTO</Title>
        <Content>{product}</Content>
      </BlockInformation>


      <BlockInformation>
       <BlockTitleInformation>
          <Icon name="event" size={22} color="#7D40E7" />
          <TitleInformation>Situação da entrega </TitleInformation>
        </BlockTitleInformation>
        
        <Title>STATUS</Title>
        <Content>{status}</Content>

        <BlockLine>
          <BlockColumn>
            <Title>DATA DE RETIRADA</Title>
            <Content>{startDateFormated}</Content>
          </BlockColumn>

          <BlockColumn>
            <Title>DATA DE ENTREGA</Title>
            <Content>{endDateFormated}</Content>            
          </BlockColumn>
        </BlockLine>

      </BlockInformation>

      <ButtonContainer>
        <LinkButton 
          onPress={handleReportProblem} 
          icon={{name: 'highlight-off', size: 24, color: '#E74040'}}
        >
          Informar Problema
        </LinkButton>
        
        <LinkButton 
          onPress={handleViewProblem} 
          icon={{name: 'info-outline', size: 24, color: '#E7BA40'}}
        >
          Visualizar Problema
        </LinkButton>

        <LinkButton 
          icon={{name: 'alarm-on', size: 24, color: '#7D40E7'}}
          active={isActiveBtnFinalizeDelivery}
          onPress={handleFinalizeDelivery} 
        >
          Finalizar Entrega
        </LinkButton>        
      </ButtonContainer>

    </ContainerInformation>
    </Container>
  );
}

Detail.propTypes = {
  navigation: PropTypes.shape().isRequired,
};

Detail.navigationOptions = ({navigation}) => ({
  title: 'Detalhes da encomenda',
  headerTitleAlign: 'center',
  headerTintColor: '#ffffff',
  headerTitleStyle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  headerStyle: {
    backgroundColor: '#7D40E7',
    elevation: 0,
    shadowOpacity: 0,
  },
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Dashboard');
      }}>
      <Icon name="chevron-left" size={24} color="#FFF" style={{marginLeft: 15}}/>
    </TouchableOpacity>
  ),
});
