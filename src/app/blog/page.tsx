import type { Metadata } from 'next';
import { getAllPosts } from '@/lib/api';
import BlogListClient from '@/components/BlogListClient';

export const metadata: Metadata = {
    title: 'Blog — All Articles',
    description:
        'Browse all articles about backend engineering, DevOps, Docker, AWS, Node.js, CI/CD, and more.',
    openGraph: {
        title: 'Blog — All Articles | ShekharKashyap.com',
        description: 'Browse all articles about backend engineering, DevOps, Docker, AWS, Node.js.',
    },
};

export default async function BlogPage() {
    const posts = await getAllPosts();

    return (
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="mb-8">
                <h1 className="text-3xl md:text-4xl font-bold mb-2">All Articles</h1>
                <p className="text-[var(--muted-foreground)]">
                    {posts.length} {posts.length === 1 ? 'article' : 'articles'} published
                </p>
            </div>
            <BlogListClient posts={posts} />
        </section>
    );
}
