import styled from 'styled-components/native';
import { Platform, StatusBar } from 'react-native';

import Input from '~/components/Input';
import Button from '~/components/Button';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Separator = styled.SafeAreaView`
  height: 1px;
  background: rgba(255, 255, 255, 0.2);
  margin: 20px 0 32px;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  align-self: center;
  margin-top: ${() => (Platform.OS === 'android' ? StatusBar.currentHeight + 32 : 32)};
`;

export const Form = styled.ScrollView.attrs({
  contentContainerStyle: { padding: 28 },
  showsVerticalScrollIndicator: false,
})`
  align-self: stretch;
  margin-top: 50px;
`;

export const FormInput = styled(Input)`
  margin-bottom: 12px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 4px;
`;

export const LogOutButton = styled(Button)`
  margin-top: 16px;
  background: #f64c75;
`;
