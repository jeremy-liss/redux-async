import {combineReducers} from 'redux'

import subreddits from './subreddits'
import characters from './characters'

export default combineReducers({
  subreddits,
  characters
})
