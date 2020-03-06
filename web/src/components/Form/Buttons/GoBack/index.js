import React, { memo } from 'react';

import { Container, Icon } from './styles';

function GoBack(props) {
  return (
    <Container {...props}>
      <Icon />
      Voltar
    </Container>
  );
}

export default memo(GoBack);
