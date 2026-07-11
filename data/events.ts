export type YearbookEvent = {
  title: string;
  date: string;
  description: string;
  image?: string;
};

export const events: YearbookEvent[] = [
  {
    title: "School Reopening",
    date: "June 2025",
    description:
      "New uniforms, familiar faces, and the quiet realization that this was our last first day of school.",
    image: "/images/gallery/placeholder-event-1.svg"
  },
  {
    title: "Sports Day",
    date: "August 2025",
    description:
      "Relay races won and lost by inches, a house trophy that came down to the final event, and sunburn that lasted a week.",
    image: "/images/gallery/placeholder-event-2.svg"
  },
  {
    title: "Educational Tour",
    date: "November 2025",
    description:
      "Three days, one overnight bus, and enough inside jokes to last the rest of our lives.",
    image: "/images/gallery/placeholder-event-3.svg"
  },
  {
    title: "Arts Day",
    date: "January 2026",
    description:
      "The year the quiet kid from the back row brought the whole auditorium to its feet.",
    image: "/images/gallery/placeholder-event-4.svg"
  },
  {
    title: "Farewell",
    date: "March 2026",
    description:
      "Speeches nobody could finish without their voice breaking, and a class photo none of us will delete.",
    image: "/images/gallery/placeholder-event-5.svg"
  },
  {
    title: "SSLC Examinations",
    date: "March 2026",
    description:
      "Ten years of school, coming down to a few weeks — and the beginning of everything after.",
    image: "/images/gallery/placeholder-event-6.svg"
  }
];
