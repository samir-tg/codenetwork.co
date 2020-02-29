import Img from 'gatsby-image'
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledExecWindow = styled.div`
  text-align: center;
  width: 200px;

  .image {
    border-radius: 50%;
    border-style: solid;
    border-color: #01d609;
    border-width: 6px;
  }

  .name {
    margin-bottom: 8px;
  }
`

const ExecWindow = ({ exec, className }) => (
  <StyledExecWindow className={className}>
    <Img className="image" fluid={{ ...exec.photo.fluid, aspectRatio: 1 }} />
    <h3 className="name">{exec.name}</h3>
    <h5>{exec.role}</h5>
  </StyledExecWindow>
)
ExecWindow.propTypes = {
  exec: PropTypes.object.isRequired,
  className: PropTypes.string
}
export default ExecWindow
