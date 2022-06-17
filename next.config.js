/** @type {import('next').NextConfig} */
//  less setup https://medium.com/@Ibrabdh/next-js-and-antd-setup-with-less-support-29933468f93d
const withLess = require('next-with-less');

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  reactStrictMode: false,
  lessLoaderOptions: {},
};

module.exports = withLess(nextConfig);
