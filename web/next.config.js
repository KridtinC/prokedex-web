/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.pokemon.com',
        port: '',
        pathname: '/assets/**',
      },
    ],
  }
}

module.exports = nextConfig
