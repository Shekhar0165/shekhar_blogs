import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getAllPosts } from '@/lib/api';
import BlogCard from '@/components/BlogCard';
import NewsletterForm from '@/components/NewsletterForm';

export default async function HomePage() {
  const posts = await getAllPosts();
  const featured = posts.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--indigo)]/[0.04] via-transparent to-transparent" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[var(--indigo)]/[0.06] rounded-full blur-3xl" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36 relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--indigo)]/10 text-[var(--indigo)] text-sm font-medium mb-8 border border-[var(--indigo)]/20">
              <span className="w-2 h-2 rounded-full bg-[var(--indigo)] animate-pulse" />
              Backend &amp; DevOps Blog
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6">
              Backend &amp; DevOps{' '}
              <span className="bg-gradient-to-r from-[var(--indigo)] to-[var(--indigo-light)] bg-clip-text text-transparent">
                Insights
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-2xl">
              Deep dives into Docker, AWS, Node.js, system design, CI/CD pipelines, and everything
              backend. Written by a developer, for developers.
            </p>
            <Button asChild size="lg" className="bg-[var(--indigo)] hover:bg-[var(--indigo)]/90 text-white shadow-lg shadow-[var(--indigo)]/20 px-8 h-12 text-base font-semibold">
              <Link href="/blog">
                Read the Blog
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Latest Articles</h2>
            <p className="text-muted-foreground mt-1">Fresh content from the blog</p>
          </div>
          <Button variant="ghost" asChild className="text-[var(--indigo)] hover:text-[var(--indigo)] hover:bg-[var(--indigo)]/10">
            <Link href="/blog">
              View all <ArrowRight size={14} className="ml-1" />
            </Link>
          </Button>
        </div>

        {featured.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((post) => (
              <BlogCard key={post._id} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 rounded-2xl border border-dashed border-border bg-muted/50">
            <p className="text-lg mb-2 font-medium">No posts yet</p>
            <p className="text-sm text-muted-foreground">Create your first blog post from the admin panel!</p>
          </div>
        )}
      </section>

      {/* Newsletter */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="rounded-2xl bg-gradient-to-br from-[var(--indigo)]/[0.08] via-muted/50 to-transparent border border-border p-8 md:p-14 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Stay Updated</h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Get notified when I publish new articles about backend engineering and DevOps.
          </p>
          <NewsletterForm />
        </div>
      </section>
    </>
  );
}
