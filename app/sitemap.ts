import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://billicious.vercel.app",
      lastModified: new Date(),
    },
  ];
}
