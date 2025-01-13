import Link from "next/link";
import { getFeaturedPosts } from "@/lib/posts";

export default async function Home() {
  const featuredPosts = await getFeaturedPosts();

  return (
    <div className="space-y-8">
      <section className="text-center py-20">
        <h1 className="text-4xl font-bold mb-4">Welcome to PHCodeSage</h1>
        <p className="text-xl text-gray-600">
          Exploring the world of programming, one post at a time
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6">Featured Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredPosts.map((post) => (
            <Link 
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block p-6 border rounded-lg hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <div className="text-sm text-gray-500">
                {new Date(post.date).toLocaleDateString()}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
