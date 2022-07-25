/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "1iwky71fbek0h7wy43b8a0i2-wpengine.netdna-ssl.com",
      "upload.wikimedia.org",
    ],
  },
};

module.exports = nextConfig;
