
import RecipeGrid from "./components/RecipeGrid";
import { recipes } from "./data/recipes";

export default function Home() {
  return (
    <main className="min-h-screen bg-orange-50 px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <p className="mb-3 font-semibold text-orange-600">
          FRESH IDEAS, EVERY DAY
        </p>

        <h1 className="mb-3 text-4xl font-bold text-gray-900">
          Find your next bite.
        </h1>

        <p className="mb-10 text-gray-600">
          Discover simple and delicious recipes for every craving.
        </p>

        <RecipeGrid recipes={recipes} />
      </div>
    </main>
  );
}
