import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import history from '~/services/history';
import api from '~/services/api';

import HeaderForm from '~/components/PagesForm/HeaderForm';
import ButtonGoBack from '~/components/Form/Buttons/GoBack';
import ButtonSave from '~/components/Form/Buttons/Save';
import ContentForm from '~/components/PagesForm/ContentForm';
import FormDelivery from '~/components/PagesForm/FormDelivery';

import { ContainerPagesForm } from '~/components/PagesForm/styles';

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
    <ContainerPagesForm>
      <HeaderForm title="Edição de encomendas">
        <ButtonGoBack onClick={handleGoBack} />
        <ButtonSave type="submit" form="formDelivery" />
      </HeaderForm>
      <ContentForm>
        <FormDelivery onSubmit={handleSave} dataDelivery={delivery} />
      </ContentForm>
    </ContainerPagesForm>
  );
}
