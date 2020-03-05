import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useField } from '@unform/core';

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
    <>
      {label && (
        <label htmlFor={fieldName}>
          {label}
          <input ref={inputRef} defaultValue={defaultValue} {...rest} />
          {error && <span style={{ color: '#f00' }}>{error}</span>}
        </label>
      )}
    </>
  );
}

Input.defaultProps = {
  label: null,
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
};