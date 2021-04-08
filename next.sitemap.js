module.exports = {
    // Generate sitemap.xml, robots.txt
    siteUrl: process.env.ROOT_URL,
    generateRobotsTxt: true,
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/contact/', '/api/'],
            },
        ]
    },
}