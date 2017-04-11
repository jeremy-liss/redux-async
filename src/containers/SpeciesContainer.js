import {connect} from 'react-redux'

import Characters from '../components/Species'

const mapStateToProps = (state) => {
  return {
    species: state.swapiData
  }
}

export default connect(
  mapStateToProps
)(Characters)
