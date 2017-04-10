import React from 'react'

import LoadSubreddit from './LoadSubreddit'
import NewSubreddit from './NewSubreddit'
import SubredditContainer from '../containers/SubredditContainer'

const App = () => (
  <div className='app-container'>
    <LoadSubreddit />
    <NewSubreddit />
    <SubredditContainer />
  </div>
)

export default App
