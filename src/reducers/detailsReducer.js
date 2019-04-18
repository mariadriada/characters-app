import { DETAILS } from '../constants'

const charactersReducer = (state = [], action) => {
    switch(action.type){
        case DETAILS.ADD:
            return [...state, action.id]
        case DETAILS.REMOVE:
            // Remove id checkbox unchecked
            state.splice(state.indexOf(action.id), 1)
            return [...state]

        default:
            return state
    }
}

export default charactersReducer
