import { CREATE_POST } from '../actions'

export const posts = (state = {}, action) => {
    switch(action.type) {
        case CREATE_POST:
            return state
        default:
            return state
    }
} 