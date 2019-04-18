import { take, takeEvery, call, fork, put } from 'redux-saga/effects';

import { CHARACTERS, DETAILS } from '../constants'
import { fetchCharacterDetails } from '../api'
import { 
    loadCharacterDetails, 
    setCharacterDetails, 
    setCharacterDetailsError,
    addToDetails 
} from '../actions';

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

export function* handleAddToDetails(id) {  
    yield put(addToDetails(id))
}

export default function* watchCharacterDetailsRequest(){
    while(true) {
        //When load characters, request details 
        const { characters } = yield take(CHARACTERS.LOAD_SUCCESS)

        // Get details for each character
        for (let i=0; i<characters.length; i++) {
            yield fork(handleCharacterDetailsRequest, characters[i].id)
        }

        yield take(DETAILS.ADD, handleAddToDetails)
        
    }
}