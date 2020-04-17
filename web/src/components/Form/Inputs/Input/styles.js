import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 15px;

  label {
    font-size: 14px;
    font-weight: bold;
    color: #444444;
  }


  > input {
    margin: 6px 0;
    display: block;
    width: 100%;
    height: 45px;
    padding: 10px 15px;
    font-size: 16px;
    color: #666666;
    border: 1px solid #dddddd;
    border-radius: 4px;

    &::placeholder {
      color: #999999;
    }
  }
`;
