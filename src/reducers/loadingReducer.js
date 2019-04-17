import { CHARACTERS } from '../constants'

const loadingReducer = (state = false, action) => {
    switch(action.type) {
        case CHARACTERS.LOAD:
            return true
        case CHARACTERS.LOAD_SUCCESS:
            return false
        case CHARACTERS.LOAD_FAIL:
            return false

        default:
            return state

    }
}

export default loadingReducer