import { DETAILS } from '../constants'

const charactersReducer = (state = [], action) => {
    switch(action.type){
        case DETAILS.ADD:
            //Search id in state
            if(state.indexOf(action.id)===-1)
                return [...state, action.id]
            return [...state]
        case DETAILS.REMOVE:
            //Remove id checkbox unchecked
            state.splice(state.indexOf(action.id), 1)
            return [...state]
        case DETAILS.CLEAR:
            return []
      
        default:
            return state
    }
}

export default charactersReducer
