import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/MaterialIcons';

import SignIn from '~/pages/SignIn';
import Dashboard from '~/pages/Dashboard';
import Profile from '~/pages/Profile';
import Detail from '~/pages/Detail';
import ReportProblem from '~/pages/ReportProblem';
import ViewProblem from '~/pages/ViewProblem';
import FinalizeDelivery from '~/pages/FinalizeDelivery';


export default (signedIn = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator({
          SignIn,
        }),
        App: createBottomTabNavigator(
          {
            Delivery: {
              screen: createStackNavigator({
                Dashboard,
                Detail,
                ReportProblem,
                ViewProblem,
                FinalizeDelivery,
              }),
              navigationOptions: {
                tabBarLabel: 'Entregas',
                tabBarIcon: ({tintColor}) => (
                  <Icon name="reorder" size={20} color={tintColor} />
                ),
              }
            },
            
            Profile,
          },
          {
            tabBarOptions: {
              keyboardHidesTabBar: true, 
              activeTintColor: '#7d40e7',
              inactiveTintColor: '#999999',
              style: {height: 60, padding: 10},

            },
          },
        ),
      },
      {
        initialRouteName: signedIn ? 'App' : 'Sign',
      },
    ),
  );
