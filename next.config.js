/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  basePath: '/mapit',  // Add the basePath here (replace 'yourrepository' with your actual GitHub repo name)
  assetPrefix: '/mapit',
};

module.exports = nextConfig;
