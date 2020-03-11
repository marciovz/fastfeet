import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import formatDate from '~/util/formatDate';

import { Container } from './styles';

export default function DeliveryModal({ show, selectedDelivery, onClick }) {
  const [showModal, setShowModal] = useState(false);
  const [delivery, setDelivery] = useState({ delivery: null });

  useEffect(() => {
    setShowModal(show);
    if (selectedDelivery) {
      setDelivery({
        ...selectedDelivery,
        formatedStartDate: formatDate(selectedDelivery.start_date),
        formatedEndDate: formatDate(selectedDelivery.end_date),
      });
    }
    console.tron.log(selectedDelivery);
  }, [show, selectedDelivery]);

  return (
    <Container onClick={onClick} showModal={showModal}>
      <div>
        <div>
          <h1>Informações da encomenda</h1>
          {delivery && delivery.recipient && (
            <>
              <p>
                {delivery.recipient.street} {', '}
                {delivery.recipient.number}
              </p>
              <p>
                {delivery.recipient.city} {' - '}
                {delivery.recipient.state}
              </p>
              <p>{delivery.recipient.zip_code}</p>
            </>
          )}
        </div>

        <div>
          <h2>Datas</h2>
          {delivery && (
            <>
              <h3>
                Retirada: <span>{delivery.formatedStartDate}</span>
              </h3>
              <h3>
                Entrega: <span>{delivery.formatedEndDate}</span>
              </h3>
            </>
          )}
        </div>
        <h2>Assinatura do destinatário</h2>
        {delivery && delivery.signature && (
          <img src={delivery.signature.url} alt="Assinatura do destinatário" />
        )}
      </div>
    </Container>
  );
}

DeliveryModal.defaultProps = {
  show: false,
  selectedDelivery: PropTypes.shape({
    start_date: null,
    end_date: null,
    recipient: null,
    deliveryman: null,
    signature: null,
  }),
};

DeliveryModal.propTypes = {
  show: PropTypes.bool,
  selectedDelivery: PropTypes.shape({
    start_date: PropTypes.string,
    end_date: PropTypes.string,
    recipient: PropTypes.shape(),
    deliveryman: PropTypes.shape(),
    signature: PropTypes.shape(),
  }),
  onClick: PropTypes.func.isRequired,
};
