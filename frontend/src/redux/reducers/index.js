import {
    FETCH_POSTS,
    DID_FETCH_POSTS,
} from '../actions'

export const home = (state = {}, action) => {
    switch(action.type) {
        default:
            break
    }
} 

export const posts = (state = {}, action) => {
    switch(action.type) {
        case FETCH_POSTS:
            return state
        case DID_FETCH_POSTS:
            return state
        default:
            return state
    }
}

export default posts