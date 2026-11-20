"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-orange-50 px-6 py-12">
      <section
        role="alert"
        className="max-w-lg rounded-2xl bg-white p-8 text-center shadow-sm sm:p-10"
      >
        <h1 className="text-3xl font-bold text-gray-900">
          Something went wrong.
        </h1>
        <p className="mt-3 text-gray-600">
          Please try again. Your recipes will be right here.
        </p>
        <button
          type="button"
          onClick={reset}
          className="mt-8 rounded-xl bg-orange-600 px-5 py-3 font-semibold text-white transition hover:bg-orange-700"
        >
          Try again
        </button>
      </section>
    </main>
  );
}
