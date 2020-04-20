import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: 20px;

  display: ${props => (props.showModal ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;

  > div {
    position: relative;
    width: 450px;
    min-height: 350px;
    padding: 20px;
    background: #ffffff;
    border-radius: 4px;
    box-shadow: 0 0 10px #00000033;

    > div {
      padding-bottom: 10px;
      margin-bottom: 10px;
      border-bottom: 1px solid #eeeeee;
    }

    h1,
    h2 {
      font-size: 14px;
      font-weight: bold;
      color: #444444;
    }

    h3 {
      margin-top: 5px;
      font-size: 16px;
      font-weight: bold;
      color: #666666;

      > span {
        font-weight: normal;
      }
    }

    p {
      margin-top: 5px;
      font-size: 16px;
      font-weight: normal;
      color: #666666;
    }
    img {
      display: block;
      margin: 5px auto;
      max-height: 100px;
    }
  }
`;

export const ButtonClose = styled.button`
position: absolute;
top: 10px;
right: 10px;
padding: 5px 10px;

font-size: 18px;
font-weight: bold;
text-transform: uppercase;
color: #000000;
background: #ffffff;
border: none;
border-radius: 4px;
transition: 0.2s;

&:hover {
  background: ${darken(0.1, '#ffffff')};
}

`;
export const ButtonTakeDelivery = styled.button`
  margin: 10px 0;
  padding: 5px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  color: #2CA42B;
  background: #cccccc;
  border: none;
  border-radius: 4px;
  transition: 0.2s;
  
  &:hover {
    background: ${darken(0.1, '#cccccc')};
  }
`;