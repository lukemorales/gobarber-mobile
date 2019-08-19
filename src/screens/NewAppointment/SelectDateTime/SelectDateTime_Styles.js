import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.SafeAreaView`
  flex: 1;
  margin-top: 28px;
`;

export const Agenda = styled.FlatList.attrs({
  contentContainerStyle: { padding: 20 },
  showsVerticalScrollIndicator: false,
  numColumns: 2,
})`
  /* margin-top: 80px; */
`;

export const Slot = styled(RectButton)`
  margin: 0 10px 20px;
  padding: 20px;
  border-radius: 4px;
  background: #fff;
  flex: 1;
  align-items: center;

  opacity: ${({ enabled }) => (enabled ? 1 : 0.6)};
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 16px;
  color: #333;
`;
