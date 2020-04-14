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

export function finalizeCurrentDeliveryInRequest({ profileId, deliveryId }) {
  return{
    type: '@delivery/FINALIZE_DELIVERY_IN_REQUEST',
    payload: { profileId, deliveryId },
  }
}

export function finalizeCurrentDeliveryInSuccess(delivery) {
  return{
    type: '@delivery/FINALIZE_DELIVERY_IN_SUCCESS',
    payload: { delivery },
  }
}

export function finalizeCurrentDeliveryFailure() {
  return{
    type: '@delivery/FINALIZE_DELIVERY_FAILURE',
  }
}