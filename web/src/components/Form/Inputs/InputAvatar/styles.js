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

    width: 152px;
    height: 152px;
    border: 2px dashed #dddddd;
    border-radius: 50%;

    &:hover {
      cursor: pointer;
    }
 
    /* Texto modo ícone */
    p {
      font-size: 16px;
      font-weight: bold;
    }

    input {
      display: none;
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
  transition: 0.3s;

  &:hover {
    opacity: 0.5;
  }
`;
