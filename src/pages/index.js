import { graphql, useStaticQuery, Link } from 'gatsby'
import React from 'react'
import ExecPreview from '../components/execPreview'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Img from 'gatsby-image'
import styled from 'styled-components'

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      event: file(relativePath: { eq: "peter.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      execs: allExecsYaml {
        nodes {
          name
          role
          photo {
            childImageSharp {
              fluid(maxWidth: 200) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  const EventsButton = styled(Link)`
    appearance: button;
    background: ${props => props.theme.main.fg};
    width: 150px;
    border-radius: 20px;
    border-style: none;
    text-align: center;
    font-family: sans;
    color: black;
    font-weight: bold;
    line-height: 2.3;
    box-shadow: 0 0 10px;
    text-decoration: none;
    transition: 0.5s;
    margin-bottom: 1rem;

    :hover {
      background: #00ff0a;
    }
  `
  console.log(data)
  const execs = data.execs.nodes
  const event = data.event.childImageSharp
  return (
    <Layout>
      <SEO title="Home" />
      <h1>We Are Code Network</h1>
      <p>
        Code Network is a community of student and professional developers who
        are keenly interested in the startup space and connecting with the tech
        industry. Code Network holds weekly events where members of the industry
        can engage with the student, providing insights into their field of
        expertise. Our goal is to expand what is taught in the classroom with a
        real world context and create professional developers.
      </p>
      <Img
        fluid={event.fluid}
        style={{ width: '70%', margin: '0 auto', marginBottom: '1.5rem' }}
      />

      <h1>Build anything, as long as it&apos;s awesome</h1>
      <p>
        We believe that the key to improving skills in computer science is build
        stuff. This is why we encourage our members to build projects that they
        are personally interested in. In our weekly meeting we do stand up where
        members will share what they have been working on that week, in an
        effort to encourage collaboration. We also have our two major events of
        the year, the industry vs student showdown and our annual winter
        hackathon.
      </p>
      <EventsButton to="events">Events</EventsButton>
      <h1>Our Team</h1>
      <ExecPreview execs={execs} />
    </Layout>
  )
}

export default IndexPage
