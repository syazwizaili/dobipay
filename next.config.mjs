import pwa from "next-pwa";

const withPWA = pwa({
    dest: "public",
    register: true,
    skipWaiting: true,
});

const nextConfig = withPWA({ reactStrictMode: false, images: { unoptimized: true } });

export default nextConfig;
