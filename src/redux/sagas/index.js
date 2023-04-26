import { put, call, takeLatest, all } from "redux-saga/effects";
import { ActionTypes, API, BASE_URL } from "../../constants";

const getUsers = () => {
  return fetch(BASE_URL + API.getUsers) //Dummy Api
    .then((response) => ({ response }))
    .catch((error) => ({ error }));
};

function* getUsersSaga() {
  const { response, error } = yield call(getUsers); // Api call
  if (response) {
    const data = yield response.json();
    yield put({ type: ActionTypes.GET_USERS_SUCCESS, payload: data }); // Updating value in Redux state
  } else {
    console.log("error: ", error.message);
  }
}

export default function* rootSaga() {
  yield all([takeLatest(ActionTypes.GET_USERS_REQUEST, getUsersSaga)]);
}
