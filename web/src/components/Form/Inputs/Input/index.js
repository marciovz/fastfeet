import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useField } from '@unform/core';

import {Container} from './styles';

export default function Input({ name, label, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container className="inputContainer">
      {label && <label htmlFor={fieldName}>{label}</label>}
      <input ref={inputRef} defaultValue={defaultValue} {...rest} />
      {error && <span style={{ color: '#f00' }}>{error}</span>}
    </Container>
  );
}

Input.defaultProps = {
  label: null,
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
};
