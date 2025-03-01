//NEXT-INTL
//https://next-intl.dev/docs/getting-started/app-router/with-i18n-routing
const createNextIntlPlugin = require('next-intl/plugin');
 
const withNextIntl = createNextIntlPlugin();
 
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "**",
          },
          {
            protocol: "http",
            hostname: "**",
          },
        ],
      },
};
 
module.exports = withNextIntl(nextConfig);