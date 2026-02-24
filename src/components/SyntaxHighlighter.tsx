'use client';

import { useEffect } from 'react';
import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark.css'; // Premium dark theme

export default function SyntaxHighlighter() {
    useEffect(() => {
        // Highlight all code blocks
        document.querySelectorAll('pre code').forEach((block) => {
            hljs.highlightElement(block as HTMLElement);
        });

        // Add copy buttons to pre blocks
        document.querySelectorAll('pre').forEach((pre) => {
            if (pre.querySelector('.copy-btn')) return;

            const btn = document.createElement('button');
            btn.className = 'copy-btn';
            btn.innerText = 'Copy';

            btn.onclick = () => {
                const code = pre.querySelector('code')?.innerText || '';
                navigator.clipboard.writeText(code);
                btn.innerText = 'Copied!';
                setTimeout(() => btn.innerText = 'Copy', 2000);
            };

            pre.appendChild(btn);
        });
    }, []);

    return null; // Side-effect only component
}
