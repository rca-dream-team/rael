/** @type {import('next').NextConfig} */
const nextConfig = {
   reactStrictMode: false,
   images: {
      formats: ['image/avif', 'image/webp'],
      remotePatterns: [
         {
            hostname: 'images.unsplash.com',
         },
      ],
   },
   experimental: {
      typedRoutes: true,
   },
};

module.exports = nextConfig;
