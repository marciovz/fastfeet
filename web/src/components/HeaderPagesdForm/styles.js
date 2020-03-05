import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  direction: row;
  justify-content: space-between;
  align-items: center;

  > h1 {
    font-size: 24px;
    font-weight: bold;
    color: #444444;
  }

  > div {
    display: flex;
    direction: row;

    > button {
      margin-left: 16px;
    }
  }
`;
