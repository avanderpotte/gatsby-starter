const Promise = require('bluebird')
const path = require('path')
const slash = require('slash')


exports.modifyWebpackConfig = ({ config, _stage }) => {
  return config.merge({
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        Components: path.resolve(__dirname, 'src/components/'),
        Data: path.resolve(__dirname, 'data')
      },
    },
  })
}

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  return new Promise(( resolve, reject ) => {
    resolve(
      graphql(
        `
          {
            allPostsJson(limit: 10) {
              edges {
                node {
                  slug
                }
              }
            }
          }
        `
      ).then( result => {
        if ( result.errors ) reject( new Error( result.errors ) )

        const postTemplate = path.resolve(`src/templates/post-page.js`)
        const posts = result.data.allPostsJson.edges
        posts.forEach( ( edge, index ) => {
          const last = posts.length - 1
          const prev = index === 0 ? posts[last].node.slug : posts[index - 1].node.slug
          const next = index === last ? posts[0].node.slug : posts[index + 1].node.slug
          createPage({
            path: `/posts/${edge.node.slug}/`,
            component: slash(postTemplate),
            context: {
              slug: edge.node.slug,
              index,
              prev,
              next
            }
          })
        } )

        return
      })
    )
  })
}
