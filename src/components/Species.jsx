import React, {PropTypes} from 'react'

import Character from './Character'

const Species = ({species}) => (
  <div>
    {species.map((character) =>
      <Character
        name={character}
        />
    )}
  </div>
)

Character.propTypes = {
  characters: PropTypes.array.isRequired
}

export default Species
