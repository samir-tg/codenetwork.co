import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ExecPreview from "../components/execPreview"

export const query = graphql`
  {
    allDatoCmsExective(filter: { homePage: { eq: true } }) {
      nodes {
        name
        role
        photo {
          fluid(maxWidth: 200) {
            ...GatsbyDatoCmsFluid
          }
        }
      }
    }
  }
`

const IndexPage = ({ data }) => {
  const execs = data.allDatoCmsExective.nodes

  return (
    <Layout>
      <SEO title="Home" />
      <h1>We Are Code Network</h1>
      <h2>Build anything, as long as it's awsome</h2>
      <p>
        Our members are heavily involved in the local and international startup
        scene. Our goal as an organisation is to help create the best developer
        talent in the world, starting here in Brisbane. We’re based at QUT and
        are expanding to other universities and organisations in the area.
      </p>
      <h1>Our Team</h1>
      <ExecPreview execs={execs} />
    </Layout>
  )
}

export default IndexPage
