import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const Container = styled.View`
  margin: 20px 0;
  align-items: center;
`;

export const Image = styled.Image`
  width: ${props => `${props.size}px`};
  height: ${props => `${props.size}px`};
  border-radius: ${props => `${props.size / 2}px`};
  background: #ffffff;
`;

export const IconAvatar = styled(Icon)``;
