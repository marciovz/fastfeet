import styled from 'styled-components/native';

export const Container = styled.View`
  width: ${props => `${props.size}px`};
  height: ${props => `${props.size}px`};
  border-radius: ${props => `${props.size / 2}px`};
  background: ${props => props.color};
  justify-content: center;
  align-items: center;
`;

export const Initials = styled.Text`
  font-size: ${props => `${props.size / 2.3}px`};
  font-weight: bold;
  color: ${props => props.color};
`;
