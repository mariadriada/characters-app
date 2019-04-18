import { take, call, fork, put } from 'redux-saga/effects';

import { CHARACTERS } from '../constants'
import { fetchCharacterDetails } from '../api'
import { loadCharacterDetails, setCharacterDetails, setCharacterDetailsError } from '../actions';

export function* handleCharacterDetailsRequest(id){    
    // To attempt three times
    for(let i=0; i<3; i++) {
        try {            
            yield put(loadCharacterDetails(id))
            const res = yield call(fetchCharacterDetails, id);
            yield put(setCharacterDetails(id, res))            
            return true
        }
        catch(error){}       
    }
    yield put(setCharacterDetailsError(id))   
}

export default function* watchCharacterDetailsRequest(){
    while(true) {
        //When load characters, request details 
        const { characters } = yield take(CHARACTERS.LOAD_SUCCESS)

        // Get details for each character
        for (let i=0; i<characters.length; i++) {
            yield fork(handleCharacterDetailsRequest, characters[i].id)
        }
    }
}