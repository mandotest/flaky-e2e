module.exports = {
  // Poke
  projectId: 'ywkod8',

  component: {
    // devServer: {
    //   framework: "create-react-app",
    //   bundler: "webpack",
    // },
    devServer: () => ({ port: [] })
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  retries: {
    runMode: 2,
    openMode: 0
  }
};
