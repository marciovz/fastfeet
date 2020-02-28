import React, { useState, useEffect } from 'react';
import api from '~/services/api';

import DashboardHeader from '~/components/DashboardHeader';
import InputSearch from '~/components/Form/Inputs/InputSearch';
import LinkNewRegister from '~/components/Form/Buttons/LinkNewRegister';
import InitialLetters from '~/components/Tags/InitialLetters';
import LabelStatus from '~/components/Tags/LabelStatus';

import {
  Container,
  DashboardContent,
  TitleLine,
  ContentLine,
  Line,
} from './styles';

export default function Delivery() {
  const [deliveries, setDeliveries] = useState([]);

  useEffect(() => {
    async function loadDeliveries() {
      try {
        const response = await api.get('deliveries');

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
  }, []);

  return (
    <Container>
      <DashboardHeader title="Gerenciando encomendas">
        <InputSearch name="search" />
        <LinkNewRegister link="/delivery/new" />
      </DashboardHeader>
      <DashboardContent>
        <TitleLine>
          <h1>ID</h1>
          <h1>Destinatário</h1>
          <h1>Entregador</h1>
          <h1>Cidade</h1>
          <h1>Estado</h1>
          <h1>Status</h1>
          <h1>Ações</h1>
        </TitleLine>
        <ContentLine>
          {deliveries.map(delivery => (
            <Line key={delivery.id}>
              <p>{delivery.id}</p>
              <p>{delivery.Recipient.name}</p>
              <InitialLetters name={delivery.Deliveryman.name}>
                <p>{delivery.Deliveryman.name}</p>
              </InitialLetters>
              <p>{delivery.Recipient.city}</p>
              <p>{delivery.Recipient.state}</p>
              <LabelStatus status={delivery.status} />
              <p>{delivery.Recipient.actions}</p>
            </Line>
          ))}
        </ContentLine>
      </DashboardContent>
    </Container>
  );
}
