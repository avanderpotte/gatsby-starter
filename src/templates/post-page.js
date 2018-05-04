import React from 'react'
import Link from 'gatsby-link'
import SeoHead from 'Components/SeoHead'

const PostPage = ( { data, transition, pathContext, location } ) => {
  const post = data.postsJson
  return (
    <div style={transition && transition.style}>
      <SeoHead
        title={`Post ${pathContext.index}`}
        description={`This is the post ${pathContext.index}`}
        path={location.pathname}
        isPost
      />
      <h1 className="u-text-transform-u">{post.title}</h1>
      <p dangerouslySetInnerHTML={{ __html: post.body }}/>
      <Link className="t-link" to={`/posts/${pathContext.prev}`}>Prev</Link> | <Link className="t-link" to={`/posts/${pathContext.next}`}>Next</Link>
    </div>
  )
}

export default PostPage

export const pageQuery = graphql`
  query PostPage($slug: String!) {
    postsJson(slug: { eq: $slug }) {
      title,
      body
    }
  }
`
