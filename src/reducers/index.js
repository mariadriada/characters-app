import { combineReducers } from 'redux'

import characterReducer from './charactersReducer'
import errorReducer from './errorReducer'
import loadingReducer from './loadingReducer'
import characterDetailsReducer from './characterDetailsReducer'

const rootReducer = combineReducers({
    isLoading: loadingReducer,
    characters: characterReducer,
    error: errorReducer,
    charactersDetails: characterDetailsReducer
})

export default rootReducer