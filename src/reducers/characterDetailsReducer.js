import { DETAILS } from '../constants'

const characterDetailsReducer = (state = [], action) => {   
    if (action.type === DETAILS.LOAD_SUCCESS) {
        //When action contain only one character to find, the details is not iterable
        if(!action.details.length) 
            return [...state, action.details]
        return [...state, ...action.details]
        }
    return state    
}

export default characterDetailsReducer