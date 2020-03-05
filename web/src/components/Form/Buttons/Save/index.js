import React, { memo } from 'react';

import { Container, Icon } from './styles';

function Save() {
  return (
    <Container>
      <Icon />
      Salvar
    </Container>
  );
}

export default memo(Save);
