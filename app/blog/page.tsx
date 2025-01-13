import { Card } from "@/components/ui/card";
import BlogCard from "@/components/BlogCard";

const posts = [
  {
    title: "The Path to Economic Growth",
    excerpt: "Exploring sustainable development strategies for India's future",
    author: "Dr. Rajesh Kumar",
    date: "2024-03-20",
    category: "Economy"
  },
  {
    title: "Building Social Harmony",
    excerpt: "Understanding the importance of secular values in modern India",
    author: "Priya Singh",
    date: "2024-03-18",
    category: "Society"
  },
  {
    title: "Education for All",
    excerpt: "Breaking down barriers in access to quality education",
    author: "Amit Patel",
    date: "2024-03-15",
    category: "Education"
  }
];

export default function BlogPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-6">Blog</h1>
      <p className="text-lg text-gray-600 mb-8">
        Insights and perspectives on India's development journey
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post, index) => (
          <BlogCard key={index} {...post} />
        ))}
      </div>
    </div>
  );
}