
export type Recipe = {
  id: string;
  title: string;
  emoji: string;
  minutes: number;
  difficulty: "Easy" | "Medium" | "Hard";
  cuisine: string;
  ingredients: string[];
  steps: string[];
};

export const recipes: Recipe[] = [
  {
    id: "margherita-pizza",
    title: "Margherita Pizza",
    emoji: "🍕",
    minutes: 35,
    difficulty: "Medium",
    cuisine: "Italian",
    ingredients: [
      "Pizza dough",
      "Tomato sauce",
      "Fresh mozzarella",
      "Fresh basil",
      "Olive oil",
    ],
    steps: [
      "Prepare the pizza dough.",
      "Spread tomato sauce over the dough.",
      "Add mozzarella cheese.",
      "Bake until the crust is golden.",
      "Add fresh basil and serve.",
    ],
  },
  {
    id: "vegetable-pasta",
    title: "Vegetable Pasta",
    emoji: "🍝",
    minutes: 25,
    difficulty: "Easy",
    cuisine: "Italian",
    ingredients: [
      "Pasta",
      "Carrots",
      "Capsicum",
      "Tomatoes",
      "Olive oil",
      "Salt",
    ],
    steps: [
      "Boil the pasta until cooked.",
      "Chop the vegetables.",
      "Heat olive oil in a pan.",
      "Add vegetables and cook.",
      "Mix in the pasta and serve.",
    ],
  },
  {
    id: "chicken-biryani",
    title: "Chicken Biryani",
    emoji: "🍗",
    minutes: 50,
    difficulty: "Hard",
    cuisine: "Indian",
    ingredients: [
      "Chicken",
      "Basmati rice",
      "Onions",
      "Tomatoes",
      "Biryani spices",
      "Yogurt",
    ],
    steps: [
      "Wash and soak the rice.",
      "Prepare the chicken masala with spices.",
      "Cook the rice separately until partially done.",
      "Layer rice and chicken masala in a pot.",
      "Cook together until fully done and serve.",
    ],
  },
  {
    id: "chocolate-cake",
    title: "Chocolate Cake",
    emoji: "🍰",
    minutes: 45,
    difficulty: "Medium",
    cuisine: "Dessert",
    ingredients: [
      "Flour",
      "Cocoa powder",
      "Sugar",
      "Milk",
      "Butter",
      "Baking powder",
    ],
    steps: [
      "Mix flour, cocoa powder, sugar, and baking powder.",
      "Add milk and melted butter.",
      "Mix until the batter is smooth.",
      "Pour into a prepared cake pan.",
      "Bake until fully cooked and allow to cool.",
    ],
  },
  {
    id: "pancakes",
    title: "Pancakes",
    emoji: "🥞",
    minutes: 20,
    difficulty: "Easy",
    cuisine: "American",
    ingredients: [
      "Flour",
      "Milk",
      "Egg",
      "Sugar",
      "Baking powder",
      "Butter",
    ],
    steps: [
      "Mix flour, sugar, and baking powder.",
      "Add milk and egg.",
      "Whisk until smooth.",
      "Cook small portions in a heated pan.",
      "Serve with your favorite topping.",
    ],
  },
  {
    id: "sushi",
    title: "Sushi",
    emoji: "🍣",
    minutes: 40,
    difficulty: "Hard",
    cuisine: "Japanese",
    ingredients: [
      "Sushi rice",
      "Nori sheets",
      "Cucumber",
      "Avocado",
      "Rice vinegar",
    ],
    steps: [
      "Cook the sushi rice.",
      "Season the rice with rice vinegar.",
      "Place a nori sheet on a rolling mat.",
      "Spread rice and add vegetables.",
      "Roll carefully and cut into pieces.",
    ],
  },
];

// Find a recipe using its ID
export function getRecipe(id: string): Recipe | undefined {
  return recipes.find((recipe) => recipe.id === id);
}
