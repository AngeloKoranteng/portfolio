import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "",
    "/diensten",
    "/portfolio",
    "/werkwijze",
    "/over",
    "/technologien",
    "/contact",
    "/privacy",
  ].map((path) => ({
    url: `https://devsoftweb.nl${path}`,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
