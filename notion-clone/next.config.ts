import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

// https://github.com/vercel/next.js/tree/canary/examples/with-docker
module.exports = {
  // ... rest of the configuration.
  // output: "standalone",     // Docker
  // output: "export",     // GH Actions
  output: process.env.NEXT_BUILD_MODE === 'gh-actions' ? 'export' : 'standalone',
};

export default nextConfig;
