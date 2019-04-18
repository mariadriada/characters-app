import { CHARACTERS, DETAILS } from '../constants/index'

const loadCharacters = () => ({
    type: CHARACTERS.LOAD
})

const setCharacters = characters => ({
    type: CHARACTERS.LOAD_SUCCESS,
    characters
})

const setError = error => ({
    type: CHARACTERS.LOAD_FAIL,
    error
})

const loadCharacterDetails = () => ({
    type: DETAILS.LOAD
})

const setCharacterDetails = (id, details) => ({
    type: DETAILS.LOAD_SUCCESS,
    id,
    details
})

const setCharacterDetailsError = error => ({
    type: DETAILS.LOAD_FAIL,
    error
})

const addToDetails = id => ({
    type: DETAILS.ADD,
    id
})

const removeToDetails = id => ({
    type: DETAILS.REMOVE,
    id
})
/*
const filterCharactersDetails = details => ({
    type: DETAILS.FILTER,
    details
})
*/
export { 
    loadCharacters, 
    setCharacters, 
    setError, 
    loadCharacterDetails, 
    setCharacterDetails, 
    setCharacterDetailsError,
    addToDetails,
    removeToDetails
}