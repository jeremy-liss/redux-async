import React from 'react'
import {connect} from 'react-redux'
import {fetchPosts} from '../actions'

let NewSubreddit = ({dispatch}) => (
  <button
    onClick={() => dispatch(fetchPosts('australia'))}
    >Fetch Australia</button>
)

NewSubreddit = connect()(NewSubreddit)

export default NewSubreddit
