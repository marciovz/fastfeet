import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import PropTypes from 'prop-types';
import {StatusBar, ActivityIndicator, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Avatar from '~/components/Avatar';
import api from '~/services/api';

import ItemsListDelivery from './ItenListDelivery';

import {signOut} from '~/store/modules/auth/actions';
import {resetCurrentDeliveryRequest} from '~/store/modules/CurrentDelivery/actions';

import {
  Container,
  HeaderDashboard,
  ContentHeader,
  TextContentHeader,
  TextProfileName,
  LogoutButton,
  IconExit,
  ContentDashboard,
  HeaderContentDashboard,
  TextTitleDashboard,
  LinkButton,
  ListDelivery,
  BlockContent,
  TextEmpty,
} from './styles';

export default function Dashboard({navigation}) {
  const [deliveries, setDeliveries] = useState([]);
  const [loading, setLoading] = useState(false);
  const profile = useSelector(state => state.user.profile);
  const dispatch = useDispatch();

  const [filterActive, setFilterActive] = useState('pending');
  
  async function loadDeliveries() {
    setLoading(true);
    if (profile && profile.id) {
      const {data} = await api.get(
        `/deliveryman/${profile.id}/deliveries/${filterActive}`,
      );
      setDeliveries(data);
      setLoading(false);
    }
  }

  useEffect(() => {
    navigation.addListener('didFocus', () => {
      try{
        loadDeliveries()
        dispatch(resetCurrentDeliveryRequest());  
      }catch(err){
        setDeliveries([]);
        setLoading(false);
        console.tron.log(err);
        Alert.alert(
          'Falha de comunicação com o servidor',
          'Não foi possível buscar as informações na base de dados',
        );  
      }
    });
  },[]);

  useEffect(() => {
    try{
      loadDeliveries();  
    }catch(err){
      setDeliveries([]);
      setLoading(false);
      console.tron.log(err);
      Alert.alert(
        'Falha de comunicação com o servidor',
        'Não foi possível buscar as informações na base de dados',
      );
    }
  }, [filterActive]);

  function handleSetFilter(filter) {
    setFilterActive(filter);
  }

  function handleSignout() {
    dispatch(signOut());
  }

  return (
    <Container>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <HeaderDashboard>
        <Avatar size={68} dataProfile={profile} />
        <ContentHeader>
          <TextContentHeader>Bem vindo de volta,</TextContentHeader>
          <TextProfileName>{profile.name}</TextProfileName>
        </ContentHeader>
        <LogoutButton onPress={handleSignout}>
          <IconExit name="exit-to-app" size={30} color="#E74040" />
        </LogoutButton>
      </HeaderDashboard>

      <ContentDashboard>
        <HeaderContentDashboard>
          <TextTitleDashboard>Entregas</TextTitleDashboard>
          <LinkButton
            isActive={filterActive === 'pending'}
            onPress={() => handleSetFilter('pending')}>
            Pendentes
          </LinkButton>
          <LinkButton
            isActive={filterActive === 'finished'}
            onPress={() => handleSetFilter('finished')}>
            Entregues
          </LinkButton>
        </HeaderContentDashboard>
        { 
          loading ? (
            <BlockContent>
              <ActivityIndicator size="large" color="#7d40e7" />
            </BlockContent>
          ) : (
            deliveries.length > 0 ? (
              <ListDelivery
                data={deliveries}
                keyExtractor={delivery => String(delivery.id)}
                renderItem={({item}) => (
                  <ItemsListDelivery
                    key={item.id}
                    dataDelivery={item}
                    navigation={navigation}
                  />
                )}
              />
            ) : (
              <BlockContent>
                <TextEmpty>Vazio</TextEmpty>
              </BlockContent>
            )
          )
        }
      </ContentDashboard>
    </Container>
  );
}

Dashboard.navigationOptions = {
  headerShown: false,
  tabBarLabel: 'Entregas',
  tabBarIcon: ({tintColor}) => (
    <Icon name="reorder" size={20} color={tintColor} />
  ),
};

Dashboard.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
