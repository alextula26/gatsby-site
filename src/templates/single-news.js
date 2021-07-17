import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from '../components/Layout'

const SingleNews = ({ data }) => {
  const { html } = data.markdownRemark;
  const { name, picture } = data.markdownRemark.frontmatter;
  const img = getImage(picture);

  return (
    <Layout pageTitle="Single News">
      <div>
          <h1>{name}</h1>
          <div>
            <GatsbyImage image={img} alt={name} />
          </div>
          <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query NewsQuery($slug: String) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      html
      frontmatter {
        name
        slug
        picture {
          childImageSharp {
            gatsbyImageData(width: 400)
          }
        }
      }
    }
  }
`

export default SingleNews