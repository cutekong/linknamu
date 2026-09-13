import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // 외부 사이트 이미지는 여기에 허락된 주소만 불러올 수 있습니다.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
        port: "",
        pathname: "/**",
        search: "",
      },
    ],
  },
};

export default nextConfig;
