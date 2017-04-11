import React, {PropTypes} from 'react'

import Character from './Character'

const Characters = ({characters}) => (
  <div>
    {characters.map((character) =>
      <Character name={character} />
    )}
  </div>
)

Character.propTypes = {
  characters: PropTypes.array.isRequired
}

export default Characters
