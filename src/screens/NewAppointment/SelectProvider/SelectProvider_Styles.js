import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const ProvidersList = styled.FlatList.attrs({
  contentContainerStyle: { padding: 20 },
  showsVerticalScrollIndicator: false,
  numColumns: 2,
})`
  margin-top: 80px;
`;

export const Provider = styled(RectButton)`
  margin: 0 10px 20px;
  padding: 20px;
  border-radius: 4px;
  background: #fff;
  flex: 1;
  align-items: center;
`;

export const Avatar = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
`;

export const Name = styled.Text`
  margin-top: 16px;
  font-weight: bold;
  font-size: 16px;
  color: #333;
  text-align: center;
`;
