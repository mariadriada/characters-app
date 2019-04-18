import { takeEvery, call, put } from 'redux-saga/effects'

import { CHARACTERS } from '../constants'
import { fetchCharacters } from '../api'
import { setCharacters, setError } from '../actions'


export function* handleCharactersLoad(){ 
    try {       
        const characters = yield call(fetchCharacters)               
        yield put(setCharacters(characters))
    }
    catch(error){
        yield put(setError(error.toString()))
    }
   
}

export default function* watchImagesLoad(){
    yield takeEvery(CHARACTERS.LOAD, handleCharactersLoad)
}