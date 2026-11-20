
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="border-b border-orange-100 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-2xl font-extrabold text-orange-600">
          NextBites 🍴
        </Link>

        <span className="text-sm font-medium text-gray-600">
          Discover recipes
        </span>
      </div>
    </nav>
  );
}
