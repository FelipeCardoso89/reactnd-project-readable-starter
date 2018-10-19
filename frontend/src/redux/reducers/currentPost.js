import {
    FETCH_POST_START,
    FETCH_POST_COMPLETE,
    FETCH_POST_ERROR,
} from '../actions'

const postInitialState = {
  loading: false,
  post: null,
  comments: null,
  error: null
}

export const posts = (state = postsInitialState, action) => {
    switch(action.type) {
        case FETCH_POST_START:
            return { 
                ...state,
                loading: true,
            }
        case FETCH_POST_COMPLETE:
            return { 
                ...state,
                loading: false,
                error: null,
                posts: action.posts
            }
        case FETCH_POST_ERROR:
            return { 
                ...state,
                loading: false,
                error: action.error
            }
        default:
            return state
    }
}

export default currentPost