import React from 'react';

import logo from '~/assets/logo.png';

import Background from '~/components/Background';
import { Container, Logo, Form, FormInput, SubmitButton, LogInLink, LogInLinkText } from './SignUp_Styles';

export default function SignUp({ navigation }) {
  return (
    <Background>
      <Container>
        <Logo source={logo} />

        <Form>
          <FormInput icon="person-outline" placeholder="Type Your Full Name" />
          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Type Your E-mail"
          />
          <FormInput icon="lock-outline" secureTextEntry placeholder="Type Your Password" />
          <SubmitButton onPress={() => {}}>Create Account</SubmitButton>
        </Form>

        <LogInLink onPress={() => navigation.navigate('LogIn')}>
          <LogInLinkText>I Already Have an Account</LogInLinkText>
        </LogInLink>
      </Container>
    </Background>
  );
}
