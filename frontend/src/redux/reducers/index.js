import {
    FETCH_POSTS_START,
    FETCH_POSTS_COMPLETE,
    FETCH_POSTS_ERROR,
} from '../actions'

const postsInitialState = {
  loading: false,
  posts: null,
  error: null
}

export const posts = (state = postsInitialState, action) => {
    switch(action.type) {
        case FETCH_POSTS_START:
            return { 
                ...state,
                loading: true,
            }
        case FETCH_POSTS_COMPLETE:
            return { 
                ...state,
                loading: false,
                error: null,
                posts: action.posts
            }
        case FETCH_POSTS_ERROR:
            return { 
                ...state,
                loading: false,
                error: action.error
            }
        default:
            return state
    }
}

export default posts