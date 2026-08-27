export type YearbookEvent = {
  title: string;
  date: string;
  description: string;
  image?: string;
  images?: string[];
};

export const events: YearbookEvent[] = [
  {
    title: "Educational Tour",
    date: "November 2025",
    description:
      "Three days, one overnight bus, and enough inside jokes to last the rest of our lives.",
    image: "/images/gallery/tour/tour-1.jpg",
    images: []
  },
  {
    title: "Onam Days",
    date: "October 2025",
    description:
      "Celebrating tradition, colors, and the spirit of togetherness with our school family.",
    image: "https://drive.google.com/uc?export=view&id=1mkZdlLIDmuIBa9tnV8L9NvfpnaIQNljG",
    images: [
      "https://drive.google.com/uc?export=view&id=1mkZdlLIDmuIBa9tnV8L9NvfpnaIQNljG"
    ]
  },
  {
    title: "Farewell",
    date: "March 2026",
    description:
      "Speeches nobody could finish without their voice breaking, and a class photo none of us will delete.",
    image: "/images/gallery/farewell/farewell-1.jpg",
    images: []
  }
];
