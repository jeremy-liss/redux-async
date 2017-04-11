import React, {PropTypes} from 'react'

import Character from './Character'

const Species = ({species}) => (
  <div>
    {species.map((character,i) =>
      <Character
        name={character} key={i}
        />
    )}
  </div>
)

Species.propTypes = {
  species: PropTypes.array.isRequired
}

export default Species
