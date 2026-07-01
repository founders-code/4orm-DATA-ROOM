/** @type {import('next').NextConfig} */
const nextConfig = {
  // Serve the existing static landing page (public/index.html) at the root "/",
  // so the look is preserved exactly. All other pages live in public/ too.
  async rewrites() {
    return [{ source: '/', destination: '/index.html' }];
  },
};
export default nextConfig;
