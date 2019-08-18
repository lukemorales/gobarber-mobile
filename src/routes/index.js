import { createAppContainer, createSwitchNavigator, createBottomTabNavigator } from 'react-navigation';

import LogIn from '~/screens/LogIn';
import SignUp from '~/screens/SignUp';
import Dashboard from '~/screens/Dashboard';

export default (isSigned = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Auth: createSwitchNavigator({
          LogIn,
          SignUp,
        }),
        App: createBottomTabNavigator({
          Dashboard,
        }),
      },
      {
        initialRouteName: isSigned ? 'App' : 'Auth',
      }
    )
  );
