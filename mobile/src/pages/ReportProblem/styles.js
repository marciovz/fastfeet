import styled from 'styled-components';

import Button from '~/components/Button';
import TextArea from '~/components/TextArea';

export const Container = styled.View`
  flex: 1;
  background: #ffffff;
`;

export const HeaderTop = styled.View`
  width: 100%;
  height: 90px;
  background: #7D40E7;
`;

export const Form = styled.View`
  margin-top: -80px;
  padding: 0 20px;
`;

export const Textarea = styled(TextArea).attrs({
  numberOfLines: 15,
})`
  padding: 20px;
  height: 300px;
  background: #ffffff;
  border-radius: 4px;
  box-shadow: 0 0 3px #0000001a;
  elevation: 3;
`;

export const SubmitButton = styled(Button).attrs({
  fontSize: 16,
  fontWeight: 'bold',
  color: '#ffffff',
})`
  margin-top: 20px;
  background: #7D40E7;
`;
