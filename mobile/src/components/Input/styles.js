import styled from 'styled-components';

export const Container = styled.View`
  padding: 0 15px;
  height: 45px;
  background: #fff;
  border: 1px solid #dddddd;
  border-radius: 4px;

  flex-direction: row;
  align-items: center;
`;

export const TxtInput = styled.TextInput.attrs({
  placeholderTextColor: '#999999',
})`
  flex: 1;
  font-size: 16px;
  margin-left: 5px;
  color: #666666;
`;
