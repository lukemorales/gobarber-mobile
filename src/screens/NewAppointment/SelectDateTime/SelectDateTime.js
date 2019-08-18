import React, { useState, useEffect } from 'react';
import { Platform, StatusBar, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container } from './SelectDateTime_Styles';
import Background from '~/components/Background';

export default function SelectDateTime() {
  return (
    <Background>
      <Container>
        <Text>SelectDateTime Component</Text>
      </Container>
    </Background>
  );
}

SelectDateTime.navigationOptions = ({ navigation }) => ({
  title: 'Select the Timeo of Your Appointment',
  headerStyle: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  headerLeft: () => (
    <TouchableOpacity>
      <Icon name="chevron-left" size={20} color="#fff" onPress={() => navigation.navigate('SelectProvider')} />
    </TouchableOpacity>
  ),
});
