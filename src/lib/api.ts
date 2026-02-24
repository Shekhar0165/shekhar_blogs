const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

export interface BlogPost {
    _id: string;
    title: string;
    slug: string;
    content: string;
    excerpt: string;
    coverImage?: string;
    published: boolean;
    seoKeywords: string[];
    tags: string[];
    author: string;
    readingTime: string;
    metaDescription: string;
    createdAt: string;
    updatedAt: string;
}

export async function getAllPosts(): Promise<BlogPost[]> {
    try {
        const res = await fetch(`${API_URL}/blog?published=true`, {
            next: { revalidate: 60 },
        });
        if (!res.ok) return [];
        return res.json();
    } catch {
        return [];
    }
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
    try {
        const res = await fetch(`${API_URL}/blog/${slug}`, {
            next: { revalidate: 60 },
        });
        if (!res.ok) return null;
        return res.json();
    } catch {
        return null;
    }
}

export async function sendMessage(data: {
    name: string;
    email: string;
    subject: string;
    message: string;
}): Promise<boolean> {
    try {
        const res = await fetch(`${API_URL}/messages`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });
        return res.ok;
    } catch {
        return false;
    }
}
