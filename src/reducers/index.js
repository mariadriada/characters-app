import { combineReducers } from 'redux'

import characterReducer from './charactersReducer'
import loadingReducer from './loadingReducer'
import characterDetailsReducer from './characterDetailsReducer'
import detailsReducer from './detailsReducer'
import subtitleReducer from './subtitleReducer'
import errorReducer from './errorReducer'
import errorCharacterDetailsReducer from './errorCharacterDetailsReducer'


const rootReducer = combineReducers({
    isLoading: loadingReducer,
    characters: characterReducer,    
    charactersDetails: characterDetailsReducer,
    idsDetails: detailsReducer,
    subtitle: subtitleReducer,
    error: errorReducer,
    errorDetails: errorCharacterDetailsReducer
})

export default rootReducer