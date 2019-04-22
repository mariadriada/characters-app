import { all } from 'redux-saga/effects';

import charactersSaga from './charactersSaga'
import characterDetailsSaga from './characterDetailsSaga'
import charactersFilterSaga from './charactersFilterSaga'

export default function* rootSaga(){   
    yield all([
        charactersSaga(),
        characterDetailsSaga(),
        charactersFilterSaga()
    ])
}