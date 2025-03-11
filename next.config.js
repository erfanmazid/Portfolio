/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // برای حل مشکل نمایش تصاویر در GitHub Pages
  },
};

export default nextConfig;
