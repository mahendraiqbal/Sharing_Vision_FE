import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-xl font-bold">
          Sharing Vision
        </Link>
        <div className="space-x-4">
          <Link href="/posts" className="text-white hover:text-gray-200">
            All Posts
          </Link>
          <Link href="/posts/add" className="text-white hover:text-gray-200">
            Add New
          </Link>
        </div>
      </div>
    </nav>
  );
}
