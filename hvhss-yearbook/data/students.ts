export type Student = {
  slug: string;
  rollNumber: number;
  fullName: string;
  nickname: string;
  photo: string;
  futureDream: string;
  favoriteQuote: string;
  funnyMemory: string;
  bestFriend: string;
  hobbies: string[];
  messageToFriends: string;
  instagram?: string;
};

// Replace these with your real classmates — same shape, real data.
// Photos: drop images into /public/images/students and reference them
// as "/images/students/filename.jpg".
export const students: Student[] = [
  {
    slug: "amal-dev-a",
    rollNumber: 1,
    fullName: "Amal Dev A",
    nickname: "Amu",
    photo: "/images/students/placeholder-1.svg",
    futureDream: "To build things that outlast the people who made them.",
    favoriteQuote: "Stay hungry, stay foolish.",
    funnyMemory:
      "Got the entire class laughing after mixing up 'photosynthesis' and 'photography' during a Biology test.",
    bestFriend: "Rahul Krishna",
    hobbies: ["Coding", "Photography", "Football"],
    messageToFriends:
      "Ten years from now, I hope we're still the kind of friends who can pick up right where we left off.",
    instagram: "https://instagram.com"
  },
  {
    slug: "sara-mariam-thomas",
    rollNumber: 2,
    fullName: "Sara Mariam Thomas",
    nickname: "Sarz",
    photo: "/images/students/placeholder-2.svg",
    futureDream: "To become a doctor who never forgets what it felt like to be scared of the world.",
    favoriteQuote: "Not all those who wander are lost.",
    funnyMemory:
      "Once fell asleep during study hour and woke up mid-sentence, still 'answering' a question from three periods ago.",
    bestFriend: "Devika Nair",
    hobbies: ["Reading", "Sketching", "Badminton"],
    messageToFriends:
      "Thank you for the notes I never took, the secrets you kept, and the laughs I'll never forget.",
    instagram: "https://instagram.com"
  },
  {
    slug: "rahul-krishna",
    rollNumber: 3,
    fullName: "Rahul Krishna",
    nickname: "Rahu",
    photo: "/images/students/placeholder-3.svg",
    futureDream: "To play for the state cricket team, or at least never stop trying.",
    favoriteQuote: "Hard work beats talent when talent doesn't work hard.",
    funnyMemory:
      "Got caught practicing his 'man of the match' speech in the bathroom mirror before Sports Day.",
    bestFriend: "Amal Dev A",
    hobbies: ["Cricket", "Gaming", "Music"],
    messageToFriends:
      "Every single day in that classroom was a memory I didn't know I was making until now.",
  },
  {
    slug: "devika-nair",
    rollNumber: 4,
    fullName: "Devika Nair",
    nickname: "Devu",
    photo: "/images/students/placeholder-4.svg",
    futureDream: "To design buildings that make people feel something.",
    favoriteQuote: "Simplicity is the ultimate sophistication.",
    funnyMemory:
      "Convinced half the class that the school had a secret third floor for an entire week.",
    bestFriend: "Sara Mariam Thomas",
    hobbies: ["Art", "Dance", "Debate"],
    messageToFriends:
      "I used to count down the days to the farewell. Now I'd give anything to have them back.",
    instagram: "https://instagram.com"
  }
];

export function getStudentBySlug(slug: string) {
  return students.find((s) => s.slug === slug);
}
