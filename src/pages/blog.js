import * as React from 'react'
import Layout from './layout'
import { graphql, Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const BlogPage = ({ data }) => {
  const { nodes } = data.allMarkdownRemark
  return (
    <Layout pageTitle="My Blog Posts">
      <ul>
      {
        nodes.map(node => {
          const { category, url, title, image } = node.frontmatter;
          const img = getImage(image);
          return (<li key={node.frontmatter.url}>
            <GatsbyImage image={img} alt={title} />
            <Link key={node.id} to={`/blogs/${category}/${url}`}>{title}</Link>
          </li> )
        })
      }
      </ul>
    </Layout>
  )
}

export const query = graphql`
  query BlogPage {
    allMarkdownRemark {
      nodes {
        id
        frontmatter {
          category
          title
          url
          image {
            childImageSharp {
              gatsbyImageData(width: 200, formats: AUTO, placeholder: BLURRED)
            }
          }
        }
      }
    }
  }
`
export default BlogPage