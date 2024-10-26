const nextConfig = {
  reactStrictMode: false,
  typescript: {
    ignoreBuildErrors: true,
  },

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
      {
        protocol: "http",
        hostname: "via.placeholder.com",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
