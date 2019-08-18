import React, { useRef } from 'react';

import logo from '~/assets/logo.png';

import Background from '~/components/Background';
import { Container, Logo, Form, FormInput, SubmitButton, LogInLink, LogInLinkText } from './SignUp_Styles';

export default function SignUp({ navigation }) {
  const emailRef = useRef();
  const passwordRef = useRef();

  function handleCreateAccount() {}

  return (
    <Background>
      <Container>
        <Logo source={logo} />

        <Form>
          <FormInput
            icon="person-outline"
            placeholder="Type Your Full Name"
            returnKeyType="next"
            onSubmitEditing={() => emailRef.current.focus()}
          />
          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Type your e-mail"
            ref={emailRef}
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
          />
          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Type your password"
            ref={passwordRef}
            returnKeyType="send"
            onSubmitEditing={handleCreateAccount}
          />
          <SubmitButton onPress={handleCreateAccount}>Create Account</SubmitButton>
        </Form>

        <LogInLink onPress={() => navigation.navigate('LogIn')}>
          <LogInLinkText>I Already Have an Account</LogInLinkText>
        </LogInLink>
      </Container>
    </Background>
  );
}
