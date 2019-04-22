import { CHARACTERS, FILTERS } from '../constants'

const errorReducer = (state = null, action) => {
    switch(action.type) {
        case CHARACTERS.LOAD_FAIL:
            return action.error
        case CHARACTERS.LOAD:
        case CHARACTERS.LOAD_SUCCESS:
        case FILTERS.INACTIVE:
            return null

        default:
            return state
    }
}

export default errorReducer