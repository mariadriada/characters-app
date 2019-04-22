import { FILTERS } from '../constants'

const charactersFilterReducer = (state = [], action) => {    
    if (action.type === FILTERS.LOAD_SUCCESS) {
        return [...state, ...action.characters]
    }
    // Clear data filters when filter is not active
    else if (action.type === FILTERS.INACTIVE)
        return []
        
    return state
}

export default charactersFilterReducer
