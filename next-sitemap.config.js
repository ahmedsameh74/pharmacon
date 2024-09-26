/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://your-site-url.com', // Replace with your actual URL
  generateRobotsTxt: true, // Automatically generate a robots.txt file
  generateIndexSitemap: true // Optional: Set to false if you want to disable sitemap index (default is true)
};
