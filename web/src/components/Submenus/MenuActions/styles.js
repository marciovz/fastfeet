import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: grid;
  justify-content: right;
  align-items: center;

  > button {
    width: 50px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
    border: none;

    svg {
      font-size: 16px;
      color: #c6c6c6;
    }
  }
`;

export const Submenu = styled.div`
  position: absolute;
  top: 30px;
  right: -50px;
  padding: 10px;
  width: 150px;
  display: ${props => (props.visible ? 'flex' : 'none')};
  flex-direction: column;
  background: #ffffff;
  border: 1px solid #eeeeee;
  border-radius: 5px;
  z-index: 10;

  &::before {
    content: '';
    position: absolute;
    left: calc(50% - 10px);
    top: -10px;
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid #eeeeee;
  }
`;
