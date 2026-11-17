import type { NextConfig } from "next";
import { withPayload } from "@payloadcms/next/withPayload";

const nextConfig: NextConfig = {
  images: {
    // Payload serves uploaded media from /api/media/file/* (local) or the R2 public URL (production).
    localPatterns: [{ pathname: "/api/media/file/**" }, { pathname: "/images/**" }, { pathname: "/*.png" }],
    remotePatterns: process.env.S3_PUBLIC_URL ? [new URL(`${process.env.S3_PUBLIC_URL.replace(/\/$/, "")}/**`)] : [],
  },
};

export default withPayload(nextConfig, { devBundleServerPackages: false });
