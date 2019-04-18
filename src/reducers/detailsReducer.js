import { DETAILS } from '../constants'

const charactersReducer = (state = [], action) => {
    if (action.type === DETAILS.ADD) {
        return [...state, action.id]
    }
    return state
}

export default charactersReducer
