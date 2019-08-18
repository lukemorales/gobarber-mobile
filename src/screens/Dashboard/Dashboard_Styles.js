import styled from 'styled-components/native';
import { Platform, StatusBar } from 'react-native';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  align-self: center;
  margin-top: ${() => (Platform.OS === 'android' ? StatusBar.currentHeight + 32 : 32)};
`;

export const List = styled.FlatList.attrs({
  contentContainerStyle: { padding: 30 },
  showsVerticalScrollIndicator: false,
})``;
