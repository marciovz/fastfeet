import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  Line,
  StatusPoint,
  Point,
  StatusText,
  TextPoint,
} from './styles';

export default function StatusBarDelivery({dataDelivery}) {
  const [status, setStatus] = useState(null);
  const [pointWaiting, setPointWaiting] = useState(false);
  const [pointPending, setPointPending] = useState(false);
  const [pointDelivered, setPointDelivered] = useState(false);

  function getStatus(canceled_at, start_date, end_date) {
    if (canceled_at) return 'CANCELED';
    if (end_date) return 'DELIVERED';
    if (start_date) return 'PENDING';
    return 'WAITING';
  }

  useEffect(() => {
    if (dataDelivery) {
      const {canceled_at, start_date, end_date} = dataDelivery;
      const defineStatus = getStatus(canceled_at, start_date, end_date);
      setStatus(defineStatus);
    }
  }, [dataDelivery]);

  useEffect(() => {
    switch (status) {
      case 'DELIVERED':
        setPointDelivered(true);
        setPointPending(true);
        setPointWaiting(true);
        break;
      case 'PENDING':
        setPointDelivered(false);
        setPointPending(true);
        setPointWaiting(true);
        break;
      case 'WAITING':
        setPointDelivered(false);
        setPointPending(false);
        setPointWaiting(true);
        break;
      default:
        setPointDelivered(false);
        setPointPending(false);
        setPointWaiting(false);
    }
  }, [status]);

  return (
    <Container>
      <StatusPoint>
        <Point status={pointWaiting} />
        <Line />
        <Point status={pointPending} />
        <Line />
        <Point status={pointDelivered} />
      </StatusPoint>
      <StatusText>
        <TextPoint>Aguardando Retirada</TextPoint>
        <TextPoint>Retirada</TextPoint>
        <TextPoint>Entregue</TextPoint>
      </StatusText>
    </Container>
  );
}

StatusBarDelivery.propTypes = {
  dataDelivery: PropTypes.shape(),
};

StatusBarDelivery.defaultProps = {
  dataDelivery: null,
};
