import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getFeaturedPosts() {
  const posts = await prisma.post.findMany({
    where: {
      featured: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
    take: 4,
  });

  return posts;
}

export async function getAllPosts() {
  const posts = await prisma.post.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });

  return posts;
}

export async function getPostBySlug(slug: string) {
  const post = await prisma.post.findUnique({
    where: {
      slug,
    },
  });

  return post;
} 