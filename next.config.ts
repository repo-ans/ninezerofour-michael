import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    // The old /crlab address keeps working for anyone who already has the link.
    return [
      { source: "/crlab", destination: "/hair-loss-solutions", permanent: true },
    ];
  },
};

export default nextConfig;
