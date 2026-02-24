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
        <Link href={`/blog/${post.slug}`} className="group block h-full">
            <Card className="h-full overflow-hidden border border-border bg-white/50 backdrop-blur-sm group-hover:bg-white group-hover:border-[var(--indigo)]/50 group-hover:shadow-2xl group-hover:shadow-[var(--indigo)]/10 transition-all duration-500 rounded-2xl flex flex-col">
                {/* Cover image */}
                <div className="aspect-[16/10] relative overflow-hidden bg-muted">
                    {post.coverImage ? (
                        <img
                            src={post.coverImage}
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                            loading="lazy"
                        />
                    ) : (
                        <div className="w-full h-full bg-gradient-to-br from-[var(--indigo)]/10 to-cyan-500/5 flex items-center justify-center">
                            <span className="text-5xl opacity-20 drop-shadow-sm">📝</span>
                        </div>
                    )}
                    {/* Floating Overlay Info */}
                    <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        {post.tags?.slice(0, 1).map((tag) => (
                            <Badge key={tag} className="bg-[var(--indigo)] text-white border-0 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md">
                                {tag}
                            </Badge>
                        ))}
                    </div>
                </div>

                <CardContent className="p-6 flex-1 flex flex-col">
                    {/* Tags */}
                    {post.tags && post.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-4">
                            {post.tags.slice(0, 2).map((tag) => (
                                <span key={tag} className="text-[var(--indigo)] text-[10px] font-bold uppercase tracking-widest">
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    )}

                    {/* Title */}
                    <h3 className="text-xl font-extrabold leading-tight mb-3 group-hover:text-[var(--indigo)] transition-colors line-clamp-2">
                        {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-6 font-medium leading-relaxed flex-1">
                        {post.excerpt}
                    </p>

                    {/* Meta Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-border/50 text-[11px] font-bold uppercase tracking-tighter text-muted-foreground/60">
                        <span className="flex items-center gap-1.5">
                            <Calendar size={12} className="text-[var(--indigo)]" />
                            {date}
                        </span>
                        {post.readingTime && (
                            <span className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-muted/50">
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
