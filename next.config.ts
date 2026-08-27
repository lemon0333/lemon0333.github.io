import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',           // 정적 사이트로 내보내기
  trailingSlash: true,        // GitHub Pages: /portfolio/ 같은 슬래시 경로도 동작
  images: { unoptimized: true },
};

export default nextConfig;
