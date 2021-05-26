// require('dotenv').config({
//   path: '.env'
// })

module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: 'gatsby-firesource',
      options: {
        // credential: require('./src/firebase.json'),
        credential: {
            "type": process.env.FIREBASE_TYPE,
            "project_id": process.env.FIREBASE_PROJECT_ID,
            "private_key_id": process.env.FIREBASE_PRIVATE_KEY_ID,
            "private_key": process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
            "client_email": process.env.FIREBASE_CLIENT_EMAIL,
            "client_id": process.env.FIREBASE_CLIENT_ID,
            "auth_uri": process.env.FIREBASE_AUTH_URI,
            "token_uri": process.env.FIREBASE_TOKEN_URI,
            "auth_provider_x509_cert_url": process.env.FIREBASE_AUTH_PROVIDER_X509_CERT_URL,
            "client_x509_cert_url": process.env.FIREBASE_CLIENT_X509_CERT_URL
        },
        types: [
          {
            type: 'Article',
            collection: 'articles',
            map: doc => ({
              title: doc.title,
              content: doc.content,
              category: doc.category,
              author___NODE: doc.author.id,
              posted: doc.posted.toDate(),
              featured: doc.featured,
              imageUrl: doc.imageUrl,
              author: doc.author
            })
          },
          {
            type: 'Author',
            collection: 'user',
            map: doc => ({
              firstName: doc.firstName,
              lastName:  doc.lastName,
              avatar: doc.avatar,
              about: doc.about,
              occupation: doc.occupation
            })
          }
        ]
      }
    },
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/krypto-life-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-remote-images`,
      options: {
        nodeType: 'Article',
        imagePath: 'imageUrl',
      },
    },
    {
      resolve: `gatsby-plugin-remote-images`,
      options: {
        nodeType: 'Author',
        imagePath: 'avatar',
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
