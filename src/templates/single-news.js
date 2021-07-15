import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from '../components/Layout'

const SingleNews = ({ data }) => {
  const { html } = data.markdownRemark;
  const { title, image } = data.markdownRemark.frontmatter;
  const img = getImage(image);

  return (
    <Layout pageTitle="Single News">
      <div>
          <h1>{title}</h1>
          <div>
            <GatsbyImage image={img} alt={title} />
          </div>
          <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query NewsQuery($url: String) {
    markdownRemark(frontmatter: {url: {eq: $url}}) {
      html
      frontmatter {
        title
        url
        image {
          childImageSharp {
            gatsbyImageData(width: 400)
          }
        }
      }
    }
  }
`

export default SingleNews