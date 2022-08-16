/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: false,
  images: {
    domains: ['directorioseguridadgeneralpublic.s3.amazonaws.com'],  
  }
}
module.exports = nextConfig