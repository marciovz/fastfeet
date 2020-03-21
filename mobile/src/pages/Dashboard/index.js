import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

// import { Container } from './styles';

export default function Dashboard() {
  return (
    <View>
      <Text>Dashboard</Text>
    </View>
  );
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Entregas',
  tabBarIcon: ({tintColor}) => (
    <Icon name="reorder" size={20} color={tintColor} />
  ),
};
