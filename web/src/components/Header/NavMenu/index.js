import React from 'react';
import history from '~/services/history';

import { Container, MenuLink } from './styles';

import itens from './itensMenus';

export default function NavMenu() {
  const currentPage = history.location.pathname.split('/', 2)[1];

  return (
    <Container>
      {itens.map(item => (
        <MenuLink
          key={item.page}
          page={currentPage === `${item.page}` ? 'active' : null}
          to={`/${item.page}`}
        >
          {item.title}
        </MenuLink>
      ))}
    </Container>
  );
}
