import React from 'react';
import { StatusBar } from 'react-native';

import '~/config/ReactotronConfig';

import Routes from './routes';

export default function App() {
  return (
    <>
      <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
      <Routes />
    </>
  );
}
