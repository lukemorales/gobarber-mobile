import React, { useState, useEffect } from 'react';
import { Platform, StatusBar, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container } from './SelectDateTime_Styles';
import Background from '~/components/Background';

import DateInput from '~/components/DateInput';

export default function SelectDateTime() {
  const [date, setDate] = useState(new Date());

  return (
    <Background>
      <Container>
        <DateInput date={date} onChange={setDate} />
      </Container>
    </Background>
  );
}

SelectDateTime.navigationOptions = ({ navigation }) => ({
  title: 'When Are You Coming?',
  headerStyle: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  headerLeft: () => (
    <TouchableOpacity>
      <Icon name="chevron-left" size={20} color="#fff" onPress={() => navigation.goBack()} />
    </TouchableOpacity>
  ),
});
