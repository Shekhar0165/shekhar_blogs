'use client';

import { useState, useMemo, useEffect } from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import BlogCard from '@/components/BlogCard';
import AdSlot from '@/components/AdSlot';
import type { BlogPost } from '@/lib/api';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

interface Category {
    _id: string;
    name: string;
    slug: string;
}

export default function BlogListClient({ posts }: { posts: BlogPost[] }) {
    const [search, setSearch] = useState('');
    const [activeTag, setActiveTag] = useState('All');
    const [page, setPage] = useState(1);
    const [categories, setCategories] = useState<Category[]>([]);
    const PER_PAGE = 6;

    // Fetch categories from API
    useEffect(() => {
        fetch(`${API_URL}/categories`)
            .then((res) => res.json())
            .then((data) => setCategories(data))
            .catch(() => setCategories([]));
    }, []);

    const tagNames = ['All', ...categories.map((c) => c.name)];

    const filtered = useMemo(() => {
        let result = posts;
        if (search) {
            result = result.filter((p) =>
                p.title.toLowerCase().includes(search.toLowerCase())
            );
        }
        if (activeTag !== 'All') {
            result = result.filter((p) =>
                p.tags?.some((t) => t.toLowerCase() === activeTag.toLowerCase())
            );
        }
        return result;
    }, [posts, search, activeTag]);

    const totalPages = Math.ceil(filtered.length / PER_PAGE);
    const paginated = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

    return (
        <div>
            {/* Search */}
            <div className="relative mb-10 group">
                <div className="absolute -inset-1 bg-gradient-to-r from-[var(--indigo)] to-cyan-500 rounded-2xl blur opacity-20 group-focus-within:opacity-40 transition duration-500" />
                <div className="relative">
                    <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-[var(--indigo)] transition-colors" />
                    <Input
                        type="text"
                        placeholder="Search articles, topics, or keywords..."
                        value={search}
                        onChange={(e) => { setSearch(e.target.value); setPage(1); }}
                        className="pl-12 h-14 bg-white/70 backdrop-blur-md border-border rounded-xl focus-visible:ring-[var(--indigo)] focus-visible:ring-offset-0 text-base font-medium transition-all"
                    />
                </div>
            </div>

            {/* Tag filters — dynamic from API */}
            <div className="flex flex-wrap items-center gap-3 mb-12">
                <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground mr-2">Filter By:</span>
                {tagNames.map((tag) => (
                    <Button
                        key={tag}
                        variant={activeTag === tag ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => { setActiveTag(tag); setPage(1); }}
                        className={`rounded-xl px-5 h-9 font-bold text-xs uppercase tracking-wider transition-all duration-300 ${activeTag === tag
                                ? 'bg-[var(--indigo)] hover:bg-[var(--indigo)]/90 text-white shadow-lg shadow-[var(--indigo)]/20'
                                : 'bg-white/50 hover:bg-white border-border hover:border-[var(--indigo)]/50'
                            }`}
                    >
                        {tag}
                    </Button>
                ))}
            </div>

            {/* Ad slot */}
            <AdSlot className="mb-8" />

            {/* Posts grid */}
            {paginated.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {paginated.map((post) => (
                        <BlogCard key={post._id} post={post} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-20 rounded-2xl border border-dashed border-border bg-muted/50">
                    <p className="text-lg font-medium">No articles found</p>
                    <p className="text-sm text-muted-foreground mt-1">Try a different search or filter</p>
                </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
                <div className="flex justify-center gap-2 mt-12">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                        <Button
                            key={p}
                            variant={page === p ? 'default' : 'outline'}
                            size="icon"
                            onClick={() => { setPage(p); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                            className={page === p ? 'bg-[var(--indigo)] hover:bg-[var(--indigo)]/90 text-white' : ''}
                        >
                            {p}
                        </Button>
                    ))}
                </div>
            )}
        </div>
    );
}
