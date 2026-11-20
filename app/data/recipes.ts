
export type Recipe = {
  id: string;
  title: string;
  emoji: string;
  minutes: number;
  difficulty: "Easy" | "Medium" | "Hard";
  cuisine: string;
};

export const recipes: Recipe[] = [
  {
    id: "margherita-pizza",
    title: "Margherita Pizza",
    emoji: "🍕",
    minutes: 35,
    difficulty: "Medium",
    cuisine: "Italian",
  },
  {
    id: "vegetable-pasta",
    title: "Vegetable Pasta",
    emoji: "🍝",
    minutes: 25,
    difficulty: "Easy",
    cuisine: "Italian",
  },
  {
    id: "chicken-biryani",
    title: "Chicken Biryani",
    emoji: "🍗",
    minutes: 50,
    difficulty: "Hard",
    cuisine: "Indian",
  },
  {
    id: "chocolate-cake",
    title: "Chocolate Cake",
    emoji: "🍰",
    minutes: 45,
    difficulty: "Medium",
    cuisine: "Dessert",
  },
  {
    id: "pancakes",
    title: "Pancakes",
    emoji: "🥞",
    minutes: 20,
    difficulty: "Easy",
    cuisine: "American",
  },
  {
    id: "sushi",
    title: "Sushi",
    emoji: "🍣",
    minutes: 40,
    difficulty: "Hard",
    cuisine: "Japanese",
  },
];
