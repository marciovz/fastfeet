import {takeLatest, call, put, all} from 'redux-saga/effects';

import api from '~/services/api';

import { finalizeCurrentDeliveryInSuccess, finalizeCurrentDeliveryFailure} from './actions';


export function* finalizeDeliveryInRequest({payload}) {
  try {
    const { profileId, deliveryId } = payload;

    const response = yield call(api.get, `deliveryman/${profileId}/delivery/${deliveryId}/findOne`);

    const delivery = response.data;

    if (!delivery) {
      yield put(finalizeCurrentDeliveryFailure());
      return;
    }

    yield put(finalizeCurrentDeliveryInSuccess(delivery));
  } catch (err) {
      yield put(finalizeCurrentDeliveryFailure());
  }
}


export default all([takeLatest('@delivery/FINALIZE_DELIVERY_IN_REQUEST', finalizeDeliveryInRequest)]);