/**
 * SEO Utility Module
 * Provides reusable functions for injecting structured data,
 * canonical tags, and Open Graph tags into the document head.
 */

const SITE_URL = 'https://prestigecustompaintingllc.com';

interface FAQItem {
    q: string;
    a: string;
}

/**
 * Injects FAQPage JSON-LD schema into the document head.
 * Returns a cleanup function to remove it on unmount.
 */
export function injectFAQSchema(faqs: FAQItem[]): () => void {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map(faq => ({
            '@type': 'Question',
            name: faq.q,
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.a,
            },
        })),
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-seo', 'faq-schema');
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
        script.remove();
    };
}

/**
 * Injects or updates a canonical link tag in the document head.
 * Returns a cleanup function.
 */
export function injectCanonical(path: string): () => void {
    // Remove any existing canonical first
    const existing = document.querySelector('link[rel="canonical"]');
    if (existing) existing.remove();

    const link = document.createElement('link');
    link.rel = 'canonical';
    link.href = `${SITE_URL}${path}`;
    document.head.appendChild(link);

    return () => {
        link.remove();
    };
}

interface OGTagsOptions {
    title: string;
    description: string;
    path: string;
    image?: string;
}

/**
 * Injects Open Graph and Twitter Card meta tags.
 * Returns a cleanup function.
 */
export function injectOGTags({ title, description, path, image }: OGTagsOptions): () => void {
    const tags: { property: string; content: string }[] = [
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Prestige Custom Painting LLC' },
        { property: 'og:title', content: title },
        { property: 'og:description', content: description },
        { property: 'og:url', content: `${SITE_URL}${path}` },
        { property: 'og:image', content: image || `${SITE_URL}/logo.png` },
        { property: 'og:locale', content: 'en_US' },
    ];

    const twitterTags: { name: string; content: string }[] = [
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:title', content: title },
        { name: 'twitter:description', content: description },
        { name: 'twitter:image', content: image || `${SITE_URL}/logo.png` },
    ];

    const elements: HTMLMetaElement[] = [];

    tags.forEach(tag => {
        const meta = document.createElement('meta');
        meta.setAttribute('property', tag.property);
        meta.content = tag.content;
        meta.setAttribute('data-seo', 'og');
        document.head.appendChild(meta);
        elements.push(meta);
    });

    twitterTags.forEach(tag => {
        const meta = document.createElement('meta');
        meta.setAttribute('name', tag.name);
        meta.content = tag.content;
        meta.setAttribute('data-seo', 'twitter');
        document.head.appendChild(meta);
        elements.push(meta);
    });

    return () => {
        elements.forEach(el => el.remove());
    };
}

/**
 * Combined helper: injects canonical, OG tags, and optionally FAQ schema.
 * Use this in a page's useEffect for a single cleanup return.
 */
export function injectPageSEO(options: {
    title: string;
    description: string;
    path: string;
    faqs?: FAQItem[];
}): () => void {
    const cleanups: (() => void)[] = [];

    cleanups.push(injectCanonical(options.path));
    cleanups.push(injectOGTags({
        title: options.title,
        description: options.description,
        path: options.path,
    }));

    if (options.faqs && options.faqs.length > 0) {
        cleanups.push(injectFAQSchema(options.faqs));
    }

    return () => {
        cleanups.forEach(fn => fn());
    };
}
