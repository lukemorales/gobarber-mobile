import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container } from './Profile_Styles';
import Background from '~/components/Background';

export default function Profile() {
  return (
    <Background>
      <View>
        <Text>Profile Component</Text>
      </View>
    </Background>
  );
}

Profile.navigationOptions = {
  tabBarLabel: 'Profile',
  tabBarIcon: ({ tintColor }) => <Icon name="person" size={20} color={tintColor} />,
};
