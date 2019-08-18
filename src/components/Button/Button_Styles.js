import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  height: 48px;
  background: #3c9eff;
  border-radius: 4px;

  align-items: center;
  justify-items: center;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;
