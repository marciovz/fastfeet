import {Alert} from 'react-native';
import {takeLatest, call, put, all} from 'redux-saga/effects';

import api from '~/services/api';

import {signInSuccess, signFailure} from './actions';

export function* signIn({payload}) {
  try {
    const {deliverymanId} = payload;

    const response = yield call(api.post, 'sessionsDeliveryman', {
      id: deliverymanId,
    });

    const deliveryman = response.data;

    if (!deliveryman) {
      Alert.alert(
        'Error no login',
        'Entregador não encontado, verifique seu id',
      );
      return;
    }

    yield put(signInSuccess(deliveryman));
  } catch (err) {
    Alert.alert(
      'Falha na autenticação',
      'Houve um erro no login, verifique seus dados',
    );
    yield put(signFailure());
  }
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
