import React from 'react'
import SeoHead from 'Components/SeoHead'
import Link from 'gatsby-link'
import { Helmet } from 'react-helmet'
import Config from 'Data/config'

const IndexPage = ({ transition, data }) => {
  const posts = data.allPostsJson.edges
  return (
    <div style={transition && transition.style}>
      <SeoHead
        title={Config.siteTitle}
        path="/"
      />
      <h1>Yo !</h1>
      <p>Check out those greats posts :</p>
      <ul>
      {
        posts.map( (post, index) => (
          <li key={`post-item-${index}`}>
            <Link className="t-link" to={`/posts/${post.node.slug}`}>{post.node.title}</Link>
          </li>
        ) )
      }
      </ul>
    </div>
  )
}

export default IndexPage

export const pageQuery = graphql`
query IndexQuery {
  allPostsJson(limit: 10) {
    edges {
      node {
        slug,
        title
      }
    }
  }
}
`
