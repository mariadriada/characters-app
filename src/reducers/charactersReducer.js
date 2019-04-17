import { CHARACTERS } from '../constants'

const charactersReducer = (state = [], action) => {
    if (action.type === CHARACTERS.LOAD_SUCCESS) {
        return [...state, ...action.characters]
    }
    return state
}

export default charactersReducer
