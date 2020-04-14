import styled from 'styled-components/native';
import Button from '~/components/Button';

export const Container = styled.View`
  margin-Bottom: 30px;
  background: #ffffff;
  border-radius: 4px;
  border: 1px solid #0000001a;
  /* box-shadow: 0 0 3px #0000001a; */
`;

export const Header = styled.View`
  padding: 10px 15px 0;
  flex-direction: row;
  align-items: center;
`;

export const TextHeader = styled.Text`
  margin-left: 10px;
  font-size: 14px;
  font-weight: bold;
  color: #7d40e7;
`;

export const Content = styled.View`
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