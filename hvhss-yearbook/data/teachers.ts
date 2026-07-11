export type Teacher = {
  name: string;
  subject: string;
  yearsOfTeaching: number;
  photo: string;
  message: string;
};

export const teachers: Teacher[] = [
  {
    name: "Mrs. Lakshmi Menon",
    subject: "Class Teacher & Mathematics",
    yearsOfTeaching: 14,
    photo: "/images/students/placeholder-teacher-1.svg",
    message:
      "Watching this batch grow from nervous ninth-graders into the young adults leaving today has been one of the privileges of my career. Go be extraordinary."
  },
  {
    name: "Mr. Suresh Pillai",
    subject: "Physics",
    yearsOfTeaching: 21,
    photo: "/images/students/placeholder-teacher-2.svg",
    message:
      "You asked more questions than any batch I've taught — some about physics, most not. Never stop asking them."
  },
  {
    name: "Ms. Anitha George",
    subject: "English",
    yearsOfTeaching: 9,
    photo: "/images/students/placeholder-teacher-3.svg",
    message:
      "You gave me some of the best essays — and some of the best excuses — I've ever read. Carry your voice with you wherever you go."
  },
  {
    name: "Mr. Vinod Kumar",
    subject: "Physical Education",
    yearsOfTeaching: 17,
    photo: "/images/students/placeholder-teacher-4.svg",
    message:
      "Sports Day 2025 was chaos. Beautiful, unforgettable chaos. Thank you for that trophy shelf you helped fill."
  }
];
