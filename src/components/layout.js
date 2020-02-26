/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          email
        }
      }
    }
  `)

  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
      }}
    >
      <Header siteTitle={data.site.siteMetadata.title} />
      <main
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          paddingBottom: "3rem" /* Footer height */,

          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        {children}
      </main>
      <footer
        style={{
          width: "100%",
          position: "absolute",
          bottom: 0,
        }}
        >
        <div
          style={{
            background: "#0d0f2e",
            padding: `0.5rem 1.0875rem`,
            color: "#01d609",
            fontWeight: "bold",
            fontSize: 30,
          }}
        >
          <a style={{
            color: 'inherit',
            textDecoration: 'none'
          }} href={`mailtod:${data.site.siteMetadata.email}`}>{data.site.siteMetadata.email}</a>
        </div>
        <div
          style={{
            background: "#01d609",
            height: '0.5rem',
          }}
        />
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
