/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { graphql, useStaticQuery } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import Header from './header'
import './layout.css'
import SocialIcons from './socialIcons'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          email
        }
      }
    }
  `)

  const StyledLayout = styled.div`
    position: relative;
    min-height: 100vh;
    text-align: center;

    header {
      background: #0d0f2e;
    }
    main {
      margin: 0 auto;
      max-width: 960px;
      padding-top: 1.5rem;
      padding-bottom: 4rem;
    }

    footer {
      width: 100%;
      position: absolute;
      bottom: 0;
      background: #0d0f2e;
      font-weight: bold;

      .info-pane {
        padding: 10px;
        display: flex;
        align-items: center;
        justify-content: space-around;

        .email {
          color: #01d609;
          text-decoration: none;
          font-size: 30px;

          @media screen and (max-width: 700px) {
            font-size: calc(4vw + 2px);
          }
        }

        .social-icons {
          display: flex;
        }
      }

      .green-line {
        background: #01d609;
        height: 0.5rem;
      }
    }
  `

  return (
    <StyledLayout>
      <Header />
      <main>{children}</main>
      <footer>
        <div className="info-pane">
          <a className="email" href={`mailtod:${data.site.siteMetadata.email}`}>
            {data.site.siteMetadata.email}
          </a>
          <SocialIcons className="social-icons" />
        </div>
        <div className="green-line" />
      </footer>
    </StyledLayout>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
