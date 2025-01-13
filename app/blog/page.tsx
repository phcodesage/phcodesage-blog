import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <div className="py-8">
      <h1 className="text-4xl font-bold mb-12 gradient-text">Blog Posts</h1>
      <div className="space-y-8">
        {posts.map((post) => (
          <article key={post.id} className="card-gradient p-6 rounded-xl">
            <Link href={`/blog/${post.slug}`}>
              <h2 className="text-2xl font-semibold mb-3 text-green-400 hover:text-green-300 transition-colors">
                {post.title}
              </h2>
            </Link>
            <p className="text-gray-300 mb-4">{post.excerpt}</p>
            <div className="text-sm text-gray-400">
              {new Date(post.createdAt).toLocaleDateString()}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
} 