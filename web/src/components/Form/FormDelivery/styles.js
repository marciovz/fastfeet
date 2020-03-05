import styled from 'styled-components';

export const Container = styled.div`
  label {
    margin-top: 6px;
    font-size: 14px;
    font-weight: bold;
    color: #444444;
  }

  input {
    display: block;
    width: 100%;
    height: 45px;
    margin: 10px 0;
    padding: 10px 15px;
    font-size: 16px;
    color: #6666;
    border: 1px solid #dddddd;
    border-radius: 4px;
  }
`;

export const Line = styled.div`
  display: grid;
  flex-direction: row;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 20px;
`;
