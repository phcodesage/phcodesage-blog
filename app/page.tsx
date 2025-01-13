import Link from "next/link";
import { getFeaturedPosts } from "@/lib/posts";

export default async function Home() {
  const featuredPosts = await getFeaturedPosts();

  return (
    <div className="space-y-12">
      <section className="text-center py-24">
        <h1 className="text-5xl font-bold mb-6 gradient-text">
          Welcome to PHCodeSage
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Exploring the world of programming through thoughtful articles, tutorials, 
          and insights into modern web development.
        </p>
        <div className="mt-8 flex gap-4 justify-center">
          <Link 
            href="/blog" 
            className="bg-green-600 hover:bg-green-500 px-6 py-3 rounded-lg transition-colors text-lg"
          >
            Read Blog
          </Link>
          <Link 
            href="/blog/new" 
            className="border border-green-600 hover:border-green-500 px-6 py-3 rounded-lg transition-colors text-lg"
          >
            Write Post
          </Link>
        </div>
      </section>

      <section className="py-12">
        <h2 className="text-3xl font-bold mb-8 gradient-text">Featured Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredPosts.map((post) => (
            <Link 
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="card-gradient rounded-xl p-6 hover:scale-[1.02] transition-transform"
            >
              <h3 className="text-xl font-semibold mb-3 text-green-400">
                {post.title}
              </h3>
              <p className="text-gray-300 mb-4 line-clamp-2">
                {post.excerpt}
              </p>
              <div className="text-sm text-gray-400">
                {new Date(post.createdAt).toLocaleDateString()}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
