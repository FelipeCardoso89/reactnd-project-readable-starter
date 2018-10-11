import { combineReducers } from 'redux'
import post from './post'
import category from './category'

const rootReducer = combineReducers({
  post,
  category,
})

export default rootReducer