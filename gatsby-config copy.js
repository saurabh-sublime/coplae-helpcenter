module.exports = {
  // Since `gatsby-plugin-typescript` is automatically included in Gatsby you
  // don't need to define it here (just if you need to change the options)
  plugins: [
    /*     {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `owpw7yrsedz8`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: `RfQtnDBMVUlO2c5PN6VDsmKCZxl4a3lfCLWZ3xlGxWs`,
      },
    }, */
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: 'http://localhost:1337',
        contentTypes: [
          // List of the Content Types you want to be able to request from Gatsby.
          'helpCenterPosts',
        ],
        queryLimit: 1000,
      },
    },
  ],
};
