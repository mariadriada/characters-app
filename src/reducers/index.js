import { combineReducers } from 'redux'

import characterReducer from './charactersReducer'
import loadingReducer from './loadingReducer'
import characterDetailsReducer from './characterDetailsReducer'
import detailsReducer from './detailsReducer'
import subtitleReducer from './subtitleReducer'
import charactersFilterReducer from './charactersFilterReducer'
import filterReducer from './filterReducer'
import errorReducer from './errorReducer'
import errorCharacterDetailsReducer from './errorCharacterDetailsReducer'


const rootReducer = combineReducers({
    isLoading: loadingReducer,
    characters: characterReducer,    
    charactersDetails: characterDetailsReducer,
    idsDetails: detailsReducer,
    subtitle: subtitleReducer,
    error: errorReducer,
    errorDetails: errorCharacterDetailsReducer,
    charactersFilter: charactersFilterReducer,
    filterState: filterReducer
})

export default rootReducer