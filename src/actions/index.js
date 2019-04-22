import { CHARACTERS, DETAILS, SUBTITLE } from '../constants/index'

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

const loadCharacterDetails = id => ({
    type: DETAILS.LOAD,
    id
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

const goToDetails = history => ({
    type: DETAILS.GO,
    history
})

const cleatIdsDetails = () => ({
    type: DETAILS.CLEAR,
})

const setSubtitle = subtitle => ({
    type: SUBTITLE.SET,
    subtitle
})

export { 
    loadCharacters, 
    setCharacters, 
    setError, 
    loadCharacterDetails, 
    setCharacterDetails, 
    setCharacterDetailsError,
    addToDetails,
    removeToDetails,
    goToDetails,
    cleatIdsDetails,
    setSubtitle
}