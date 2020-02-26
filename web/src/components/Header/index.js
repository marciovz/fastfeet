import React from 'react';

import Logo from './Logo';
import NavMenu from './NavMenu';
import Profile from './Profile';

import { Container, Content } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <Logo />
          <NavMenu />
        </nav>
        <aside>
          <Profile />
        </aside>
      </Content>
    </Container>
  );
}
