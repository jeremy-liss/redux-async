import React from 'react'
import {connect} from 'react-redux'
import {fetchCharacters} from '../actions'

let LoadSpecies = ({dispatch}) => (
  <button
    onClick={() => dispatch(fetchCharacters())}
    >Star Wars Species</button>
)

LoadSpecies = connect()(LoadSpecies)

export default LoadSpecies
