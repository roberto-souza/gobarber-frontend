import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';

import { updateProfileSuccess, updateProfileFailure } from './actions';

import UserTypes from './types';

export function* updateProfile({ payload }) {
  try {
    const { name, email, ...rest } = payload.data;

    const profile = { name, email, ...(rest.oldPassword ? rest : {}) };

    const response = yield call(api.put, 'users', profile);

    toast.success('Perfil atualizado com sucesso!');

    yield put(updateProfileSuccess(response.data));
  } catch (e) {
    toast.error('Erro ao atualizar perfil, verfique seus dados!');
    yield put(updateProfileFailure());
  }
}

export default all([
  takeLatest(UserTypes.UPDATE_PROFILE_REQUEST, updateProfile),
]);
