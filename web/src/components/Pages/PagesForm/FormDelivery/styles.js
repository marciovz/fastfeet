import styled from 'styled-components';

export const Container = styled.div`
  label {
    margin-top: 6px;
    font-size: 14px;
    font-weight: bold;
    color: #444444;
  }

  /* Componente asyncInput */
  div.asyncSelectContainer {
    display: flex;
    flex-direction: column;

    div.asyncSelectInput {
      margin: 10px 0;
      height: 45px;

      & > div {
        height: inherit;

        input {
          height: inherit;
          font-size: 16px !important;
          color: #666666 !important;
        }

        /* placeholder*/
        & > div > div:nth-child(1) {
          font-size: 16px !important;
        }
      }

      & > div:nth-child(3) {
        height: auto;
      }
    }
  }

  /* Componente input */
  div.inputContainer {
    margin-top: 15px;

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
  }
`;

export const Line = styled.div`
  display: grid;
  flex-direction: row;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 20px;
`;
