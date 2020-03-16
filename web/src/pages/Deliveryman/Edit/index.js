import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import history from '~/services/history';
import api from '~/services/api';

import HeaderForm from '~/components/Pages/PagesForm/HeaderForm';
import ButtonGoBack from '~/components/Form/Buttons/GoBack';
import ButtonSave from '~/components/Form/Buttons/Save';
import ContentForm from '~/components/Pages/PagesForm/ContentForm';
import FormDeliveryman from '~/components/Pages/PagesForm/FormDeliveryman';

import { ContainerPagesForm } from '~/components/Pages/PagesForm/styles';

export default function Edit() {
  const { id } = useParams();
  const [deliveryman, setDeliveryman] = useState(null);

  useEffect(() => {
    async function loadDeliveryman() {
      try {
        const { data } = await api.get(`/deliverymans/${id}`);
        setDeliveryman(data);
      } catch (err) {
        toast.error('Entregador não encontrado!');
      }
    }
    loadDeliveryman();
  }, [id]);

  function handleGoBack() {
    history.push('/deliveryman');
  }

  async function handleSave({ name, email, avatar_id }) {
    try {
      await api.put(`deliverymans/${id}`, { name, email, avatar_id });
      history.push('/deliveryman');
    } catch (err) {
      toast.error('Não foi possível editar o entregador!');
    }
  }

  return (
    <ContainerPagesForm>
      <HeaderForm title="Cadastro de entregadores">
        <ButtonGoBack onClick={handleGoBack} />
        <ButtonSave type="submit" form="formDeliveryman" />
      </HeaderForm>
      <ContentForm>
        <FormDeliveryman onSubmit={handleSave} dataDeliveryman={deliveryman} />
      </ContentForm>
    </ContainerPagesForm>
  );
}
