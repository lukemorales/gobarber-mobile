import React from 'react';
// import { Container } from './LogIn_Styles';

import Background from '~/components/Background';
import { TxtInput } from '~/components/Input/Input_Styles';

export default function LogIn() {
  return (
    <Background>
      <TxtInput icon="call" placeholder="Type your username" />
    </Background>
  );
}
