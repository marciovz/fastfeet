import styled from 'styled-components';

export const Container = styled.div`
  padding: 5px 15px;
  height: 36px;
  width: 237px;
  background: #ffffff;
  border: 1px solid #dddddd;
  border-radius: 4px;
  display: flex;
  justify-content: left;
  align-items: center;

  svg {
    height: 16px;
    width: 16px;
    margin-right: 5px;
    color: #999999;
  }

  input {
    height: 19px;
    font-size: 14px;
    color: #444444;
    border: none;
    background: transparent;

    &::placeholder {
      color: #999999;
    }
  }
`;
