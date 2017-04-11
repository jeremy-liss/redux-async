import React from 'react'

import LoadSubreddit from './LoadSubreddit'
import NewSubreddit from './NewSubreddit'
import SubredditContainer from '../containers/SubredditContainer'
import LoadSpecies from './LoadSpecies'
import SpeciesContainer from '../containers/SpeciesContainer'

const App = () => (
  <div className='app-container'>
    <LoadSubreddit />
    <NewSubreddit />
    <SubredditContainer />
    <LoadSpecies />
    <SpeciesContainer />

  </div>
)

export default App
