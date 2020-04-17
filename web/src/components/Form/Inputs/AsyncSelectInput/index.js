import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AsyncSelect from 'react-select/async';
import { useField } from '@unform/core';

import { Container } from './styles';

export default function AsyncSelectInput({
  name,
  label,
  loadOptions,
  ...rest
}) {
  const { fieldName, registerField, defaultValue, error } = useField(name);
  const selectRef = useRef();
  const [value, setValue] = useState();

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      path: 'state.value',
      getValue: () => value,
    });
  }, [value, fieldName, registerField]); // eslint-disable-line

  useEffect(() => {
    if (defaultValue) {
      setValue(defaultValue);
    }
  }, [defaultValue]);

  return (
    <Container className="asyncSelectContainer">
      {label && <label htmlFor={fieldName}>{label}</label>}
      <AsyncSelect
        id={fieldName}
        ref={selectRef}
        defaultValue={defaultValue}
        value={value}
        defaultOptions
        loadOptions={loadOptions}
        onChange={val => setValue(val)}
        className="asyncSelectInput"
        cacheOptions
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
