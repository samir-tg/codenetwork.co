import { Link, useStaticQuery, graphql } from 'gatsby'
import React from 'react'
import Img from 'gatsby-image'

const CodeNetworkLogo = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
}

const Header = () => (
  <header
    style={{
      background: '#0d0f2e',
      marginBottom: '1.45rem'
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 200,
        padding: '2.5rem 1.0875rem'
      }}
    >
      <Link
        to="/"
        style={{
          color: 'white',
          textDecoration: 'none'
        }}
      >
        <CodeNetworkLogo />
      </Link>
    </div>
    <a
      href="https://www.facebook.com/groups/WeCodeAlot/"
      style={{
        textDecoration: 'none'
      }}
    >
      <div
        style={{
          position: 'relative',
          background: '#01d609',
          maxWidth: 150,
          margin: '0 auto',
          height: '2.5rem',
          bottom: '-13px',
          borderRadius: 20,
          textAlign: 'center',
          paddingTop: '10% 0',
          fontFamily: 'sans',
          color: 'black',
          fontWeight: 'bold',
          lineHeight: 2.3,
          boxShadow: '0 0 10px'
        }}
      >
        {' '}
        JOIN
      </div>
    </a>
  </header>
)

export default Header
