import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Disclaimer',
    description: 'Disclaimer for ShekharKashyap.com — content, affiliate links, and advertising disclosures.',
};

export default function DisclaimerPage() {
    return (
        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Disclaimer</h1>
            <p className="text-sm text-[var(--muted-foreground)] mb-8">Last updated: February 2026</p>

            <div className="prose prose-lg dark:prose-invert max-w-none">
                <h2>Educational Content</h2>
                <p>
                    The information provided on ShekharKashyap.com is for general informational and educational
                    purposes only. While we strive to provide accurate and up-to-date information, we make no
                    representations or warranties of any kind, express or implied, about the completeness,
                    accuracy, reliability, or suitability of the information.
                </p>

                <h2>Professional Advice</h2>
                <p>
                    The content on this blog should not be considered professional advice. Always consult with
                    qualified professionals for specific technical decisions related to your projects or
                    infrastructure.
                </p>

                <h2>Affiliate Links</h2>
                <p>
                    Some articles on this website may contain affiliate links. This means we may earn a small
                    commission if you make a purchase through these links, at no additional cost to you. We only
                    recommend products and services that we genuinely believe in.
                </p>

                <h2>Google AdSense</h2>
                <p>
                    This website uses Google AdSense to display advertisements. Google AdSense uses cookies to
                    serve ads based on your browsing behavior. The ads displayed are managed by Google and its
                    advertising partners. We do not control the specific ads shown on this website.
                </p>

                <h2>External Links</h2>
                <p>
                    This website may contain links to external websites that are not provided or maintained by
                    us. We do not guarantee the accuracy, relevance, or completeness of any information on
                    these external websites.
                </p>

                <h2>Code Usage</h2>
                <p>
                    Any code snippets or examples provided in our articles are for demonstration purposes.
                    Use them at your own risk. We are not responsible for any damages or issues that may
                    arise from implementing code found on this website in production environments.
                </p>

                <h2>Contact</h2>
                <p>
                    If you have any questions about this disclaimer, please contact us at{' '}
                    <a href="mailto:shekharkashyap913@gmail.com">shekharkashyap913@gmail.com</a>.
                </p>
            </div>
        </section>
    );
}
