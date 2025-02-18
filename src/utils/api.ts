import { Post } from "@/types/post";

export const fetchPosts = async (): Promise<Post[]> => {
  try {
    const response = await fetch(
      "http://localhost:8080/articles?limit=10&offset=0"
    );
    if (!response.ok) {
      throw new Error("Gagal mengambil data artikel");
    }
    const data = await response.json();
    // console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
};

// Fetch artikel berdasarkan ID
export const fetchPostById = async (id: number): Promise<Post> => {
  try {
    const response = await fetch(`http://localhost:8080/article/${id}`);
    if (!response.ok) {
      throw new Error("Gagal mengambil data artikel");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching post by ID:", error);
    throw error;
  }
};

// Buat artikel baru
export const createPost = async (post: Omit<Post, "id">): Promise<Post> => {
  try {
    const response = await fetch("http://localhost:8080/article", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(post),
    });
    if (!response.ok) {
      throw new Error("Gagal membuat artikel");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error creating post:", error);
    throw error;
  }
};

// Update artikel berdasarkan ID
export const updatePost = async (
  id: number,
  post: Partial<Post>
): Promise<Post> => {
  try {
    const response = await fetch(`http://localhost:8080/article/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(post),
    });
    if (!response.ok) {
      throw new Error("Gagal mengupdate artikel");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error updating post:", error);
    throw error;
  }
};

// Hapus artikel berdasarkan ID
export const deletePost = async (id: number): Promise<void> => {
  try {
    const response = await fetch(`http://localhost:8080/article/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Gagal menghapus artikel");
    }
  } catch (error) {
    console.error("Error deleting post:", error);
    throw error;
  }
};
