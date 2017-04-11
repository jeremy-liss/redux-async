import React, {PropTypes} from 'react'

import Character from './Character'

const Characters = ({characters}) => (
  <div>
    {characters.map((character, i) =>
      <Character name={character} key={i} />
    )}
  </div>
)

Characters.propTypes = {
  characters: PropTypes.array.isRequired
}

export default Characters
