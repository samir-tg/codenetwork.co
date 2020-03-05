/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { graphql, useStaticQuery } from 'gatsby'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Header from './header'
import './layout.css'
import SocialIcons from './socialIcons'
import UI from '../ui'

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
      background: ${props => props.theme.main.bg};
    }
    main {
      margin: 0 auto;
      max-width: 960px;
      padding-top: 1.5rem;
      padding-bottom: 4rem;
    }

    .main-container {
      background: ${props => props.theme.content.bg};
      color: ${props => props.theme.content.fg};
    }
    footer {
      width: 100%;
      position: absolute;
      bottom: 0;
      background: ${props => props.theme.main.bg};
      font-weight: bold;

      .info-pane {
        padding: 10px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-wrap: wrap;

        .email {
          color: ${props => props.theme.main.fg};
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
        background: ${props => props.theme.main.fg};
        height: 0.5rem;
      }
    }
  `
  const [theme, setTheme] = useState('light')
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }

  return (
    <ThemeProvider theme={theme === 'light' ? UI.light : UI.dark}>
      <StyledLayout>
        <Header />
        <div className="main-container">
          <main>{children}</main>
        </div>
        <footer onDoubleClick={toggleTheme}>
          <div className="info-pane">
            <a
              className="email"
              href={`mailtod:${data.site.siteMetadata.email}`}
            >
              {data.site.siteMetadata.email}
            </a>
            <SocialIcons className="social-icons" />
          </div>
          <div className="green-line" />
        </footer>
      </StyledLayout>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
