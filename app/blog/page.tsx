import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Blog Posts</h1>
      <div className="space-y-6">
        {posts.map((post) => (
          <article key={post.id} className="border-b pb-6">
            <Link href={`/blog/${post.slug}`}>
              <h2 className="text-2xl font-semibold mb-2 hover:text-blue-600">
                {post.title}
              </h2>
            </Link>
            <p className="text-gray-600 mb-4">{post.excerpt}</p>
            <div className="text-sm text-gray-500">
              {new Date(post.createdAt).toLocaleDateString()}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
} 