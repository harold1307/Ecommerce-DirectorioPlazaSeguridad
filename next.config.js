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
            key: "Access-Control-Allow-Methods", 
            value: "GET, HEAD, POST, PUT, DELETE, CONNECT, OPTIONS, TRACE, PATCH" 
          },
          { 
            key: "Access-Control-Allow-Headers", 
            value: "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token,X-Amz-User-Agent,content-type,content-length,date,x-amzn-requestid,access-control-allow-origin,access-control-allow-headers,x-amz-apigw-id,access-control-allow-methods,x-cache,via,x-amz-cf-pop,x-amz-cf-id" 
          },{
            key: 'Access-Control-Expose-Headers',
            value: 'content-type, content-length, date, x-amzn-requestid, access-control-allow-origin, access-control-allow-headers, x-amz-apigw-id, access-control-allow-methods, x-cache, via, x-amz-cf-pop, x-amz-cf-id'
          },{
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          } ,{
            key: 'Access-Control-Allow-Credentials',
            value: 'true'
          } ,{
            key: 'Accept',
            value: '*/*'
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
      //TEMPORALES
      {
        source: '/nosotros',
        destination: '/',
        permanent: false,
      },

    ]
  },

}

module.exports = nextConfig





