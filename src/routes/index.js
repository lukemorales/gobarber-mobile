import React from 'react';
import {
  createAppContainer,
  createSwitchNavigator,
  createBottomTabNavigator,
  createStackNavigator,
  Platform,
  StatusBar,
} from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

import transitionConfig from './transitionConfig';

import LogIn from '~/screens/LogIn';
import SignUp from '~/screens/SignUp';
import Dashboard from '~/screens/Dashboard';
import Profile from '~/screens/Profile';

import SelectProvider from '~/screens/NewAppointment/SelectProvider';
import SelectDateTime from '~/screens/NewAppointment/SelectDateTime';
import ConfirmAppointment from '~/screens/NewAppointment/ConfirmAppointment';

export default (isSigned = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Auth: createSwitchNavigator({
          LogIn,
          SignUp,
        }),
        App: createBottomTabNavigator(
          {
            Dashboard,
            NewAppointment: {
              screen: createStackNavigator(
                {
                  SelectProvider,
                  SelectDateTime,
                  ConfirmAppointment,
                },
                {
                  mode: 'modal',
                  transitionConfig,
                  transparentCard: true,
                  headerLayoutPreset: 'center',
                  defaultNavigationOptions: {
                    headerTransparent: true,
                    headerTintColor: '#fff',
                    headerLeftContainerStyle: { marginLeft: 20 },
                  },
                  navigationOptions: {
                    tabBarVisible: false,
                    tabBarLabel: 'New Appointment',
                    tabBarIcon: <Icon name="add-circle-outline" size={20} color="rgba(255,255,255,0.6)" />,
                  },
                }
              ),
            },
            Profile,
          },
          {
            tabBarOptions: {
              keyboardHidesTabBar: true,
              activeTintColor: '#fff',
              inactiveTintColor: 'rgba(255,255,255,0.6)',
              style: {
                backgroundColor: '#8d41a8',
                height: 68,
                paddingTop: 8,
                paddingBottom: 12,
                elevation: 12,
              },
            },
          }
        ),
      },
      {
        initialRouteName: isSigned ? 'App' : 'Auth',
      }
    )
  );
