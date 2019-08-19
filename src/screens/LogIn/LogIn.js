import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import logo from '~/assets/logo.png';

import { Container, Logo, Form, FormInput, SubmitButton, SignUpLink, SignUpLinkText } from './LogIn_Styles';

import { logInRequest } from '~/store/modules/auth/actions';

export default function LogIn({ navigation }) {
  const passwordRef = useRef();
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loading = useSelector(state => state.auth.loading);

  function handleSubmit() {
    dispatch(logInRequest(email, password));
  }

  return (
    <Container>
      <Logo source={logo} />

      <Form>
        <FormInput
          icon="mail-outline"
          keyboardType="email-address"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Type your email"
          returnKeyType="next"
          onSubmitEditing={() => passwordRef.current.focus()}
          value={email}
          onChangeText={setEmail}
        />
        <FormInput
          icon="lock-outline"
          secureTextEntry
          placeholder="Type your password"
          ref={passwordRef}
          returnKeyType="send"
          onSubmitEditing={handleSubmit}
          value={password}
          onChangeText={setPassword}
        />
        <SubmitButton loading={loading} onPress={handleSubmit}>
          Log In
        </SubmitButton>
      </Form>

      <SignUpLink onPress={() => navigation.navigate('SignUp')}>
        <SignUpLinkText>Create Account</SignUpLinkText>
      </SignUpLink>
    </Container>
  );
}
