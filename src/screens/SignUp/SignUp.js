import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import logo from '~/assets/logo.png';

import Background from '~/components/Background';
import { Container, Logo, Form, FormInput, SubmitButton, LogInLink, LogInLinkText } from './SignUp_Styles';

import { signUpRequest } from '~/store/modules/auth/actions';

export default function SignUp({ navigation }) {
  const dispatch = useDispatch();

  const emailRef = useRef();
  const passwordRef = useRef();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loading = useSelector(state => state.auth.loading);

  function handleCreateAccount() {
    dispatch(signUpRequest(name, email, password));
    navigation.navigate('LogIn');
  }

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
            value={name}
            onChangeText={setName}
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
            value={email}
            onChangeText={setEmail}
          />
          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Type your password"
            ref={passwordRef}
            returnKeyType="send"
            onSubmitEditing={handleCreateAccount}
            value={password}
            onChangeText={setPassword}
          />
          <SubmitButton loading={loading} onPress={handleCreateAccount}>
            Create Account
          </SubmitButton>
        </Form>

        <LogInLink onPress={() => navigation.navigate('LogIn')}>
          <LogInLinkText>I Already Have an Account</LogInLinkText>
        </LogInLink>
      </Container>
    </Background>
  );
}
