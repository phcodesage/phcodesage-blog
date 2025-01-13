import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="nav-gradient sticky top-0 z-50 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold gradient-text">
            PHCodeSage
          </Link>
          <div className="space-x-6">
            <Link href="/" className="hover:text-green-400 transition-colors">
              Home
            </Link>
            <Link href="/blog" className="hover:text-green-400 transition-colors">
              Blog
            </Link>
            <Link 
              href="/blog/new" 
              className="bg-green-600 hover:bg-green-500 px-4 py-2 rounded-lg transition-colors"
            >
              New Post
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 