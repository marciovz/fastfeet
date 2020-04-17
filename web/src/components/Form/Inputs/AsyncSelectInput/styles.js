import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;

  label {
    font-size: 14px;
    font-weight: bold;
    color: #444444;
  }


  div.asyncSelectInput {
    margin: 6px 0;
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
`;
