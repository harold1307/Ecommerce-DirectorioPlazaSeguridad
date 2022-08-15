/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: false,

  images: {
    domains: ['directorioseguridadgeneralpublic.s3.amazonaws.com'],
  
  },
  async headers() {
    return [
      {
        source: '/login',
        headers: [
          {
            key: 'Referrer-Policy',
            value: 'unsafe-url'
          },          
        ],
      },
    ]
  },

 
}

module.exports = nextConfig
