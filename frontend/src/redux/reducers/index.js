import { combineReducers } from 'redux'
import post from './post'
import category from './category'
import currentPost from './currentPost'

const rootReducer = combineReducers({
  post,
  category,
  currentPost
})

export default rootReducer