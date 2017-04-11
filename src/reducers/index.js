import {combineReducers} from 'redux'

import subreddits from './subreddits'
import swapiData from './swapi'

export default combineReducers({
  subreddits,
  swapiData
})
