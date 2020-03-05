import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const ICONS = [
  {
    image: '/facebook.svg',
    url: 'https://facebook.com/groups/WeCodeALot'
  },
  {
    image: '/discord.svg',
    url: 'https://discordapp.com/channels/349872637645684736/413628419226468352'
  },
  {
    image: '/twitter.svg',
    url: 'https://twitter.com/qutcode'
  },
  {
    image: '/github.svg',
    url: 'https://github.com/codenetwork/'
  }
]

const StyledA = styled.a`
  display: div;
  display: flex;
  border-radius: 5rem;
  align-items: center;
  justify-content: center;
  transition: 0.5s;
  padding: 0.7rem;
  margin: 0 0.3rem;
  width: 10vw;
  max-width: 3rem;

  > img {
    margin-bottom: 0;
  }

  @media screen and (max-width: 600px) {
    padding: 0.6rem;
    margin: 0;
  }

  :hover {
    background-color: ${props => props.theme.main.fg};
  }
`

function SocialIcons({ className }) {
  const Icons = ICONS.map(function(icon) {
    return (
      <StyledA key={icon.name} href={icon.url}>
        <img src={icon.image} />
      </StyledA>
    )
  })
  return <div className={className}> {Icons}</div>
}

SocialIcons.propTypes = {
  className: PropTypes.string
}

export default SocialIcons
