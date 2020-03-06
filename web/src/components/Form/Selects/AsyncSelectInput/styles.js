import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  .asyncSelectInput {
    margin: 10px 0;
    width: 100%;
    height: 45px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: #ffffff;

    & > div {
      height: inherit;
      border: 1px solid #dddddd;
      border-radius: 4px;
    }
    input {
      height: 0;
      font-size: 16px;
      color: #6666;
    }

    & > div:nth-child(3) {
      height: auto;
    }
  }

  span {
    margin-left: 10px;
    color: red;
    font-size: 14px;
  }
`;
