import { takeEvery, call, put } from  'redux-saga/effects';
import { GET_USERS_FETCH, GET_USERS_SUCCESS } from './actions';

function userFetch() {
    return fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json())
}

function* workGetUsersFetch() {
    const users = yield call(userFetch);
    yield put({type: GET_USERS_SUCCESS, users})
}

function* mySaga(){
    yield takeEvery(GET_USERS_FETCH, workGetUsersFetch);
}

export default mySaga;