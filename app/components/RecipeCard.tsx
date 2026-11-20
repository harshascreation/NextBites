import type { Recipe } from "../data/recipes";

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <article className="rounded-2xl border bg-white p-5 shadow-sm">
      <div className="mb-3 text-6xl">{recipe.emoji}</div>
      <h2 className="text-xl font-bold">{recipe.title}</h2>
      <p className="mt-2 text-gray-600">
        {recipe.minutes} minutes · {recipe.difficulty}
      </p>
      <p className="text-gray-500">{recipe.cuisine}</p>
    </article>
  );
}