import { hostname } from 'node:os';

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{hostname:"raw.githubusercontent.com"}],
      },
};

export default nextConfig;
