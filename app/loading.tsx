export default function Loading() {
  return (
    <main
      aria-busy="true"
      aria-live="polite"
      className="min-h-screen bg-orange-50 px-6 py-12"
    >
      <div className="mx-auto max-w-7xl">
        <p className="mb-3 font-semibold text-orange-600">NEXTBITES</p>
        <div
          aria-hidden="true"
          className="mb-10 h-10 w-72 animate-pulse rounded-lg bg-orange-100"
        />
        <div
          aria-hidden="true"
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {Array.from({ length: 3 }, (_, index) => (
            <div
              key={index}
              className="h-64 animate-pulse rounded-2xl bg-white shadow-sm"
            />
          ))}
        </div>
        <p className="sr-only">Loading recipes...</p>
      </div>
    </main>
  );
}
