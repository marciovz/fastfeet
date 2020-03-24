import styled from 'styled-components';
import {BaseButton} from 'react-native-gesture-handler';

export const Container = styled(BaseButton)`
  height: 45px;
  background: #82bf18;
  border-radius: 4px;

  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.Text`
  font-weight: bold;
  font-size: 16px;
  color: ${props => (props.color ? props.color : '#fff')};
`;
