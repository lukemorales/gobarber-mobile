import { Platform } from 'react-native';
import styled from 'styled-components/native';
import Input from '~/components/Input';
import Button from '~/components/Button';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
`;

export const Logo = styled.Image``;

export const Form = styled.View`
  align-self: stretch;
  margin-top: 50px;
`;

export const FormInput = styled(Input)`
  margin-bottom: 12px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 4px;
`;

export const SignUpLink = styled.TouchableOpacity`
  margin-top: 40px;
`;

export const SignUpLinkText = styled.Text`
  color: rgba(255, 255, 255, 0.8);
  font-weight: bold;
  font-size: 16px;
`;
