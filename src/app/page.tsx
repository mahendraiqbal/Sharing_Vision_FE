import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="space-y-4">
        <Link href="/posts" className="block text-blue-500 hover:text-blue-700">
          Go to All Posts
        </Link>
        <Link
          href="/posts/add"
          className="block text-blue-500 hover:text-blue-700"
        >
          Add New Post
        </Link>
      </div>
    </div>
  );
}
