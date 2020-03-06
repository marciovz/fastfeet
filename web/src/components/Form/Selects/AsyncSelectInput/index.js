import React, { useRef, useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';
import AsyncSelect from 'react-select/async';
import { useField } from '@unform/core';

import { Container } from './styles';

export default function AsyncSelectInput({
  name,
  label,
  loadOptions,
  ...rest
}) {
  const ref = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);
  const [value, setValue] = useState('');

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'state.value',
      parseValue: selectRef => selectRef.select.state.value,
      clearValue: selectRef => selectRef.select.clearValue(),
    });
  }, [fieldName, registerField]);

  function handleChange(e) {
    setValue(e);
  }

  return (
    <Container>
      {label && <label htmlFor={fieldName}>{label}</label>}
      <AsyncSelect
        name={fieldName}
        ref={ref}
        defaultValue
        value={value}
        loadOptions={loadOptions}
        defaultOptions
        onChange={handleChange}
        className="asyncSelectInput"
        {...rest}
      />
      {error && <span>{error}</span>}
    </Container>
  );
}

AsyncSelectInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  loadOptions: PropTypes.func.isRequired,
};
