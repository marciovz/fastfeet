import styled from 'styled-components';
import { darken } from 'polished';

export const Content = styled.div`
  padding: 60px 30px;
  width: 360px;
  height: 425px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 0 10px #00000033;

  img {
    display: block;
    margin: 0 auto;
    height: 44px;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 15px;

    label {
      display: block;
      margin-top: 10px;
      font-size: 14px;
      font-weight: bold;
      text-align: left;
      color: #444444;
      letter-spacing: 0;
    }

    input {
      margin: 10px 0;
      padding: 0 15px;
      width: 100%;
      height: 45px;
      color: #222;
      background: #fff;
      border: 1px solid #dddddd;
      border-radius: 4px;

      &::placeholder {
        color: #999999;
      }
    }

    span {
      display: block;
      text-align: right;
      font-size: 11px;
      color: #fb6f91;
      align-self: flex-end;
      font-weight: bold;
    }

    button {
      margin: 8px 0 0;
      height: 45px;
      font-size: 16px;
      font-weight: bold;
      color: #fff;
      background: #7d40e7;
      border: 0;
      border-radius: 4px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.05, '#7d40e7')};
      }
    }
  }
`;
