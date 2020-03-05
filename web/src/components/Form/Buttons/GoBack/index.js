import React, { memo } from 'react';

import { Container, Icon } from './styles';

function GoBack() {
  return (
    <Container>
      <Icon />
      Voltar
    </Container>
  );
}

export default memo(GoBack);
