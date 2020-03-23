import React, {useMemo} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {format, parseISO} from 'date-fns';
import {StatusBar} from 'react-native';

import {signOut} from '~/store/modules/auth/actions';

import AvatarProfile from '~/components/Avatar';
import {Container, TextTitle, TextContent, LogoutButton} from './styles';

export default function Profile() {
  const dispatch = useDispatch();

  const profile = useSelector(state => state.user.profile);

  const formatedDate = useMemo(() => {
    return format(parseISO(profile.createdAt), 'dd/MM/yyyy');
  }, [profile]);

  function handleLogout() {
    dispatch(signOut());
  }

  return (
    <Container>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <AvatarProfile size={130} dataProfile={profile} />

      <TextTitle>Nome Completo</TextTitle>
      <TextContent>{profile.name}</TextContent>

      <TextTitle>Email</TextTitle>
      <TextContent>{profile.email}</TextContent>

      <TextTitle>Data de cadastro </TextTitle>
      <TextContent>{formatedDate}</TextContent>

      <LogoutButton onPress={handleLogout}>Logout</LogoutButton>
    </Container>
  );
}

Profile.navigationOptions = {
  tabBarLabel: 'Meu perfil',
  tabBarIcon: ({tintColor}) => (
    <Icon name="account-circle" size={20} color={tintColor} />
  ),
};
