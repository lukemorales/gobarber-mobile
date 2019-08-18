import styled from 'styled-components/native';

export const Container = styled.View`
  margin-bottom: 16px;
  padding: 20px;
  border-radius: 4px;
  background: #fff;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Left = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Avatar = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
`;

export const Info = styled.View`
  margin-left: 16px;
`;

export const Name = styled.Text`
  font-weight: bold;
  font-size: 16px;
  color: #333;
`;

export const Time = styled.Text`
  font-size: 12px;
  color: #999;
  margin-top: 4px;
`;
