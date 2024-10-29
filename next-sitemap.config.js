/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://prathampatel.vercel.app",
  generateRobotsTxt: true, // Creates robots.txt for you
  sitemapSize: 7000, // Optional; adjust according to your site's page count
};
