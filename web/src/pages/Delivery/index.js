import React from 'react';
import api from '~/services/api';

// import { Container } from './styles';

export default function Delivery() {
  api.get('deliveries');

  return <div>Delivery</div>;
}
