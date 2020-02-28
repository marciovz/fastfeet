import styled from 'styled-components';

export const Container = styled.div.attrs({})`
  width: fit-content;
  height: 25px;
  padding: 0 10px;
  background: ${props => props.colorBackground};
  border-radius: 12px;

  display: flex;
  justify-content: left;
  align-items: center;

  > span {
    margin-right: 5px;
    width: 10px;
    height: 10px;
    background: ${props => props.colorLabel};
    border-radius: 50%;
  }

  > p {
    font-size: 14px;
    font-weight: bold;
    color: ${props => props.colorLabel};
  }
`;
