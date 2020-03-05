import React from 'react';

import HeaderPagesForm from '~/components/HeaderPagesdForm';
import ButtonSave from '~/components/Form/Buttons/Save';
import ButtonGoBack from '~/components/Form/Buttons/GoBack';
import DashboardForm from '~/components/Form/DashboardForm';
import FormDelivery from '~/components/Form/FormDelivery';

import { Container } from './styles';

export default function New() {
  return (
    <Container>
      <HeaderPagesForm title="Cadastro de encomendas">
        <ButtonGoBack />
        <ButtonSave />
      </HeaderPagesForm>
      <DashboardForm>
        <FormDelivery />
      </DashboardForm>
    </Container>
  );
}
