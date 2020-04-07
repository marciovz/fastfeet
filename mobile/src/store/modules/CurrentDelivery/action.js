export function saveCurrentDeliveryRequest(delivery) {
  return {
    type: '@delivery/SAVE_DELIVERY_REQUEST',
    payload: {delivery},
  };
}

export function resetCurrentDeliveryRequest() {
  return {
    type: '@delivery/RESET_DELIVERY_REQUEST',
  };
}
