import styled from 'styled-components/native';

import Button from '~/components/Button';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
`;

export const AvatarProfilexx = styled.Image`
  margin: 10px 0 25px;
  width: 130px;
  height: 130px;
  border-radius: 65px;
  align-self: center;
`;

export const TextTitle = styled.Text`
  margin-top: 15px;
  font-size: 12px;
  font-weight: normal;
  color: #666666;
`;

export const TextContent = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #444444;
`;

export const LogoutButton = styled(Button)`
  margin-top: 30px;
  background: #e74040;
`;
