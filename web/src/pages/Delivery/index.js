import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { MdEdit, MdVisibility, MdDelete } from 'react-icons/md';

import api from '~/services/api';
import history from '~/services/history';

import PageListHeader from '~/components/PageList/PageListHeader';
import InputSearch from '~/components/Form/Inputs/InputSearch';
import LinkRegister from '~/components/Form/Buttons/LinkRegister';
import Avatar from '~/components/Tags/Avatar';
import LabelStatus from '~/components/Tags/LabelStatus';
import MenuActions from '~/components/Submenus/MenuActions';
import Actions from '~/components/Submenus/MenuActions/Actions';
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

  useEffect(() => {
    async function loadDeliveries() {
      try {
        const response = await api.get('deliveries', {
          params: {
            q: productFilter,
          },
        });

        const data = response.data.map(item => {
          function getStatus(start_date, end_date, canceled) {
            if (canceled) return 'CANCELADA';
            if (end_date) return 'ENTREGUE';
            if (start_date) return 'RETIRADA';
            return 'PENDENTE';
          }

          return {
            ...item,
            status: getStatus(item.start_date, item.end_date, item.canceled),
          };
        });

        setDeliveries(data);
      } catch (err) {
        console.tron.log(err);
      }
    }
    loadDeliveries();
  }, [productFilter]);

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

  return (
    <PageListContainer>
      <PageListHeader title="Gerenciando encomendas">
        <InputSearch onChange={handleSearch} name="search" />
        <LinkRegister link="/delivery/new" />
      </PageListHeader>
      <PageListContent>
        <TitleList gridList="delivery">
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
            <LineList key={delivery.id} gridList="delivery">
              <p>{delivery.id}</p>
              <p>{delivery.product}</p>
              <ContentInline>
                <Avatar 
                  size={35} 
                  dataImageUrl={delivery.deliveryman.Avatar && delivery.deliveryman.Avatar.url || null} 
                  dataNameProfile={delivery.deliveryman.name}
                />
                <p>{delivery.deliveryman.name}</p>
              </ContentInline>
              <p>{delivery.recipient.city}</p>
              <p>{delivery.recipient.state}</p>
              <LabelStatus status={delivery.status} />
              <MenuActions>
                <Actions
                  onClick={() => {
                    handleShowModal(delivery);
                  }}
                >
                  <MdVisibility color="#8e5be8" />
                  Visualizar
                </Actions>
                <Actions
                  onClick={() => {
                    history.push(`/delivery/${delivery.id}/edit`);
                  }}
                >
                  <MdEdit color="#4d85ee" />
                  Editar
                </Actions>
                <Actions
                  onClick={() => {
                    handleDeleteDelivery(delivery.id);
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
      <DeliveryModal
        show={deliveryModal.show}
        selectedDelivery={deliveryModal.delivery}
        onClick={handleRemoveModal}
      />
    </PageListContainer>
  );
}
