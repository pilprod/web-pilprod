module.exports = {
    // Using Webpack 5
    future: {
        webpack5: true,
    },
    generateBuildId: async() => {
        // You can, for example, get the latest git commit hash here
        return process.env.NEXT_PUBLIC_PROJECT_NAME
    },
}