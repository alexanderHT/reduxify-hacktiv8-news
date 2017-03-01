import { combineReducers } from 'redux'
// import and declare data news
import NewsReducer from './reducer_news'
// import and declare data people
import PeoplesReducer from './reducer_peoples'
// import and declare action news
import SearchTitleReducer from './reducer_search_new'

const rootReducers = combineReducers({
  news: NewsReducer,
  peoples: PeoplesReducer,
  search: SearchTitleReducer
})

export default rootReducers
