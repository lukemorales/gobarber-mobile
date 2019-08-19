import React, { useState, useMemo } from 'react';
import { parseISO, formatRelative } from 'date-fns';
import { enUS } from 'date-fns/locale';
import { Platform, StatusBar } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Avatar, Name, Time, SubmitButton } from './ConfirmAppointment_Styles';

import api from '~/services/api';

export default function ConfirmAppointment({ navigation }) {
  const provider = navigation.getParam('provider');
  const time = navigation.getParam('time');

  const dateFormatted = useMemo(() => formatRelative(parseISO(time), new Date(), { locale: enUS }), [time]);

  async function handleCreateAppointment() {
    await api.post(`appointments`, {
      provider_id: provider.id,
      date: time,
    });

    navigation.navigate('Dashboard');
  }

  return (
    <Container>
      <Avatar
        source={{
          uri: provider.avatar
            ? provider.avatar.url
            : `https://ui-avatars.com/api/?background=7159c1&color=fff&name=${provider.name}`,
        }}
      />

      <Name>{provider.name}</Name>
      <Time>{dateFormatted}</Time>

      <SubmitButton onPress={handleCreateAppointment}>Confirm Appointment</SubmitButton>
    </Container>
  );
}

ConfirmAppointment.navigationOptions = ({ navigation }) => ({
  title: 'This is Your Appointment',
  headerStyle: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight + 8 : 0,
  },
  headerLeft: () => (
    <TouchableOpacity>
      <Icon name="chevron-left" size={20} color="#fff" onPress={() => navigation.goBack()} />
    </TouchableOpacity>
  ),
});
