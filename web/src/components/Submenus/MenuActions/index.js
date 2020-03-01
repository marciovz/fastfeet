import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { MdMoreHoriz } from 'react-icons/md';

import { Container, Submenu } from './styles';

export default function MenuActions({ children }) {
  const [visible, setVisible] = useState(false);

  function handleVisible() {
    setVisible(true);
  }

  function handleInvisible() {
    setVisible(false);
  }

  return (
    <Container>
      <button
        type="button"
        onMouseEnter={handleVisible}
        onMouseLeave={handleInvisible}
      >
        <MdMoreHoriz />
      </button>
      <Submenu
        visible={visible}
        onMouseEnter={handleVisible}
        onMouseLeave={handleInvisible}
      >
        {children}
      </Submenu>
    </Container>
  );
}

MenuActions.propTypes = {
  children: PropTypes.node.isRequired,
};
