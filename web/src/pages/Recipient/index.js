import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { MdEdit, MdDelete } from 'react-icons/md';

import api from '~/services/api';
import history from '~/services/history';

import PageListHeader from '~/components/PageList/PageListHeader';
import InputSearch from '~/components/Form/Inputs/InputSearch';
import LinkRegister from '~/components/Form/Buttons/LinkRegister';
import MenuActions from '~/components/PageList/MenuActions';
import Actions from '~/components/PageList/MenuActions/Actions';

import {
  PageListContainer,
  PageListContent,
  TitleList,
  ContentList,
  LineList,
} from '~/components/PageList/styles';

export default function Recipient() {
  const [recipients, setRecipients] = useState([]);
  const [nameFilter, setNameFilter] = useState('');
  const gridRecipient = "1fr 2fr 3fr 1fr";

  useEffect(() => {
    async function loadRecipients() {
      try {
        const response = await api.get('recipients', {
          params: {
            q: nameFilter,
          },
        });

        setRecipients(response.data);
      } catch (err) {
        toast.error("Não foi possível acessar os dados no servidor");
      }
    }
    loadRecipients();
  }, [nameFilter]);

  async function handleDeleteRecipient(id) {
    try {
      if (!window.confirm('Deseja excluir este destinatário?')) return;
      await api.delete(`/recipients/${id}`);
      const newList = recipients.filter(item => item.id !== id);
      setRecipients(newList);
      toast.success('Destinatário excluído com sucesso!');
    } catch (err) {
      toast.error('Não foi possível excluir este destinatário!');
    }
  }

  function handleSearch(e) {
    setNameFilter(e.target.value);
  }

  return (
    <PageListContainer>
      <PageListHeader title="Gerenciando destinatários">
        <InputSearch 
          onChange={handleSearch} 
          name="search"
          placeholder="Buscar por destinatários"
        />
        <LinkRegister link="/recipient/new" />
      </PageListHeader>
      <PageListContent>
        <TitleList grid={gridRecipient}>
          <h1>ID</h1>
          <h1>Nome</h1>
          <h1>Endereço</h1>
          <h1>Ações</h1>
        </TitleList>
        <ContentList>
          {recipients.map(recipient => (
            <LineList key={recipient.id} grid={gridRecipient}>
              <p>{recipient.id}</p>
              <p>{recipient.name}</p>
              <p>{`${recipient.street}, ${recipient.number}, ${recipient.city} - ${recipient.state}`}</p>
              <MenuActions>
                <Actions onClick={() => { history.push(`/recipient/${recipient.id}/edit`) }}>
                  <MdEdit color="#4d85ee" />
                  Editar
                </Actions>
                <Actions onClick={() => { handleDeleteRecipient(recipient.id) }}>
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
