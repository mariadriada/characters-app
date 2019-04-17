import { combineReducers } from 'redux'

import characterReducer from './charactersReducer'
import errorReducer from './errorReducer'
import loadingReducer from './loadingReducer'

const rootReducer = combineReducers({
    isLoading: loadingReducer,
    characters: characterReducer,
    error: errorReducer
})

export default rootReducer