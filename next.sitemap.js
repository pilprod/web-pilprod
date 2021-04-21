module.exports = {
    // Generate sitemap.xml, robots.txt
    siteUrl: process.env.NEXT_PUBLIC_PROJECT_URL,
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