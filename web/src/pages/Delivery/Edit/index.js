import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import history from '~/services/history';
import api from '~/services/api';

import HeaderPagesForm from '~/components/HeaderPagesdForm';
import ButtonGoBack from '~/components/Form/Buttons/GoBack';
import ButtonSave from '~/components/Form/Buttons/Save';
import DashboardForm from '~/components/Form/DashboardForm';
import FormDelivery from '~/components/Form/FormDelivery';

import { Container } from './styles';

export default function Edit() {
  const { id } = useParams();
  const [delivery, setDelivery] = useState(null);

  useEffect(() => {
    async function loadDelivery() {
      try {
        const { data } = await api.get(`/deliveries/${id}`);
        setDelivery(data);
      } catch (err) {
        toast.error('Entrega não encontrada!');
      }
    }
    loadDelivery();
  }, [id]);

  function handleGoBack() {
    history.push('/delivery');
  }

  async function handleSave({ recipient, deliveryman, product }) {
    try {
      await api.put(`/deliveries/${id}`, {
        recipient_id: recipient.value,
        deliveryman_id: deliveryman.value,
        product,
      });
      toast.success('Entrega salva com sucesso!');
      history.push('/delivery');
    } catch (err) {
      toast.error('Não foi possível salvar as alterações da entrega');
    }
  }

  return (
    <Container>
      <HeaderPagesForm title="Edição de encomendas">
        <ButtonGoBack onClick={handleGoBack} />
        <ButtonSave type="submit" form="formDelivery" />
      </HeaderPagesForm>
      <DashboardForm>
        <FormDelivery onSubmit={handleSave} dataDelivery={delivery} />
      </DashboardForm>
    </Container>
  );
}
