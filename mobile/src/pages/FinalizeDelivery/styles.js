import styled from 'styled-components/native';

import Button from '~/components/Button';

export const Container = styled.View`
  flex: 1;
  background: #ffffff;
`;

export const HeaderTop = styled.View`
  width: 100%;
  height: 90px;
  background: #7D40E7;
`;

export const ContentBlock = styled.View`
  margin-top: -80px;
  padding: 0 20px;
`;

export const BlockImg = styled.View`
  width: 100%;
  height: 440px;
  background: #ffffff;
  border: 1px solid rgba(0,0,0,0.1);
  border-radius: 4px;
  elevation: 6;

  justify-content: flex-end;
`;

export const Image = styled.Image`
  width: 100%;
  height: 100%
  border-radius: 4px;

`;

export const SubmitButton = styled(Button).attrs({
  fontSize: 16,
  fontWeight: 'bold',
  color: '#ffffff',
})`
margin-top: 10px;
background: #7D40E7;
`;