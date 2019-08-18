import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { TouchableOpacity } from 'react-native-gesture-handler';
import {
  Container,
  Left,
  Avatar,
  Info,
  Name,
  Time,
} from './Appointment_Styles';

export default function Appointment() {
  return (
    <Container>
      <Left>
        <Avatar
          source={{
            uri: `https://ui-avatars.com/api/?background=7159c1&color=fff&name=LukeMorales`,
          }}
        />

        <Info>
          <Name>Senior Barber</Name>
          <Time>few hours ago</Time>
        </Info>
      </Left>

      <TouchableOpacity onPress={() => {}}>
        <Icon name="event-busy" size={20} color="#f64c75" />
      </TouchableOpacity>
    </Container>
  );
}
