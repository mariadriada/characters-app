import { CHARACTERS, DETAILS, SUBTITLE, FILTERS } from '../constants/index'

/*
* actions for Characters
*/
export const loadCharacters = () => ({
    type: CHARACTERS.LOAD
})

export const setCharacters = characters => ({
    type: CHARACTERS.LOAD_SUCCESS,
    characters
})

export const setError = error => ({
    type: CHARACTERS.LOAD_FAIL,
    error
})

/*
* actions for Characters Details
*/
export const loadCharacterDetails = id => ({
    type: DETAILS.LOAD,
    id
})

export const setCharacterDetails = (id, details) => ({
    type: DETAILS.LOAD_SUCCESS,
    id,
    details
})

export const setCharacterDetailsError = error => ({
    type: DETAILS.LOAD_FAIL,
    error
})

export const addToDetails = id => ({
    type: DETAILS.ADD,
    id
})

export const removeToDetails = id => ({
    type: DETAILS.REMOVE,
    id
})

export const goToDetails = history => ({
    type: DETAILS.GO,
    history
})

export const cleatIdsDetails = () => ({
    type: DETAILS.CLEAR,
})

/*
* actions for Subtitle
*/
export const setSubtitle = subtitle => ({
    type: SUBTITLE.SET,
    subtitle
})

/*
* actions for Characters filters
*/
export const activeSearchCharacters = text => ({
    type: FILTERS.ACTIVE,
    text
})

export const inactiveSearchCharacters = () => ({
    type: FILTERS.INACTIVE
})

export const setCharactersfilter = characters => ({
    type: FILTERS.LOAD_SUCCESS,
    characters
})

