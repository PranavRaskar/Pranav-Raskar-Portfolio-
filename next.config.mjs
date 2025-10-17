/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // ✅ tells Next to generate static site to /out
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true, // ✅ allows static images without next/image optimization
  },
};

export default nextConfig;
