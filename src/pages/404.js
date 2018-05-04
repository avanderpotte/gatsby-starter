import React from 'react'
import SeoHead from 'Components/SeoHead'
import Config from 'Data/config'

const NotFoundPage = ({ transition }) => (
  <div style={transition && transition.style}>
    <SeoHead
      title="404 Not Found"
      description="This is the 404 not found page"
    />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </div>
)

export default NotFoundPage
