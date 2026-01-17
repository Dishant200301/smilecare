export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  blockquote?: string;
  image: string;
  categories: string[];
  date: {
    day: string;
    month: string;
    year: string;
  };
  author: string;
}
