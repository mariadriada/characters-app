import { FILTERS, CHARACTERS } from '../constants'

const filterReducer = (state = null, action) => {
    switch(action.type) {
        case FILTERS.ACTIVE:
            return true
        case FILTERS.INACTIVE: 
        case CHARACTERS.LOAD_SUCCESS:      
            return false

        default:
            return state
    }
}

export default filterReducer