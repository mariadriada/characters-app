import { takeEvery, call, put } from 'redux-saga/effects'

import { CHARACTERS } from '../constants'
import { fetchCharacters } from '../api'
import { setCharacters, setError } from '../actions'


function* handleCharactersLoad(){   
    console.log('handleCharactersLoad')
    try {       
        const characters = yield call(fetchCharacters)               
        yield put(setCharacters(characters))
    }
    catch(error){
        console.log('error: ', error.toString())
        yield put(setError(error.toString()))
    }
   
}

export default function* watchImagesLoad(){
    yield takeEvery(CHARACTERS.LOAD, handleCharactersLoad)
}