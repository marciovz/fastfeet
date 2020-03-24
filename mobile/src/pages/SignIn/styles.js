import styled from 'styled-components/native';
import {Platform} from 'react-native';

import Input from '~/components/Input';
import Button from '~/components/Button';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  bahavior: 'padding',
})`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 25px;
  background: #7d40e7;
`;

export const Form = styled.View`
  align-self: stretch;
  margin-top: 40px;
`;

export const FormInput = styled(Input)`
  margin-bottom: 10px;
`;

export const SubmitButton = styled(Button).attrs({
  fontSize: 16,
  fontWeight: 'bold',
  color: '#ffffff',
})`
  margin-top: 5px;
`;
