import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 0 16px;
  height: 48px;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  flex-direction: row;
  align-items: center;
`;

export const TxtInput = styled.TextInput.attrs({
  placeholderTextColor: 'rgba(255,255,255,0.7)',
})`
  flex: 1;
  font-size: 16px;
  margin-left: 12px;
  color: #fff;
`;
