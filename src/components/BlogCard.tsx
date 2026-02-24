import Link from 'next/link';
import { Calendar, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { BlogPost } from '@/lib/api';

export default function BlogCard({ post }: { post: BlogPost }) {
    const date = new Date(post.createdAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    });

    return (
        <Link href={`/blog/${post.slug}`} className="group block">
            <Card className="h-full overflow-hidden hover:border-[var(--indigo)]/40 hover:shadow-lg hover:shadow-[var(--indigo)]/5 transition-all duration-300">
                {/* Cover image */}
                {post.coverImage ? (
                    <div className="aspect-video relative overflow-hidden bg-muted">
                        <img
                            src={post.coverImage}
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            loading="lazy"
                        />
                    </div>
                ) : (
                    <div className="aspect-video bg-gradient-to-br from-[var(--indigo)]/10 to-[var(--indigo)]/5 flex items-center justify-center">
                        <span className="text-4xl opacity-30">📝</span>
                    </div>
                )}

                <CardContent className="p-5">
                    {/* Tags */}
                    {post.tags && post.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mb-3">
                            {post.tags.slice(0, 3).map((tag) => (
                                <Badge key={tag} variant="secondary" className="text-[var(--indigo)] bg-[var(--indigo)]/10 hover:bg-[var(--indigo)]/15 border-0 font-medium text-xs">
                                    {tag}
                                </Badge>
                            ))}
                        </div>
                    )}

                    {/* Title */}
                    <h3 className="text-lg font-bold leading-snug mb-2 group-hover:text-[var(--indigo)] transition-colors line-clamp-2">
                        {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                        {post.excerpt}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1.5">
                            <Calendar size={12} />
                            {date}
                        </span>
                        {post.readingTime && (
                            <span className="flex items-center gap-1.5">
                                <Clock size={12} />
                                {post.readingTime}
                            </span>
                        )}
                    </div>
                </CardContent>
            </Card>
        </Link>
    );
}
