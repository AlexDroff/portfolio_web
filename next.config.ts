import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    localPatterns: [
      {
        pathname: "/projects/**",
        search: "?v=3",
      },
    ],
  },
};

export default nextConfig;
