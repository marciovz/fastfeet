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

    /* estilização adicional componente initialLetters */
    & .initialLetterContainer span {
      width: 150px;
      height: 150px;
      margin: 0;
      font-size: 52px;
      font-weight: bold;
    }
    /* eslização para icone */
    svg {
      width: 40px;
      height: 40px;
    }
    /* eslização para imagem */
    img {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      object-fit: contain;
      object-position: center;
      background-repeat: no-repeat;
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
  transition: 0.3s;

  &:hover {
    opacity: 0.5;
  }
`;
