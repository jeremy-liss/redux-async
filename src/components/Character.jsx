import React, {PropTypes} from 'react'

const Character = ({name}) => (
  <div>{name}</div>
)

Character.propTypes = {
  name: PropTypes.string.isRequired
}

export default Character
