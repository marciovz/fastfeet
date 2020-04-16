import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
  width: ${props => `${props.size}px`};
  height: ${props => `${props.size}px`};
  border-radius: ${props => `${props.size / 2}px`};
  background: #ffffff;
`;

 

  /* eslização para imagem
  img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: contain;
    object-position: center;
    background-repeat: no-repeat;
  }
  */