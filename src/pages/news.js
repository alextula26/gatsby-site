import React from 'react'
import Layout from '../components/Layout'
import { graphql, Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const NewsListPage = ({ data }) => {
  const { nodes } = data.allMarkdownRemark
  return (
    <Layout pageTitle="My Posts">
      <ul>
      {
        nodes.map(node => {
          const { name, descriptions, slug, picture } = node.frontmatter;
          const img = getImage(picture);
          return (<li key={node.frontmatter.url}>
            <GatsbyImage image={img} alt={name} />
            <Link key={node.id} to={`/news/${slug}`}>{name}</Link>
            <p>{descriptions}</p>
          </li> )
        })
      }
      </ul>
    </Layout>
  )
}

export const query = graphql`
  query NewsListPageQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/contents/news/" } }
    ) {
      nodes {
        id
        frontmatter {
          name
          descriptions
          slug
          picture {
            childImageSharp {
              gatsbyImageData(width: 200, formats: AUTO, placeholder: BLURRED)
            }
          }
        }
      }
    }
  }
`
export default NewsListPage