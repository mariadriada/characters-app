import { DETAILS } from '../constants'

const errorCharacterDetailsReducer = (state = null, action) => {
    switch(action.type) {
        case DETAILS.LOAD_FAIL:
            return action.error
        case DETAILS.LOAD:
        case DETAILS.LOAD_SUCCESS:
            return null

        default:
            return state
    }
}

export default errorCharacterDetailsReducer