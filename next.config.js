/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['assets.aceternity.com', 'aceternity.com','images.unsplash.com'],
  },
  transpilePackages: ['three'],
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig