import produce from 'immer';

const INITIAL_STATE = {
  delivery: null,
};

export default function currentDelivery(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@delivery/SAVE_DELIVERY_REQUEST': {
        draft.delivery = action.payload.delivery;
        break;
      }
      case '@delivery/RESET_DELIVERY_REQUEST': {
        draft.delivery = null;
        break;
      }
      case '@delivery/FINALIZE_DELIVERY_IN_SUCCESS': {
        draft.delivery = action.payload.delivery;
        break;
      }
      case '@delivery/FINALIZE_DELIVERY_FAILURE': {
        draft.delivery = null;
        break;
      }
      default:
    }
  });
}
