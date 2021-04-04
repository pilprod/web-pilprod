module.exports = {
  generateBuildId: async () => {
    // You can, for example, get the latest git commit hash here
    return 'web-pilprod'
  },
  // Start using Webpack 5
  future: {
    webpack5: true,
  },
}