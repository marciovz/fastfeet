import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  text-align: right;

  strong {
    display: block;
    margin: 5px 0;
    font-size: 14px;
    font-weight: bold;
    color: #666666;
  }
  button {
    display: block;
    margin: 5px 0 5px auto;
    font-size: 14px;
    color: #de3b3b;
    background: transparent;
    border: 0;
    font-weight: normal;
    transition: 0.2s;

    &:hover {
      color: ${lighten(0.1, '#de3b3b')};
    }
  }
`;
