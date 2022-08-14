/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,


  async headers() {
    return [
      {
        source: '/login',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: '*',
          },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT',
          },
          {
            key: 'Access-Control-Allow-Headers',
            value: 'set-cookie, X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
          }
        ],
      },
    ]
  },




  
  async redirects() {
    return [
      {
        source: '/productos',
        destination: '/productos/todos',
        permanent: true,
      },
    ]
  }  
}






module.exports = nextConfig
