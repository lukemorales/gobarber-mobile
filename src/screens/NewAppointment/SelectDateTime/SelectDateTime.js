import React, { useState, useEffect } from 'react';
import { Platform, StatusBar } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Agenda, Slot, Title } from './SelectDateTime_Styles';
import Background from '~/components/Background';
import DateInput from '~/components/DateInput';

import api from '~/services/api';

export default function SelectDateTime({ navigation }) {
  const [date, setDate] = useState(new Date());
  const [agenda, setAgenda] = useState([]);

  const provider = navigation.getParam('provider');

  useEffect(() => {
    (async () => {
      const response = await api.get(`providers/${provider.id}/available`, {
        params: {
          date: date.getTime(),
        },
      });

      setAgenda(response.data);
    })();
  }, [date, provider.id]);

  function handleSelectSlot(time) {
    navigation.navigate('ConfirmAppointment', { provider, time });
  }

  return (
    <Background>
      <Container>
        <DateInput date={date} onChange={setDate} />

        <Agenda
          data={agenda}
          keyExtractor={slot => String(slot.time)}
          renderItem={({ item: slot }) => (
            <Slot onPress={() => handleSelectSlot(slot.value)} enabled={slot.available}>
              <Title>{slot.time}</Title>
            </Slot>
          )}
        />
      </Container>
    </Background>
  );
}

SelectDateTime.navigationOptions = ({ navigation }) => ({
  title: 'When Are You Coming?',
  headerStyle: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight + 8 : 0,
  },
  headerLeft: () => (
    <TouchableOpacity>
      <Icon name="chevron-left" size={20} color="#fff" onPress={() => navigation.goBack()} />
    </TouchableOpacity>
  ),
});
