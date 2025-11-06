/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    typedRoutes: true,
    optimizePackageImports: ["recharts", "framer-motion", "lucide-react"],
  },
};

export default nextConfig;

