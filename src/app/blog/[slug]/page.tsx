import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Calendar, Clock, ArrowLeft, User } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { getAllPosts, getPostBySlug } from '@/lib/api';
import BlogCard from '@/components/BlogCard';
import ShareButtons from '@/components/ShareButtons';
import ReadingProgress from '@/components/ReadingProgress';
import AdSlot from '@/components/AdSlot';
import SyntaxHighlighter from '@/components/SyntaxHighlighter';

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = await getPostBySlug(slug);
    if (!post) return { title: 'Post Not Found' };

    return {
        title: post.title,
        description: post.metaDescription || post.excerpt,
        keywords: post.seoKeywords,
        alternates: {
            canonical: `/blog/${slug}`,
        },
        openGraph: {
            title: post.title,
            description: post.metaDescription || post.excerpt,
            type: 'article',
            publishedTime: post.createdAt,
            authors: [post.author],
            tags: post.tags,
            images: post.coverImage ? [post.coverImage] : [],
        },
        twitter: {
            card: 'summary_large_image',
            title: post.title,
            description: post.metaDescription || post.excerpt,
            images: post.coverImage ? [post.coverImage] : [],
        },
    };
}

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;
    const post = await getPostBySlug(slug);
    if (!post) notFound();

    const allPosts = await getAllPosts();
    let related = allPosts
        .filter((p) => p._id !== post._id && p.tags?.some((t) => post.tags?.includes(t)))
        .slice(0, 3);

    if (related.length === 0) {
        related = allPosts
            .filter((p) => p._id !== post._id)
            .slice(0, 3);
    }

    const date = new Date(post.createdAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: post.title,
        description: post.metaDescription || post.excerpt,
        author: { '@type': 'Person', name: post.author },
        datePublished: post.createdAt,
        dateModified: post.updatedAt,
        image: post.coverImage || '',
        publisher: { '@type': 'Organization', name: 'ShekharKashyap.com' },
    };

    return (
        <div className="relative min-h-screen">
            <ReadingProgress />
            <SyntaxHighlighter />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            {/* Tech Background */}
            <div className="fixed inset-0 bg-grid opacity-[0.03] -z-10 [mask-image:linear-gradient(to_bottom,white,transparent)]" />
            <div className="fixed inset-0 bg-dot opacity-[0.05] -z-10 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]" />
            <div className="fixed top-0 left-[20%] w-[500px] h-[500px] bg-[var(--indigo)]/5 rounded-full blur-[120px] -z-10 animate-pulse" />

            <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 relative overflow-hidden">
                {/* Back */}
                <Link href="/blog" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-muted-foreground hover:text-[var(--indigo)] transition-all mb-12 group">
                    <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center group-hover:bg-[var(--indigo)]/10 group-hover:text-[var(--indigo)] transition-colors">
                        <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                    </div>
                    Back to Articles
                </Link>

                {/* Header */}
                <header className="mb-12 md:mb-16">
                    {post.tags && post.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-6">
                            {post.tags.map((tag) => (
                                <Badge key={tag} className="bg-[var(--indigo)]/10 text-[var(--indigo)] border-0 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-md">
                                    {tag}
                                </Badge>
                            ))}
                        </div>
                    )}

                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] mb-8 tracking-tighter">
                        {post.title}
                    </h1>

                    <div className="flex flex-wrap items-center gap-y-4 gap-x-8 text-[11px] font-bold uppercase tracking-widest text-muted-foreground/60">
                        <span className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-full bg-[var(--indigo)]/10 flex items-center justify-center text-[var(--indigo)]">
                                <User size={12} />
                            </div>
                            {post.author}
                        </span>
                        <span className="flex items-center gap-2">
                            <Calendar size={14} className="text-[var(--indigo)]/50" />
                            {date}
                        </span>
                        {post.readingTime && (
                            <span className="flex items-center gap-2 px-2 py-1 rounded-md bg-muted/50">
                                <Clock size={14} />
                                {post.readingTime}
                            </span>
                        )}
                    </div>
                </header>

                {/* Cover */}
                {post.coverImage && (
                    <div className="relative aspect-video rounded-3xl overflow-hidden mb-16 border border-border shadow-2xl shadow-indigo-500/5 group">
                        <img
                            src={post.coverImage}
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                )}

                {/* Content */}
                <div className="max-w-none mb-16 relative overflow-hidden break-words">
                    <div
                        className="prose prose-lg sm:prose-xl max-w-none
                        prose-headings:font-black prose-headings:tracking-tighter prose-headings:mb-6 prose-headings:break-words
                        prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:font-medium
                        prose-a:no-underline prose-a:border-b-2 prose-a:border-[var(--indigo)]/20 prose-a:transition-colors hover:prose-a:border-[var(--indigo)]
                        prose-strong:text-foreground prose-strong:font-extrabold
                        prose-code:text-[var(--indigo)] prose-code:bg-[var(--indigo)]/5 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:before:content-none prose-code:after:content-none
                        prose-pre:rounded-2xl prose-pre:border prose-pre:border-border/50 prose-pre:overflow-x-auto
                        prose-img:rounded-3xl prose-img:shadow-lg"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />
                </div>

                <div className="my-16">
                    <AdSlot />
                </div>

                <div className="space-y-12">
                    <Separator className="bg-border/50" />

                    {/* Share & Actions */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 py-4">
                        <ShareButtons title={post.title} slug={post.slug} />
                        <div className="flex items-center gap-4">
                            <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/40">Transmission Log: #{post.slug.slice(0, 8)}</span>
                        </div>
                    </div>

                    <Separator className="bg-border/50" />

                    {/* Author card */}
                    <Card className="my-16 border-border/50 bg-muted/20 backdrop-blur-sm rounded-3xl overflow-hidden relative group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--indigo)]/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-[var(--indigo)]/10 transition-colors" />
                        <CardContent className="p-8 md:p-10 flex flex-col sm:flex-row items-center sm:items-start gap-8 relative">
                            <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br from-[var(--indigo)] to-cyan-500 flex items-center justify-center text-white font-black text-3xl flex-shrink-0 shadow-2xl shadow-indigo-500/20">
                                SK
                            </div>
                            <div className="text-center sm:text-left">
                                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--indigo)] mb-2">Primary Engineer</p>
                                <h3 className="text-2xl font-black mb-3">{post.author || 'Shekhar Kashyap'}</h3>
                                <p className="text-muted-foreground font-medium leading-relaxed mb-6 max-w-lg">
                                    Specializing in high-performance backend architectures and automated DevOps workflows.
                                    Deeply passionate about distributed systems and cloud-native solutions.
                                </p>
                                <div className="flex flex-wrap justify-center sm:justify-start gap-3">
                                    {[
                                        { href: 'https://github.com/shekhar0165', label: 'GitHub' },
                                        { href: 'https://linkedin.com/in/shekhar0165', label: 'LinkedIn' },
                                        { href: 'https://twitter.com/shekhar00165', label: 'Twitter' },
                                    ].map((link) => (
                                        <a
                                            key={link.label}
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-4 py-1.5 rounded-lg bg-white border border-border text-[10px] font-black uppercase tracking-widest hover:border-[var(--indigo)] hover:text-[var(--indigo)] transition-all"
                                        >
                                            {link.label}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Related posts */}
                    {related.length > 0 && (
                        <section className="pt-8">
                            <div className="flex items-center gap-3 mb-10">
                                <span className="w-8 h-1 bg-[var(--indigo)] rounded-full" />
                                <h2 className="text-2xl md:text-3xl font-black tracking-tighter">Related Modules</h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {related.map((p) => (
                                    <BlogCard key={p._id} post={p} />
                                ))}
                            </div>
                        </section>
                    )}
                </div>
            </article>
        </div>
    );
}
