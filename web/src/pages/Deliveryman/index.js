import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { MdEdit, MdDelete } from 'react-icons/md';

import api from '~/services/api';
import history from '~/services/history';

import PageListHeader from '~/components/PageList/PageListHeader';
import InputSearch from '~/components/Form/Inputs/InputSearch';
import LinkRegister from '~/components/Form/Buttons/LinkRegister';
import Avatar from '~/components/Tags/Avatar';
import MenuActions from '~/components/Submenus/MenuActions';
import Actions from '~/components/Submenus/MenuActions/Actions';

import {
  PageListContainer,
  PageListContent,
  TitleList,
  ContentList,
  LineList,
  ContentInline,
} from '~/components/PageList/styles';

export default function Deliveryman() {
  const [deliverymans, setDeliverymans] = useState([]);
  const [deliverymanFilter, setDeliverymanFilter] = useState('');

  useEffect(() => {
    async function loadDeliverymans() {
      try {
        const response = await api.get('deliverymans', {
          params: {
            q: deliverymanFilter,
          },
        });

        setDeliverymans(response.data);
      } catch (err) {
        console.tron.log(err);
      }
    }
    loadDeliverymans();
  }, [deliverymanFilter]);

  async function handleDeleteDeliveryman(id) {
    try {
      if (!window.confirm('Deseja excluir este entregador?')) return;
      await api.delete(`/deliverymans/${id}`);
      const newList = deliverymans.filter(item => item.id !== id);
      setDeliverymans(newList);
      toast.success('Entregador excluído com sucesso!');
    } catch (err) {
      toast.error('Não foi possível excluir o entregador!');
    }
  }

  return (
    <PageListContainer>
      <PageListHeader title="Gerenciando entregadores">
        <InputSearch
          onChange={e => setDeliverymanFilter(e.target.value)}
          name="search"
        />
        <LinkRegister link="/deliveryman/new" />
      </PageListHeader>
      <PageListContent>
        <TitleList gridList="deliveryman">
          <h1>ID</h1>
          <h1>Foto</h1>
          <h1>Nome</h1>
          <h1>Email</h1>
          <h1>Ações</h1>
        </TitleList>
        <ContentList>
          {deliverymans.map(deliveryman => (
            <LineList key={deliveryman.id} gridList="deliveryman">
              <p>{deliveryman.id}</p>
              <ContentInline>
                <Avatar 
                  size={35} 
                  dataImageUrl={deliveryman.Avatar && deliveryman.Avatar.url || null}
                  dataNameProfile={deliveryman.name} 
                />
              </ContentInline>
              <p>{deliveryman.name}</p>
              <p>{deliveryman.email}</p>
              <MenuActions>
                <Actions
                  onClick={() => {
                    history.push(`/deliveryman/${deliveryman.id}/edit`);
                  }}
                >
                  <MdEdit color="#4d85ee" />
                  Editar
                </Actions>
                <Actions
                  onClick={() => {
                    handleDeleteDeliveryman(deliveryman.id);
                  }}
                >
                  <MdDelete color="#DE3B3B" />
                  Excluir
                </Actions>
              </MenuActions>
            </LineList>
          ))}
        </ContentList>
      </PageListContent>
    </PageListContainer>
  );
}
