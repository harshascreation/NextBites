
"use client";

import { useState } from "react";
import RecipeCard from "./RecipeCard";
import type { Recipe } from "../data/recipes";

export default function RecipeGrid({
  recipes,
}: {
  recipes: Recipe[];
}) {
  const [query, setQuery] = useState("");

  const visible = recipes.filter((recipe) =>
    (recipe.title + " " + recipe.cuisine)
      .toLowerCase()
      .includes(query.toLowerCase())
  );

  return (
    <section>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search recipes or cuisines..."
        className="mb-8 w-full rounded-xl border border-orange-200 bg-white px-5 py-4 text-gray-800 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
      />

      {visible.length === 0 ? (
        <p className="rounded-xl bg-white p-6 text-center text-gray-600">
          No recipes match &quot;{query}&quot;. Try another search.
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      )}
    </section>
  );
}
