import { DETAILS } from '../constants'

const characterDetailsReducer = (state = {}, action) => {
    switch (action.type) {
        case DETAILS.LOAD:
            return {
                ...state,
                [action.id]: {
                    isLoading: true,
                    details: null,
                    error: false
                }
            };
        case DETAILS.LOAD_SUCCESS:
        return {
            ...state,
            [action.id]: {
                isLoading: false,
                details: action.details,
                error: false
            }
        };
        case DETAILS.LOAD_FAIL:
        return {
            ...state,
            [action.id]: {
                isLoading: false,
                details: null,
                error: true
            }
        };

        default:
            return state
    }
}

export default characterDetailsReducer