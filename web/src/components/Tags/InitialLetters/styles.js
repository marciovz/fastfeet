import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div.attrs(props => ({
  baseColor: props.backgroundColor ? props.backgroundColor : '#f4effc',
}))`
  display: flex;
  flex-direction: row;
  align-items: center;

  > span {
    width: 35px;
    height: 35px;
    margin-right: 5px;
    color: ${props => darken(0.2, props.baseColor)};
    background: ${props => props.baseColor};
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 16px;
    font-weight: normal;
  }
`;
