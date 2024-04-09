/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  distDir: "docs",
  basePath: "/dash-reviews-frontend/",
  images: {
    unoptimized: true
  }
};

export default nextConfig;
