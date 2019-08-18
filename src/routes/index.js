import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import LogIn from '~/screens/LogIn';
import SignUp from '~/screens/SignUp';

export default createAppContainer(
  createSwitchNavigator({
    LogIn,
    SignUp,
  })
);
