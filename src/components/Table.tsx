import Link from "next/link";

interface Post {
  id: number;
  title: string;
  category: string;
  status: string;
}

interface TableProps {
  posts: Post[];
  onDelete: (id: number) => void; // Tambahkan prop onDelete
}

const Table: React.FC<TableProps> = ({ posts, onDelete }) => {
  return (
    <table className="min-w-full bg-white">
      <thead>
        <tr>
          <th className="py-2 px-4 border-b">Title</th>
          <th className="py-2 px-4 border-b">Category</th>
          <th className="py-2 px-4 border-b">Actions</th>
        </tr>
      </thead>
      <tbody>
        {posts.map((post) => (
          <tr key={post.id}>
            <td className="py-2 px-4 border-b">{post.title}</td>
            <td className="py-2 px-4 border-b">{post.category}</td>
            <td className="py-2 px-4 border-b">
              <Link href={`/posts/edit/${post.id}`}>
                <button className="text-blue-500 hover:text-blue-700">
                  Edit
                </button>
              </Link>
              <button
                onClick={() => onDelete(post.id)} // Panggil onDelete saat tombol Trash diklik
                className="text-red-500 hover:text-red-700 ml-4"
              >
                Trash
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
