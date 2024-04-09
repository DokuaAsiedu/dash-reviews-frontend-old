/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  distDir: "docs",
  skipTrailingSlashRedirect: true,
  basePath: "/dash-reviews-frontend",
  images: { unoptimized: true },
};

export default nextConfig;
