import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
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

export default nextConfig
