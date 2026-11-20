
import { notFound } from "next/navigation";
import Link from "next/link";
import { getRecipe, recipes } from "../../data/recipes";

export function generateStaticParams() {
  return recipes.map((recipe) => ({
    id: recipe.id,
  }));
}

export default async function RecipePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const recipe = getRecipe(id);

  if (!recipe) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-orange-50 px-6 py-12">
      <div className="mx-auto max-w-4xl">

        <Link
          href="/"
          className="mb-8 inline-block font-semibold text-orange-600 hover:underline"
        >
          ← Back to recipes
        </Link>

        <div className="rounded-2xl bg-white p-8 shadow-sm">

          <div className="mb-6 text-8xl">
            {recipe.emoji}
          </div>

          <h1 className="mb-4 text-4xl font-bold text-gray-900">
            {recipe.title}
          </h1>

          <div className="mb-8 flex flex-wrap gap-4 text-gray-600">
            <span>⏱ {recipe.minutes} minutes</span>
            <span>Difficulty: {recipe.difficulty}</span>
            <span>Cuisine: {recipe.cuisine}</span>
          </div>

          <hr className="mb-8" />

          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            Ingredients
          </h2>

          <ul className="mb-8 list-disc space-y-2 pl-6 text-gray-700">
            {recipe.ingredients.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            Preparation Steps
          </h2>

          <ol className="list-decimal space-y-3 pl-6 text-gray-700">
            {recipe.steps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>

        </div>
      </div>
    </main>
  );
}
