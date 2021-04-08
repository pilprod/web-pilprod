module.exports = {
  // Start using Webpack 5
  future: {
    webpack5: true,
  },
  generateBuildId: async () => {
    // You can, for example, get the latest git commit hash here
    return process.env.ROOT_NAME
  },
}