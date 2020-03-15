import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  label {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 150px;
    height: 150px;
    border: 1px dashed #dddddd;
    border-radius: 50%;

    &:hover {
      cursor: pointer;
    }

    svg {
      width: 40px;
      height: 40px;
    }
    img {
      width: 100px;
      height: 100px;
    }

    input {
      display: none;
    }

    p {
      font-size: 16px;
      font-weight: bold;
    }
  }
`;

export const Filtro = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #ffffff;
  opacity: 0.8;
  border-radius: 50%;
`;
