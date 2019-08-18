import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Title, List } from './Dashboard_Styles';
import Background from '~/components/Background';
import Appointment from '~/components/Appointment';

import api from '~/services/api';

export default function Dashboard() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await api.get('appointments');

      setAppointments(response.data);
    })();
  }, []);

  async function handleCancel(id) {
    const response = await api.delete(`appointments/${id}`);

    setAppointments(
      appointments.map(appointment =>
        appointment.id === id
          ? {
              ...appointment,
              canceled_at: response.data.canceled_at,
            }
          : appointment
      )
    );
  }

  return (
    <Background>
      <Container>
        <Title>Scheduled Appointments</Title>

        <List
          data={appointments}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => <Appointment data={item} cancelAppointment={() => handleCancel(item.id)} />}
        />
      </Container>
    </Background>
  );
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Schedule',
  tabBarIcon: ({ tintColor }) => <Icon name="event" size={20} color={tintColor} />,
};
