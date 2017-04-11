import React from 'react'

import LoadSubreddit from './LoadSubreddit'
import NewSubreddit from './NewSubreddit'
import SubredditContainer from '../containers/SubredditContainer'
import LoadCharacters from './LoadCharacters'
import CharacterContainer from '../containers/CharacterContainer'

const App = () => (
  <div className='app-container'>
    <LoadSubreddit />
    <NewSubreddit />
    <LoadCharacters />
    <SubredditContainer />
    <CharacterContainer />
  </div>
)

export default App
