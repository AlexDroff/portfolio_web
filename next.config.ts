import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    localPatterns: [
      {
        pathname: "/projects/**",
      },
      {
        pathname: "/projects cards/**",
      },
      {
        pathname: "/projects%20cards/**",
      },
    ],
  },
};

export default nextConfig;
