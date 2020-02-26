import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Container = styled.div``;

export const MenuLink = styled(Link)`
  margin: 0 10px;
  font-size: 15px;
  font-weight: bold;
  color: ${props => (props.page ? '#444444' : '#999999')};
  text-transform: uppercase;
  transition: 0.2s;

  &:hover {
    color: #444444;
  }
`;
