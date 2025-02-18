import { useParams } from "next/navigation";

export default function PreviewPostPage() {
  const params = useParams();
  const { id } = params;

  // Fetch data artikel berdasarkan ID
  const post = {
    id: 1,
    title: "Judul Artikel 1",
    content: "Ini adalah konten artikel.",
    category: "Teknologi",
    status: "published",
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-700 mb-4">{post.content}</p>
      <p className="text-sm text-gray-500">Category: {post.category}</p>
    </div>
  );
}
