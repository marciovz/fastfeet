import styled from 'styled-components/native';

export const Container = styled.View`
  justify-content: space-between;
  margin: 20px 10px 0;
`;

export const StatusPoint = styled.View`
  margin: 0 35px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Line = styled.View`
  flex: 1;
  margin: 0;
  padding: 0;
  height: 1px;
  background: #7d40e7;
`;

export const Point = styled.View`
  width: 9px;
  height: 9px;
  background: ${props => (props.status ? '#7d40e7' : '#ffffff')};
  border: 1px solid #7d40e7;
  border-radius: 4px;
`;

export const StatusText = styled.View`
  margin: 5px 10px;
  flex-direction: row;
  justify-content: space-between;
`;

export const TextPoint = styled.Text`
  width: 60px;
  font-size: 8px;
  font-weight: normal;
  color: #999999;
  text-align: center;
`;
