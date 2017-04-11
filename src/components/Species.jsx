import React, {PropTypes} from 'react'

import Character from './Character'

const Character = ({characters}) => (
  <div>
    {characters.map((character, i) =>
      <Character
        key={i}
        name={character.title}
        />
    )}
  </div>
)

Character.propTypes = {
  characters: PropTypes.array.isRequired
}

export default Character
