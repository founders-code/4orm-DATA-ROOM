/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [{ source: '/', destination: '/index.html' }];
  },
  async headers() {
    return [
      {
        source: '/assets/docs/:path*',
        headers: [
          { key: 'Content-Disposition', value: 'inline' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
        ],
      },
    ];
  },
};
export default nextConfig;
