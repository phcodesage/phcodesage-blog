import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-4xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-xl font-bold">
            PHCodeSage
          </Link>
          <div className="space-x-4">
            <Link href="/" className="hover:text-gray-300">
              Home
            </Link>
            <Link href="/blog" className="hover:text-gray-300">
              Blog
            </Link>
            <Link href="/blog/new" className="hover:text-gray-300">
              New Post
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 