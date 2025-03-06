//NEXT-COMPOSE-PLUGINS: Used to use multiple plugins
//https://www.npmjs.com/package/next-compose-plugins
const withPlugins = require('next-compose-plugins');
//NEXT-MDX
//https://nextjs.org/docs/pages/building-your-application/configuring/mdx
import createMDX from '@next/mdx';
const withMDX = createMDX();
//NEXT-INTL
//https://next-intl.dev/docs/getting-started/app-router/with-i18n-routing
const createNextIntlPlugin = require('next-intl/plugin');
const withNextIntl = createNextIntlPlugin();

 
/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
    images: {
        remotePatterns: [
            { protocol: 'https', hostname: '**' },
            { protocol: 'http', hostname: '**' },
        ],
    }
};
 
module.exports = withPlugins([withNextIntl,withMDX],nextConfig);