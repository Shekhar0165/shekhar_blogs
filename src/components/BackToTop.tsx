'use client';

import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export default function BackToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => setVisible(window.scrollY > 400);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className={`back-to-top ${visible ? 'visible' : ''} p-3 rounded-full bg-[var(--accent)] text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all`}
            aria-label="Back to top"
        >
            <ArrowUp size={18} />
        </button>
    );
}
