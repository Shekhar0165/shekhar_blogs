import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Terms of Service',
    description: 'Terms of service for ShekharKashyap.com.',
};

export default function TermsPage() {
    return (
        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Terms of Service</h1>
            <p className="text-sm text-[var(--muted-foreground)] mb-8">Last updated: February 2026</p>

            <div className="prose prose-lg dark:prose-invert max-w-none">
                <p>By accessing and using ShekharKashyap.com, you agree to be bound by these Terms of Service.</p>

                <h2>Use of Content</h2>
                <p>
                    All content on this website, including articles, code snippets, images, and graphics, is the
                    intellectual property of Shekhar Kashyap unless otherwise stated. You may read, share, and
                    reference our content with proper attribution, but you may not reproduce, republish, or sell
                    any content without explicit written permission.
                </p>

                <h2>Code Snippets</h2>
                <p>
                    Code snippets provided in blog posts are offered for educational purposes. You are free to
                    use them in your own projects. However, they are provided &quot;as is&quot; without warranty of any kind.
                </p>

                <h2>User Conduct</h2>
                <p>When using our website, you agree not to:</p>
                <ul>
                    <li>Engage in any activity that disrupts the website&apos;s functionality</li>
                    <li>Attempt to gain unauthorized access to any part of the website</li>
                    <li>Use automated tools to scrape or download content in bulk</li>
                    <li>Submit false or misleading information through forms</li>
                </ul>

                <h2>Comments and Submissions</h2>
                <p>
                    Any messages or content you submit through our contact form becomes subject to our review.
                    We reserve the right to not respond to submissions that are inappropriate, spam, or
                    irrelevant.
                </p>

                <h2>Third-Party Links</h2>
                <p>
                    This website may contain links to third-party websites. We do not endorse or assume
                    responsibility for the content or practices of any third-party sites.
                </p>

                <h2>Advertising</h2>
                <p>
                    This website may display advertisements through Google AdSense or other advertising
                    networks. These ads may use cookies to serve personalized content. By using this website,
                    you consent to the use of such cookies.
                </p>

                <h2>Limitation of Liability</h2>
                <p>
                    ShekharKashyap.com and its owner shall not be liable for any direct, indirect, incidental,
                    or consequential damages arising from the use of this website or the information contained
                    herein.
                </p>

                <h2>Changes to Terms</h2>
                <p>
                    We reserve the right to modify these terms at any time. Continued use of the website after
                    changes constitutes acceptance of the updated terms.
                </p>

                <h2>Contact</h2>
                <p>
                    For questions about these terms, contact us at{' '}
                    <a href="mailto:shekharkashyap913@gmail.com">shekharkashyap913@gmail.com</a>.
                </p>
            </div>
        </section>
    );
}
