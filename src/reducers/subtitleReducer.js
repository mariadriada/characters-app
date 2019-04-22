import { SUBTITLE } from '../constants'

const subtitleReducer = (state = '', action) => {
    if (action.type === SUBTITLE.SET) {
        return action.subtitle
    }
    return state
}

export default subtitleReducer
