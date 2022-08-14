/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: false,

  async redirects() {
    return [
      {
        source: '/productos',
        destination: '/productos/todos',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
