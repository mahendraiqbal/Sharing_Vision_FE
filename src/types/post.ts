export interface Post {
  id: number;
  title: string;
  content: string;
  category: string;
  status: "publish" | "draft" | "trash";
  created_date?: string;
  updated_date?: string;
}
