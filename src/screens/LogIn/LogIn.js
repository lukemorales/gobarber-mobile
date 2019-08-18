import React from 'react';

import logo from '~/assets/logo.png';

import Background from '~/components/Background';
import { Container, Logo, Form, FormInput, SubmitButton, SignUpLink, SignUpLinkText } from './LogIn_Styles';

export default function LogIn({ navigation }) {
  return (
    <Background>
      <Container>
        <Logo source={logo} />

        <Form>
          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Type your email"
          />
          <FormInput icon="lock-outline" secureTextEntry placeholder="Type your password" />
          <SubmitButton onPress={() => {}}>Log In</SubmitButton>
        </Form>

        <SignUpLink onPress={() => navigation.navigate('SignUp')}>
          <SignUpLinkText>Create Account</SignUpLinkText>
        </SignUpLink>
      </Container>
    </Background>
  );
}
