import React, {useState, useEffect, use} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import PropTypes from 'prop-types';
import {StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {signOut} from '~/store/modules/auth/actions';
import {resetCurrentDeliveryRequest} from '~/store/modules/CurrentDelivery/action';

import Avatar from '~/components/Avatar';
import ItemsListDelivery from '~/components/ItenListDelivery';

import api from '~/services/api';

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
  ListEmpty,
  TextEmpty,
} from './styles';

export default function Dashboard({navigation}) {
  const [deliveries, setDeliveries] = useState([]);
  const profile = useSelector(state => state.user.profile);
  const dispatch = useDispatch();

  const [filterActive, setFilterActive] = useState('pending');

  useEffect(() => {
    dispatch(resetCurrentDeliveryRequest());
  }, []);
  
  useEffect(() => {
    async function loadDeliveries() {
      if (profile && profile.id) {
        const {data} = await api.get(
          `/deliveryman/${profile.id}/deliveries/${filterActive}`,
        );
        setDeliveries(data);
      }
    }
    loadDeliveries();
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
        {deliveries.length > 0 ? (
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
          <ListEmpty>
            <TextEmpty>Vazio</TextEmpty>
          </ListEmpty>
        )}
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
