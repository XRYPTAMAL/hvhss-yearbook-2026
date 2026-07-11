import { MetadataRoute } from "next";
import { students } from "@/data/students";

const BASE_URL = "https://your-domain.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/students",
    "/teachers",
    "/events",
    "/gallery",
    "/memories",
    "/videos",
    "/guestbook",
    "/contact"
  ].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date()
  }));

  const studentRoutes = students.map((s) => ({
    url: `${BASE_URL}/students/${s.slug}`,
    lastModified: new Date()
  }));

  return [...staticRoutes, ...studentRoutes];
}
