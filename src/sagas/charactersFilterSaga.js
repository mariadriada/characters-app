import { takeLatest, call, put } from 'redux-saga/effects'

import { FILTERS } from '../constants'
import { fetchCharacterSearch } from '../api'
import { setError, setCharactersfilter } from '../actions'

export function* handleCharactersSearch(action){
    try {       
        const characters = yield call(fetchCharacterSearch, action.text)               
        yield put(setCharactersfilter(characters))
    }
    catch(error){
        yield put(setError(error.toString()))
    }  
}

export default function* watchFilters(){  
    // When is active searching, load the data filtered
    yield takeLatest(FILTERS.ACTIVE, handleCharactersSearch)
}