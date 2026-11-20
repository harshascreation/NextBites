import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-orange-50 px-6 py-12">
      <section className="max-w-lg rounded-2xl bg-white p-8 text-center shadow-sm sm:p-10">
        <p className="text-sm font-bold tracking-widest text-orange-600">
          404 · NOT FOUND
        </p>
        <h1 className="mt-4 text-3xl font-bold text-gray-900">
          This bite is off the menu.
        </h1>
        <p className="mt-3 text-gray-600">
          We couldn&apos;t find that page. Head home to explore the recipes.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-xl bg-orange-600 px-5 py-3 font-semibold text-white transition hover:bg-orange-700"
        >
          Back to home
        </Link>
      </section>
    </main>
  );
}
