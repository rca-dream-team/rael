/** @type {import('next').NextConfig} */
const nextConfig = {
   reactStrictMode: false,
   images: {
      formats: ['image/avif', 'image/webp'],
      remotePatterns: [{ hostname: 'images.unsplash.com' }, { hostname: 'cdn.sanity.io' }, { hostname: 'ui-avatars.com' }],
   },
};

module.exports = nextConfig;
