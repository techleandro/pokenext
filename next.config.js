/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [{
      hostname: 'raw.githubusercontent.com',  
    }],
  },
}

module.exports = nextConfig
