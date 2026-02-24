'use client';

import { useState, type FormEvent } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

export default function NewsletterForm() {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error' | 'exists'>('idle');

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (!email) return;
        setStatus('loading');
        try {
            const res = await fetch(`${API_URL}/subscribers`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
            });
            if (res.ok) {
                setStatus('success');
                setEmail('');
            } else if (res.status === 409) {
                setStatus('exists');
            } else {
                setStatus('error');
            }
        } catch {
            setStatus('error');
        }
    };

    if (status === 'success') {
        return (
            <div className="text-center py-3">
                <p className="text-green-600 dark:text-green-400 font-semibold">🎉 You&apos;re subscribed!</p>
                <p className="text-sm text-muted-foreground mt-1">You&apos;ll get an email when new posts drop.</p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
                type="email"
                required
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 h-12"
            />
            <Button
                type="submit"
                disabled={status === 'loading'}
                className="bg-[var(--indigo)] hover:bg-[var(--indigo)]/90 text-white h-12 px-8 font-semibold shadow-md shadow-[var(--indigo)]/20"
            >
                {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
            </Button>
            {status === 'exists' && (
                <p className="text-amber-500 text-sm sm:absolute sm:mt-14">Already subscribed!</p>
            )}
            {status === 'error' && (
                <p className="text-red-500 text-sm sm:absolute sm:mt-14">Something went wrong.</p>
            )}
        </form>
    );
}
