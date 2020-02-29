import PropTypes from 'prop-types'
import React from 'react'
import ExecWindow from './execWindow'
import styled from 'styled-components'

const StyledExecPreview = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
  .exec-window {
    flex-grow: 1;
    margin: 0 10px;
    flex-basis: 8rem;
    max-width: 10rem;
  }
`

const ExecPreview = ({ execs }) => {
  const elms = execs.map(exec => {
    return <ExecWindow className={'exec-window'} key={execs.name} exec={exec} />
  })
  return <StyledExecPreview>{elms}</StyledExecPreview>
}

ExecPreview.propTypes = {
  execs: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default ExecPreview
