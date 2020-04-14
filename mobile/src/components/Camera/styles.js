import styled from 'styled-components/native';

import Button from '~/components/Button';

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  background: #ffffff;
`;

export const ButtonBlock = styled.View`
  flex-direction: row;
  justify-content: center;
  
`;

export const ButtonCapture = styled(Button)`
  margin: 0 auto 20px;
  width: 60px;
  height: 60px;
  background: #000000;
  border-radius: 30px;
  opacity: 0.3;

`;

export const PendingView = styled.View`
  flex: 1;
  width: 100%;
  background: #000000 ;
  justify-content: center;
  align-items: center;
`;

export const PendindText = styled.Text`
  font-size: 20px;
  color: #ffffff;
`;