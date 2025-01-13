'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function NewPost() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    excerpt: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        router.push('/blog');
      }
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  return (
    <div className="py-8">
      <h1 className="text-4xl font-bold mb-12 gradient-text">Create New Post</h1>
      <form onSubmit={handleSubmit} className="space-y-6 card-gradient p-8 rounded-xl">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-300 mb-2">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            className="w-full rounded-lg bg-gray-800 border-gray-700 text-gray-200 focus:ring-green-500 focus:border-green-500"
            required
          />
        </div>

        <div>
          <label htmlFor="excerpt" className="block text-sm font-medium text-gray-300 mb-2">
            Excerpt
          </label>
          <input
            type="text"
            id="excerpt"
            value={formData.excerpt}
            onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
            className="w-full rounded-lg bg-gray-800 border-gray-700 text-gray-200 focus:ring-green-500 focus:border-green-500"
          />
        </div>

        <div>
          <label htmlFor="content" className="block text-sm font-medium text-gray-300 mb-2">
            Content
          </label>
          <textarea
            id="content"
            value={formData.content}
            onChange={(e) => setFormData({ ...formData, content: e.target.value })}
            rows={10}
            className="w-full rounded-lg bg-gray-800 border-gray-700 text-gray-200 focus:ring-green-500 focus:border-green-500"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-500 text-white py-3 rounded-lg transition-colors font-medium"
        >
          Create Post
        </button>
      </form>
    </div>
  );
} 