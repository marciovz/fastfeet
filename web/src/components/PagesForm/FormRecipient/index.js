import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Input from '~/components/Form/Inputs/Input';
import AsyncSelectInput from '~/components/Form/Selects/AsyncSelectInput';
import { getAllState, getStateByAcronym } from '~/util/brazilianStates';

import { FormContainer, Line } from './styles';

export default function FormRecipient({ onSubmit, dataRecipient }) {
  const [initialData, setInitialData] = useState(null);

  useEffect(() => {
    if (dataRecipient) {
      const stateReturned = getStateByAcronym(dataRecipient.state);

      setInitialData({
        name: dataRecipient.name,
        street: dataRecipient.street,
        number: dataRecipient.number,
        complement: dataRecipient.complement,
        city: dataRecipient.city,
        state: {
          value: stateReturned.acronym,
          label: stateReturned.state,
        },
        zip_code: dataRecipient.zip_code,
      });
    }
  }, [dataRecipient]);

  async function optionsState(inputFilter) {
    const result = getAllState()
      .filter(
        item => item.state.toLowerCase().indexOf(inputFilter.toLowerCase()) > -1
      )
      .map(item => ({
        value: item.acronym,
        label: item.state,
      }));
    return result;
  }

  return (
    <FormContainer
      id="formRecipient"
      onSubmit={onSubmit}
      initialData={initialData}
    >
      <Input
        name="name"
        type="text"
        label="Nome"
        placeholder="Ex: João da Silva"
      />
      <Line grid="3fr 1fr 1fr">
        <Input
          name="street"
          type="text"
          label="Rua"
          placeholder="Ex: Rua Marechal Deodoro"
        />
        <Input name="number" type="number" label="Número" placeholder="0" />
        <Input name="complement" type="text" label="Complemento" />
      </Line>

      <Line grid="1fr 1fr 1fr">
        <Input
          name="city"
          type="text"
          label="Cidade"
          placeholder="Ex: Diadema"
        />
        <AsyncSelectInput
          name="state"
          label="Estado"
          loadOptions={optionsState}
          placeholder="Ex: São Paulo"
        />
        <Input
          name="zip_code"
          type="text"
          label="CEP"
          placeholder="Ex: 09960-580"
        />
      </Line>
    </FormContainer>
  );
}

FormRecipient.defaultProps = {
  dataRecipient: null,
};

FormRecipient.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  dataRecipient: PropTypes.shape({
    name: PropTypes.string,
    street: PropTypes.string,
    number: PropTypes.number,
    complement: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
    zip_code: PropTypes.string,
  }),
};
