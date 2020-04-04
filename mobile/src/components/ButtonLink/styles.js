import styled from 'styled-components';
import {BaseButton} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const Container = styled(BaseButton)`
  justify-content: center;
  align-items: center;
`;

export const LinkIcon = styled(Icon)``;

export const LinkText = styled.Text`
  width: ${props => props.width ? props.width : '100%'};
  font-size: ${props => props.fontSize ? props.fontSize : '16px'};
  font-weight: ${props => props.fontWeight ? props.fontWeight : 'bold'};
  color: ${props => props.color ? props.color : '#000000'};  
  text-align: center;
`;