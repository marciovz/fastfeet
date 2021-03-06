import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: 20;

  display: ${props => (props.showModal ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;

  > div {
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

    p {
      margin-top: 10px;
      font-size: 16px;
      font-weight: normal;
      color: #666666;
    }
  }
`;
