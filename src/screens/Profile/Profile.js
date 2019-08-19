import React, { useRef, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Title, Separator, Form, FormInput, SubmitButton, LogOutButton } from './Profile_Styles';

import { updateProfileRequest } from '~/store/modules/user/actions';
import { logOut } from '~/store/modules/auth/actions';

export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  const oldPasswordRef = useRef();
  const newPasswordRef = useRef();
  const confirmNewPasswordRef = useRef();

  const [name, setName] = useState(profile.name);
  const [email, setEmail] = useState(profile.email);
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  useEffect(() => {
    setOldPassword('');
    setNewPassword('');
    setConfirmNewPassword('');
  }, [profile]);

  function handleUpdateProfile() {
    dispatch(
      updateProfileRequest({
        name,
        email,
        oldPassword,
        confirmNewPassword,
      })
    );
  }

  return (
    <Container>
      <Title>My Profile</Title>

      <Form>
        <FormInput
          icon="person-outline"
          placeholder="Type Your Full Name"
          returnKeyType="next"
          value={name}
          onChangeText={setName}
        />
        <FormInput
          icon="mail-outline"
          keyboardType="email-address"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Type your e-mail"
          returnKeyType="next"
          value={email}
          onChangeText={setEmail}
        />

        <Separator />

        <FormInput
          icon="lock-outline"
          secureTextEntry
          placeholder="Type your old password"
          returnKeyType="next"
          ref={oldPasswordRef}
          onSubmitEditing={() => newPasswordRef.current.focus()}
          value={oldPassword}
          onChangeText={setOldPassword}
        />
        <FormInput
          icon="lock-outline"
          secureTextEntry
          placeholder="Type your new password"
          returnKeyType="next"
          ref={newPasswordRef}
          onSubmitEditing={() => confirmNewPasswordRef.current.focus()}
          value={newPassword}
          onChangeText={setNewPassword}
        />
        <FormInput
          icon="lock-outline"
          secureTextEntry
          placeholder="Confirm your new password"
          returnKeyType="send"
          ref={confirmNewPasswordRef}
          value={confirmNewPassword}
          onChangeText={setConfirmNewPassword}
        />
        <SubmitButton onPress={handleUpdateProfile}>Update Profile</SubmitButton>
        <LogOutButton onPress={() => dispatch(logOut())}>Log Out</LogOutButton>
      </Form>
    </Container>
  );
}

Profile.navigationOptions = {
  tabBarLabel: 'Profile',
  tabBarIcon: ({ tintColor }) => <Icon name="person" size={20} color={tintColor} />,
};
