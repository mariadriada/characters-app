import charactersSaga from './charactersSaga'
import { all } from 'redux-saga/effects';

export default function* rootSaga(){   
    yield all([
        charactersSaga(),
        statsSaga()
    ])
}