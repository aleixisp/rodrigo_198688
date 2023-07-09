/** @type {import('next').NextConfig} */
const dotenv = require('dotenv');
const nextConfig = {
  reactStrictMode: true,
}
module.exports = {
  ...nextConfig,
  env: {
    ...dotenv.config(),
  }
}
