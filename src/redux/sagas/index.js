import {put, call, takeLatest, all} from 'redux-saga/effects';

const getUsers = () => {
  return fetch('https://jsonplaceholder.typicode.com/users') //Dummy Api
    .then(response => ({response}))
    .catch(error => ({error}));
};

function* getUsersSaga() {
  const {response, error} = yield call(getUsers);
  if (response) {
    const data = yield response.json();
    yield put({type: 'GET_USERS_SUCCESS', payload: data});
  } else {
    console.log('error: ', error.message);
  }
}

export default function* rootSaga() {
  yield all([takeLatest('GET_USERS_REQUEST', getUsersSaga)]);
}
