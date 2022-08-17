
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
          { 
            key: "Access-Control-Allow-Credentials", 
            value: "true" 
          },
          {
             key: "Access-Control-Allow-Origin", value: "*" 
          },
          { 
            key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" 
          },
          { 
            key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" 
          },        
        ],
      },
    ]
  },

 
}