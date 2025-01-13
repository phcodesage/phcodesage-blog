import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { slugify } from '@/lib/utils';

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { title, content, excerpt } = body;

    const post = await prisma.post.create({
      data: {
        title,
        content,
        excerpt,
        slug: slugify(title),
      },
    });

    return NextResponse.json(post);
  } catch (error) {
    return NextResponse.json(
      { error: 'Error creating post' },
      { status: 500 }
    );
  }
} 