import React, { memo } from 'react';

import { Container, Icon } from './styles';

function Save(props) {
  return (
    <Container {...props}>
      <Icon />
      Salvar
    </Container>
  );
}

export default memo(Save);
