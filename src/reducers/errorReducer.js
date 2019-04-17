import { CHARACTERS } from '../constants'

const errorReducer = (state = null, action) => {
    switch(action.type) {
        case CHARACTERS.LOAD_FAIL:
            return action.error
        case CHARACTERS.LOAD:
        case CHARACTERS.LOAD_SUCCESS:
            return null

        default:
            return state
    }
}

export default errorReducer