
import Link from "next/link";
import type { Recipe } from "../data/recipes";

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <Link
      href={`/recipe/${recipe.id}`}
      className="block overflow-hidden rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
    >
      <article>
        <div className="mb-3 text-6xl">
          {recipe.emoji}
        </div>

        <h2 className="text-xl font-bold text-gray-900">
          {recipe.title}
        </h2>

        <p className="mt-2 text-gray-600">
          ⏱ {recipe.minutes} minutes · {recipe.difficulty}
        </p>

        <p className="text-gray-500">
          {recipe.cuisine}
        </p>

        <p className="mt-4 font-semibold text-orange-600">
          View Recipe →
        </p>
      </article>
    </Link>
  );
}
