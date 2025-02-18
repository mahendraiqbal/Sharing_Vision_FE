"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { fetchPostById, updatePost } from "@/utils/api";

export default function EditPostPage() {
  const router = useRouter();
  const params = useParams();
  const { id } = params;

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("publish");

  useEffect(() => {
    const loadPost = async () => {
      try {
        const post = await fetchPostById(Number(id));
        setTitle(post.title);
        setContent(post.content);
        setCategory(post.category);
        setStatus(post.status); // Load existing status
      } catch (error) {
        console.error("Gagal memuat artikel:", error);
      }
    };
    loadPost();
  }, [id]);

  const handleSubmit = async () => {
    try {
      await updatePost(Number(id), { title, content, category, status });
      router.push("/posts");
    } catch (error) {
      console.error("Gagal mengupdate artikel:", error);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Edit Post</h1>
      <div className="space-y-4">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="Title"
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="Content"
          rows={10}
        />
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="Category"
        />
        <div className="flex space-x-4">
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="p-2 border rounded"
          >
            <option value="publish">Publish</option>
            <option value="draft">Draft</option>
          </select>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
