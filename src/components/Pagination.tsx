import Link from "next/link";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages }) => {
  return (
    <div className="flex justify-center space-x-2 mt-6">
      {Array.from({ length: totalPages }, (_, i) => (
        <Link
          key={i + 1}
          href={`/posts?page=${i + 1}`}
          className={`px-4 py-2 rounded ${
            currentPage === i + 1 ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          {i + 1}
        </Link>
      ))}
    </div>
  );
};

export default Pagination;
