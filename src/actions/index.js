import { CHARACTERS } from '../constants/index'

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

export { loadCharacters, setCharacters, setError }