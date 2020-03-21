import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

// import { Container } from './styles';

export default function Profile() {
  return (
    <View>
      <Text>Profile</Text>
    </View>
  );
}

Profile.navigationOptions = {
  tabBarLabel: 'Meu perfil',
  tabBarIcon: ({tintColor}) => (
    <Icon name="account-circle" size={20} color={tintColor} />
  ),
};
