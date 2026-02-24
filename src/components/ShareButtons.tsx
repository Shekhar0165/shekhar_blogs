'use client';

import { useEffect, useState } from 'react';
import { Twitter, Linkedin, Link2, Check } from 'lucide-react';

export default function ShareButtons({ title, slug }: { title: string; slug: string }) {
    const [copied, setCopied] = useState(false);
    const [url, setUrl] = useState('');

    useEffect(() => {
        setUrl(window.location.href);
    }, []);

    const shareTwitter = () => {
        window.open(
            `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
            '_blank'
        );
    };

    const shareLinkedIn = () => {
        window.open(
            `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
            '_blank'
        );
    };

    const copyLink = async () => {
        await navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="flex items-center gap-2">
            <span className="text-sm text-[var(--muted-foreground)] mr-1">Share:</span>
            <button
                onClick={shareTwitter}
                className="p-2 rounded-lg text-[var(--muted-foreground)] hover:text-[#1DA1F2] hover:bg-[var(--muted)] transition-all"
                aria-label="Share on Twitter"
            >
                <Twitter size={16} />
            </button>
            <button
                onClick={shareLinkedIn}
                className="p-2 rounded-lg text-[var(--muted-foreground)] hover:text-[#0A66C2] hover:bg-[var(--muted)] transition-all"
                aria-label="Share on LinkedIn"
            >
                <Linkedin size={16} />
            </button>
            <button
                onClick={copyLink}
                className="p-2 rounded-lg text-[var(--muted-foreground)] hover:text-[var(--accent)] hover:bg-[var(--muted)] transition-all"
                aria-label="Copy link"
            >
                {copied ? <Check size={16} className="text-green-500" /> : <Link2 size={16} />}
            </button>
        </div>
    );
}
