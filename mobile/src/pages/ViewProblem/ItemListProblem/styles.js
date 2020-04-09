import styled from 'styled-components/native';

export const Container = styled.View`
  margin: 10px 0 5px;
  padding: 20px;
  min-height: 55px;
  background: #ffffff;
  border: 1px solid #0000001a;
  elevation: 3;
  border-radius: 4px;  
  
  flex-direction: row;
  justify-content: space-between;
`;

export const Description = styled.Text`
  font-size: 16px;
  font-weight: normal;
  color: #999999;
  flex-basis: 70%;
`;

export const Date = styled.Text`
  font-size: 12px;
  font-weight: normal;
  color: #C1C1C1;
  flex-basis: auto;
`;