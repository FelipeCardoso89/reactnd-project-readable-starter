import {
    FETCH_POST_START,
    FETCH_POST_COMPLETE,
    FETCH_POST_ERROR,
    FETCH_COMMENTS_START,
    FETCH_COMMENTS_COMPLETE,
    FETCH_COMMENTS_ERROR
} from '../actions'

const postInitialState = {
  loading: false,
  post: null,
  comments: null,
  error: null
}

export const currentPost = (state = postInitialState, action) => {
    let newState = state
    switch(action.type) {
        case FETCH_POST_START:
            newState = { 
                ...state,
                loading: true,
            }
            break
        case FETCH_POST_COMPLETE:
            newState = { 
                ...state,
                loading: false,
                error: null,
                post: action.post,
            }
            break
        case FETCH_POST_ERROR:
            newState = { 
                ...state,
                loading: false,
                error: action.error
            }
            break
        case FETCH_COMMENTS_START:
            newState = {
                ...state,
                loading: true,
            }
            break
        case FETCH_COMMENTS_COMPLETE :
            newState = {
                ...state,
                loading: false,
                error: null,
                comments: action.comments,
            }
            break
        case FETCH_COMMENTS_ERROR:
            newState = {
                ...state,
                loading: false,
                error: action.error
            }
            break
        
        default:
            newState = state
    }
    
    return newState
}

export default currentPost