import { combineReducers } from 'redux'

import characterReducer from './charactersReducer'
import errorReducer from './errorReducer'
import loadingReducer from './loadingReducer'
import characterDetailsReducer from './characterDetailsReducer'
import detailsReducer from './detailsReducer'

const rootReducer = combineReducers({
    isLoading: loadingReducer,
    characters: characterReducer,
    error: errorReducer,
    charactersDetails: characterDetailsReducer,
    idsDetails: detailsReducer
})

export default rootReducer