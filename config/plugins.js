
module.exports = {
    //
    graphql: {
      config: {
        endpoint: '/graphql',
        shadowCRUD: true,
        playgroundAlways: false,
        depthLimit: 13,
        amountLimit: 100,
        apolloServer: {
          tracing: false,
        },
      },
    },
  };