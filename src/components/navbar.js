import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const ICONS = [
  /* list of objects with the follong format  :
  {
    name: string - name of page that appears on navbar
    path: string - path of page
  } */
]

const StyledLink = styled(Link)`
  appearance: div;
  display: flex;
  border-radius: 5rem;
  align-items: center;
  justify-content: center;
  transition: 0.5s;
  padding: 0.2rem 0.4rem;
  margin: 0 0.5rem;
  color: white;
  font-weight: lighter;
  font-size: 0.9rem;
  text-decoration: none;

  @media screen and (max-width: 600px) {
    font-size: 3.3vw;
    margin: 0 0.2rem;
  }

  :hover {
    background-color: rgb(1, 214, 9);
  }
`

function Navbar({ className }) {
  const Icons = ICONS.map(function(icon) {
    return (
      <StyledLink key={icon.name} to={icon.url}>
        {icon.name}
      </StyledLink>
    )
  })
  return <div className={className}>{Icons}</div>
}

Navbar.propTypes = {
  className: PropTypes.string
}

export default Navbar
