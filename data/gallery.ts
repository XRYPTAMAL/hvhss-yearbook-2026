export type GalleryCategory =
  | "Class Photos"
  | "Sports"
  | "Tour"
  | "Arts"
  | "Farewell"
  | "Behind the Scenes";

export type GalleryImage = {
  id: string;
  src: string;
  category: GalleryCategory;
  caption: string;
  height: number; // relative height for masonry variation
};

export const galleryCategories: GalleryCategory[] = [
  "Class Photos",
  "Sports",
  "Tour",
  "Arts",
  "Farewell",
  "Behind the Scenes"
];

// Swap `src` for real photos in /public/images/gallery/*
export const galleryImages: GalleryImage[] = [
  { id: "g1", src: "/images/gallery/placeholder-1.svg", category: "Class Photos", caption: "10B, first day back", height: 320 },
  { id: "g2", src: "/images/gallery/placeholder-2.svg", category: "Sports", caption: "Relay finals", height: 420 },
  { id: "g3", src: "/images/gallery/placeholder-3.svg", category: "Tour", caption: "Sunrise at the hill station", height: 380 },
  { id: "g4", src: "/images/gallery/placeholder-4.svg", category: "Arts", caption: "The mural we painted together", height: 300 },
  { id: "g5", src: "/images/gallery/placeholder-5.svg", category: "Farewell", caption: "Last assembly as 10B", height: 440 },
  { id: "g6", src: "/images/gallery/placeholder-6.svg", category: "Behind the Scenes", caption: "Backstage before Arts Day", height: 340 },
  { id: "g7", src: "/images/gallery/placeholder-7.svg", category: "Class Photos", caption: "The whole batch, finally still", height: 360 },
  { id: "g8", src: "/images/gallery/placeholder-8.svg", category: "Sports", caption: "House trophy, by inches", height: 300 },
  { id: "g9", src: "/images/gallery/placeholder-9.svg", category: "Tour", caption: "The overnight bus ride", height: 400 }
];
