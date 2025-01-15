import { withNextVideo } from "next-video/process";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "mwlmwgpxlvhfnanhmohu.supabase.co",
      },
    ],
  },
};

export default withNextVideo(nextConfig);
