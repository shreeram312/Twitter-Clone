const nextConfig = {
  reactStrictMode: false,

  env: {
    NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: "dkrrut1cp",
    NEXT_PUBLIC_CLOUDINARY_PRESET_NAME: "shree-image",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.clerk.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "dfstudio-d420.kxcdn.com",
        pathname: "**",
      },
      {
        protocol: "http",
        hostname: "res.cloudinary.com",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
