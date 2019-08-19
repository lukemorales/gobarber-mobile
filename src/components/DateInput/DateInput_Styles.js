import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  margin: 80px 0 28px;
`;

export const DateButton = styled(RectButton)`
  padding: 0 16px;
  height: 48px;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  margin: 0 32px;
  flex-direction: row;
  align-items: center;
`;

export const DateText = styled.Text`
  font-size: 16px;
  color: #fff;
  margin-left: 16px;
`;

export const Picker = styled.View`
  background: #fff;
  padding: 16px 32px;
  margin-top: 32px;
`;
