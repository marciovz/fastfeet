import styled from 'styled-components';
import { Form } from '@unform/web';

export const FormContainer = styled(Form)`
  label {
    margin-top: 6px;
    font-size: 14px;
    font-weight: bold;
    color: #444444;
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
