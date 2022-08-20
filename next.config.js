var webpack = require('webpack');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: false,
  compress: true,
  images: {
    domains: [
      'directorioseguridadgeneralpublic.s3.amazonaws.com',
      'plazaseguridadgeneralpublic.s3.amazonaws.com',
      'directorioseguridad.dte.gt'
    ],
    deviceSizes: [320, 480, 568, 768, 992, 1200, 1600, 1920, 2048 ],  
  },
  async headers() {
    return [
      {
        source: '/login',
        headers: [            
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
          }            
        ],
        has: [
          {
            type: 'cookie',
            key: 'authorized',
            value: 'true',
          }         
        ]
      },
    ]
  },
  async redirects() {
    return [
      {
        source: '/empresas',
        destination: '/empresas/todos',
        permanent: true,
      },
      {
        source: '/productos',
        destination: '/productos/todos',
        permanent: true,
      },
    ]
  },

}

module.exports = nextConfig





