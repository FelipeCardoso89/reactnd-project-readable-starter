import {
    FETCH_CATEGORIES_START,
    FETCH_CATEGORIES_COMPLETE,
    FETCH_CATEGORIES_ERROR
} from '../actions'

const categoryInitialState = {
  loading: false,
  categories: null,
  error: null
}

export const category = (state = categoryInitialState, action) => {
    switch(action.type) {
        case FETCH_CATEGORIES_START:
            return { 
                ...state,
                loading: true,
            }
        case FETCH_CATEGORIES_COMPLETE:
            return { 
                ...state,
                loading: false,
                error: null,
                categories: action.categories
            }
        case FETCH_CATEGORIES_ERROR:
            return { 
                ...state,
                loading: false,
                error: action.error
            }
        default:
            return state
    }
}

export default category