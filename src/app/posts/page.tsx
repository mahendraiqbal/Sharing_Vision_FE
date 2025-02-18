"use client"; // Karena menggunakan useState dan useEffect

import { useState, useEffect } from "react";
import Table from "../../components/Table";
import { fetchPosts, deletePost } from "../../utils/api";
import { Post } from "@/types/post";

const PostsPage = () => {
  const [activeTab, setActiveTab] = useState<
    "published" | "drafts" | "trashed"
  >("published");
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const data = await fetchPosts();
        console.log("Data dari API (sebelum normalisasi):", data); // Debugging
        // Normalisasi data
        const normalizedData = data.map((post) => ({
          ...post,
          status: post.status.toLowerCase(), // Ubah ke lowercase
        }));
        setPosts(normalizedData);
        console.log("Data dari API (setelah normalisasi):", normalizedData); // Debugging
      } catch (error) {
        console.error("Gagal memuat artikel:", error);
      }
    };
    loadPosts();
  }, []);

  const filteredPosts = posts.filter((post) => {
    if (activeTab === "published")
      return post.status === "published" || post.status === "publish";
    if (activeTab === "drafts")
      return post.status === "drafts" || post.status === "draft";
    if (activeTab === "trashed")
      return post.status === "trashed" || post.status === "trash";
    return false;
  });

  const handleDelete = async (id: number) => {
    try {
      await deletePost(id);
      setPosts((prevPosts) =>
        prevPosts.map((post) =>
          post.id === id ? { ...post, status: "trashed" } : post
        )
      );
      console.log("Artikel berhasil di-trash");
    } catch (error) {
      console.error("Gagal menghapus artikel:", error);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">All Posts</h1>
      <div className="flex space-x-4 mb-6">
        <button
          onClick={() => setActiveTab("published")}
          className={`px-4 py-2 rounded ${
            activeTab === "published" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          Published
        </button>
        <button
          onClick={() => setActiveTab("drafts")}
          className={`px-4 py-2 rounded ${
            activeTab === "drafts" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          Drafts
        </button>
        <button
          onClick={() => setActiveTab("trashed")}
          className={`px-4 py-2 rounded ${
            activeTab === "trashed" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          Trashed
        </button>
      </div>
      <Table posts={filteredPosts} onDelete={handleDelete} />
    </div>
  );
};

export default PostsPage;
