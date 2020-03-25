import styled from 'styled-components/native';
import Button from '~/components/Button';

export const Container = styled.View`
  padding: 20px 15px;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  background: #f8f9fd;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
`;

export const Column = styled.View``;

export const Title = styled.Text`
  font-size: 8px;
  font-weight: bold;
  color: #999999;
`;

export const Text = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: #444444;
`;

export const ButtonLink = styled(Button).attrs({
  color: '#7D40E7',
  fontSize: 12,
  fontWeight: 'bold',
})`
  padding: 5px 5px 0;
  height: auto;
  background: transparent;
  border: none;
`;
