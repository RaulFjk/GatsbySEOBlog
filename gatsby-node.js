const path = require("path")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const articleTemplate = path.resolve("src/templates/postTemplate.js")
  const editPostTemplate = path.resolve("src/templates/editPostTemplate.js")

  return graphql(`
    {
      allArticle {
        edges {
          node {
            id
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }

    result.data.allArticle.edges.forEach(article => {
      createPage({
        path: `/article/${article.node.id}`,
        component: articleTemplate,
        context: { articleId: article.node.id },
      })

      createPage({
        path: `/article/edit/${article.node.id}`,
        component: editPostTemplate,
        context: { articleId: article.node.id },
      })
    })
  })
}


exports.onCreateWebpackConfig = ({ actions, stage }) => {
  if (stage === "develop-html" || stage === "build-html") {
    actions.setWebpackConfig({
      resolve: {
        mainFields: ["main"],
      },
    })
  } else {
    actions.setWebpackConfig({
      resolve: {
        mainFields: ["browser", "module", "main"],
      },
    })
  }
}

