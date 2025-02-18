"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createPost } from "@/utils/api";

export default function AddPostPage() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("publish"); // Default value.

  const handleSubmit = async () => {
    try {
      await createPost({ title, content, category, status });
      router.push("/posts");
    } catch (error) {
      console.error("Gagal membuat artikel:", error);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Add New Post</h1>
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
