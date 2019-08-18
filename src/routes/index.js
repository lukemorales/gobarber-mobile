import { createAppContainer, createSwitchNavigator, createBottomTabNavigator } from 'react-navigation';

import transitionConfig from './transitionConfig';

import LogIn from '~/screens/LogIn';
import SignUp from '~/screens/SignUp';
import Dashboard from '~/screens/Dashboard';
import Profile from '~/screens/Profile';

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
            Profile,
          },
          {
            mode: 'modal',
            transitionConfig,
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
