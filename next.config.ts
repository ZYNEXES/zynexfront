import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true, // ⚠️ Dangerous! Allows builds with TS errors
  },

};

export default nextConfig;
