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
    const related = allPosts
        .filter((p) => p._id !== post._id && p.tags?.some((t) => post.tags?.includes(t)))
        .slice(0, 3);

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
        <>
            <ReadingProgress />
            <SyntaxHighlighter />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Back */}
                <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-[var(--indigo)] transition-colors mb-8 group">
                    <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
                    Back to Blog
                </Link>

                {/* Header */}
                <header className="mb-10">
                    {post.tags && post.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-5">
                            {post.tags.map((tag) => (
                                <Badge key={tag} variant="secondary" className="text-[var(--indigo)] bg-[var(--indigo)]/10 border-0">
                                    {tag}
                                </Badge>
                            ))}
                        </div>
                    )}

                    <h1 className="text-3xl sm:text-4xl md:text-[2.75rem] font-extrabold leading-tight mb-5">
                        {post.title}
                    </h1>

                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1.5"><User size={14} />{post.author}</span>
                        <span className="flex items-center gap-1.5"><Calendar size={14} />{date}</span>
                        {post.readingTime && <span className="flex items-center gap-1.5"><Clock size={14} />{post.readingTime}</span>}
                    </div>
                </header>

                {/* Cover */}
                {post.coverImage && (
                    <div className="rounded-xl overflow-hidden mb-10 border border-border">
                        <img src={post.coverImage} alt={post.title} className="w-full aspect-video object-cover" />
                    </div>
                )}

                {/* Content */}
                <div className="prose prose-lg dark:prose-invert max-w-none mb-10" dangerouslySetInnerHTML={{ __html: post.content }} />

                <AdSlot className="my-10" />

                <Separator />

                {/* Share */}
                <div className="py-5">
                    <ShareButtons title={post.title} slug={post.slug} />
                </div>

                <Separator />

                {/* Author card */}
                <Card className="my-10 border-border">
                    <CardContent className="p-6 flex flex-col sm:flex-row items-start gap-5">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[var(--indigo)] to-[var(--indigo-light)] flex items-center justify-center text-white font-bold text-2xl flex-shrink-0 shadow-lg shadow-[var(--indigo)]/20">
                            SK
                        </div>
                        <div>
                            <h3 className="font-bold text-lg">{post.author || 'Shekhar Kashyap'}</h3>
                            <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                                Backend &amp; DevOps Engineer. Building scalable systems with Node.js, AWS, and Docker.
                                Passionate about system design and clean architecture.
                            </p>
                            <div className="flex gap-3 mt-3">
                                <a href="https://github.com/shekhar0165" target="_blank" rel="noopener noreferrer" className="text-xs text-[var(--indigo)] hover:underline font-medium">GitHub</a>
                                <a href="https://linkedin.com/in/shekhar0165" target="_blank" rel="noopener noreferrer" className="text-xs text-[var(--indigo)] hover:underline font-medium">LinkedIn</a>
                                <a href="https://twitter.com/shekhar00165" target="_blank" rel="noopener noreferrer" className="text-xs text-[var(--indigo)] hover:underline font-medium">Twitter</a>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Related posts */}
                {related.length > 0 && (
                    <section>
                        <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {related.map((p) => (
                                <BlogCard key={p._id} post={p} />
                            ))}
                        </div>
                    </section>
                )}
            </article>
        </>
    );
}
