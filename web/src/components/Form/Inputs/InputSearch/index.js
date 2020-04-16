import React, { memo } from 'react';
import { PropTypes } from 'prop-types';
import { MdSearch } from 'react-icons/md';

import { Container } from './styles';

function InputSearch(props) {
  return (
    <Container>
      <MdSearch />
      <input {...props } />
    </Container>
  );
}

InputSearch.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default memo(InputSearch);
