import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { MdEdit, MdVisibility, MdDelete } from 'react-icons/md';

import api from '~/services/api';
import history from '~/services/history';

import PageListHeader from '~/components/PageList/PageListHeader';
import InputSearch from '~/components/Form/Inputs/InputSearch';
import LinkRegister from '~/components/Form/Buttons/LinkRegister';
import Avatar from '~/components/Avatar';
import LabelStatus from '~/components/PageList/LabelStatus';
import MenuActions from '~/components/PageList/MenuActions';
import Actions from '~/components/PageList/MenuActions/Actions';
import DeliveryModal from '~/components/Modals/DeliveryModal';

import {
  PageListContainer,
  PageListContent,
  TitleList,
  ContentList,
  LineList,
  ContentInline,
} from '~/components/PageList/styles';

export default function Delivery() {
  const [deliveries, setDeliveries] = useState([]);
  const [productFilter, setProductFilter] = useState('');
  const [deliveryModal, setDeliveryModal] = useState({
    show: false,
    delivery: null,
  });
  const gridDelivery = "1fr 3fr 4fr 3fr 2fr 2fr 1fr";
  
  async function loadDeliveries() {
    try {
      const response = await api.get('deliveries', {
        params: {
          q: productFilter,
        },
      });

      const data = response.data.map(item => {
        return {
          ...item,
          status: getStatus(item.start_date, item.end_date, item.canceled_at),
        };
      });

      setDeliveries(data);
    } catch (err) {      
      toast.error("Erro ao acessar os dados no servidor");
    }
  }

  useEffect(() => {
    loadDeliveries();
  }, [productFilter]); // eslint-disable-line

  function getStatus(start_date, end_date, canceled) {
    if (canceled) return 'CANCELADA';
    if (end_date) return 'ENTREGUE';
    if (start_date) return 'RETIRADA';
    return 'PENDENTE';
  }

  async function handleDeleteDelivery(id) {
    try {
      if (!window.confirm('Deseja excluir esta entrega?')) return;
      await api.delete(`/deliveries/${id}`);
      const newList = deliveries.filter(item => item.id !== id);
      setDeliveries(newList);
      toast.success('Entrega excluída com sucesso!');
    } catch (err) {
      toast.error('Não foi possível excluir esta entrega!');
    }
  }

  function handleSearch(e) {
    setProductFilter(e.target.value);
  }

  function handleShowModal(delivery) {
    setDeliveryModal({ show: true, delivery });
  }

  function handleRemoveModal() {
    setDeliveryModal({ show: false, delivery: null });
  }

  async function handleTakeDelivery(delivery) {
    try{
      const response = await api.put(`deliveryman/${delivery.deliveryman.id}/delivery/${delivery.id}/takeDelivery`);
      if(!response)
        toast.error("Não foi possíve registar a retirada, Verifique o horário ou a quantidade de entragas!");
      loadDeliveries();
    }catch(err){
      console.tron.log(err);
      toast.error("Não foi possíve registar a retirada, Verifique o horário ou a quantidade de entragas!");
    }
  }

  return (
    <PageListContainer>
      <PageListHeader title="Gerenciando encomendas">
        <InputSearch 
          onChange={handleSearch}
          name="search" 
          placeholder="Buscar por produtos"
        />
        <LinkRegister link="/delivery/new" />
      </PageListHeader>
      <PageListContent>
        <TitleList grid={gridDelivery}>
          <h1>ID</h1>
          <h1>Produto</h1>
          <h1>Entregador</h1>
          <h1>Cidade</h1>
          <h1>Estado</h1>
          <h1>Status</h1>
          <h1>Ações</h1>
        </TitleList>
        <ContentList>
          {deliveries.map(delivery => (
            <LineList key={delivery.id} grid={gridDelivery}>
              <p>{delivery.id}</p>
              <p>{delivery.product}</p>
              <ContentInline>
                <Avatar 
                  size={35} 
                  dataImageUrl={(delivery.deliveryman.Avatar && delivery.deliveryman.Avatar.url) || null} 
                  dataNameProfile={delivery.deliveryman.name}
                />
                <p>{delivery.deliveryman.name}</p>
              </ContentInline>
              <p>{delivery.recipient.city}</p>
              <p>{delivery.recipient.state}</p>
              <LabelStatus status={delivery.status} />
              <MenuActions>
                <Actions onClick={() => { handleShowModal(delivery) }}>
                  <MdVisibility color="#8e5be8" />
                  Visualizar
                </Actions>
                <Actions onClick={() => { history.push(`/delivery/${delivery.id}/edit`) }}>
                  <MdEdit color="#4d85ee" />
                  Editar
                </Actions>
                <Actions onClick={() => { handleDeleteDelivery(delivery.id) }}>
                  <MdDelete color="#DE3B3B" />
                  Excluir
                </Actions>
              </MenuActions>
            </LineList>
          ))}
        </ContentList>
      </PageListContent>
      <DeliveryModal
        show={deliveryModal.show}
        selectedDelivery={deliveryModal.delivery}
        onClickExit={handleRemoveModal}
        onClickTakeDelivery={handleTakeDelivery}
      />
    </PageListContainer>
  );
}
