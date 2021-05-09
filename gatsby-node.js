const path = require('path');

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

  exports.createPages = ({graphql, actions}) => {
    const {createPage} = actions;
    const articleTemplate = path.resolve('src/templates/postTemplate.js')

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
    `).then((result) => {
      if(result.errors){
        throw result.errors;
      }

      result.data.allArticle.edges.forEach(article => {
        createPage({
          path:`/article/${article.node.id}`,
          component: articleTemplate,
          context: {articleId: article.node.id}
        })
      })
    })


  }


  