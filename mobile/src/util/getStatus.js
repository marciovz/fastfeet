const getStatus = (startDate, endDate, canceled) => {
  if (canceled) return 'Cancelada';
  if (endDate) return 'Entregue';
  if (startDate) return 'Retirada';
  return 'Pendente';
}
export default getStatus;