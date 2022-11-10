/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname:"**"
        // hostname: "resources.workable.com","blog.clicksend.com","gocrm.io","assets-global.website-files.com",
        // port: '',
      },
    ],
  },
}

module.exports = nextConfig
