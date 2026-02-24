import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact',
    description: 'Get in touch with Shekhar Kashyap. Send a message or connect on social media.',
    openGraph: {
        title: 'Contact | ShekharKashyap.com',
        description: 'Get in touch with Shekhar Kashyap.',
    },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
