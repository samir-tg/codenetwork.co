import PropTypes from 'prop-types'
import React from 'react'
import ExecWindow from './execWindow'

const ExecPreview = ({ execs }) => {
  const elms = execs.map(exec => {
    return <ExecWindow key={execs.name} exec={exec} />
  })
  console.log(elms)
  return <div>{elms}</div>
}

ExecPreview.propTypes = {
  execs: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default ExecPreview
