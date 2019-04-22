import { take, takeEvery, takeLatest , call, fork, put, select } from 'redux-saga/effects';
import { push } from 'react-router-redux';

import { CHARACTERS, DETAILS } from '../constants'
import { fetchCharacterDetails } from '../api'
import { 
    loadCharacterDetails, 
    setCharacterDetails, 
    setCharacterDetailsError,
    addToDetails,
    removeToDetails
} from '../actions';

export function* handleCharacterDetailsRequest(action){  
    let err = ''
    
    // To attempt three times
    for(let i=0; i<3; i++) {
        try {   
            // Call to API of characters by one or more characters
            const res = yield call(fetchCharacterDetails, action.id);
            yield put(setCharacterDetails(action.id, res))  
            return true
        }
        catch(error){
            err = error
            yield put(setCharacterDetailsError(error.toString()))  
        }       
    }
    yield put(setCharacterDetailsError(`Error searching character(s): ${action.id}. [Details]: ${err}`)) 
     
}

//Change URL to details
export function* handleDetailsGo(action){   
    const history = action.history
    yield history.push(history.navigateTo)
}

export default function* watchCharacterDetailsRequest(){
           
        // Go to Details page
        yield takeEvery(DETAILS.GO, handleDetailsGo)      

        // Load details data
        const action = yield take(DETAILS.LOAD)
        yield fork(handleCharacterDetailsRequest, action)
    
}