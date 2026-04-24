/**
 * SEO Utility Module
 * Provides reusable functions for injecting structured data,
 * canonical tags, and Open Graph tags into the document head.
 */

const SITE_URL = 'https://prestigecustompaintingllc.com';

/**
 * Injects a JSON-LD schema into the document head.
 * Returns a cleanup function.
 */
export function injectSchema(schema: object, id: string): () => void {
    const existing = document.querySelector(`script[data-seo="${id}"]`);
    if (existing) existing.remove();

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-seo', id);
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
    const existing = document.querySelector('link[rel="canonical"]');
    if (existing) existing.remove();

    const link = document.createElement('link');
    link.rel = 'canonical';
    link.href = path.startsWith('http') ? path : `${SITE_URL}${path}`;
    document.head.appendChild(link);

    return () => {
        link.remove();
    };
}

interface MetaTag {
    name?: string;
    property?: string;
    content: string;
}

/**
 * Injects meta tags into the head.
 * Returns a cleanup function.
 */
export function injectMetaTags(tags: MetaTag[], category: string): () => void {
    const elements: HTMLMetaElement[] = [];

    tags.forEach(tag => {
        const meta = document.createElement('meta');
        if (tag.name) meta.setAttribute('name', tag.name);
        if (tag.property) meta.setAttribute('property', tag.property);
        meta.content = tag.content;
        meta.setAttribute('data-seo', category);
        document.head.appendChild(meta);
        elements.push(meta);
    });

    return () => {
        elements.forEach(el => el.remove());
    };
}

interface SEOOptions {
    seoTitle: string;
    description: string;
    path: string;
    keywords?: string;
    ogImage?: string;
    noindex?: boolean;
    schemas?: { id: string; data: object }[];
}

/**
 * Combined helper: injects title, description, canonical, OG tags, and multiple schemas.
 */
export function injectPageSEO(options: SEOOptions): () => void {
    const cleanups: (() => void)[] = [];

    // Title & Description
    document.title = options.seoTitle;
    const descMeta = document.querySelector('meta[name="description"]');
    if (descMeta) {
        descMeta.setAttribute('content', options.description);
    } else {
        const meta = document.createElement('meta');
        meta.setAttribute('name', 'description');
        meta.content = options.description;
        document.head.appendChild(meta);
        cleanups.push(() => meta.remove());
    }

    // Keywords
    if (options.keywords) {
        const keyMeta = document.querySelector('meta[name="keywords"]');
        if (keyMeta) {
            keyMeta.setAttribute('content', options.keywords);
        } else {
            const meta = document.createElement('meta');
            meta.setAttribute('name', 'keywords');
            meta.content = options.keywords;
            document.head.appendChild(meta);
            cleanups.push(() => meta.remove());
        }
    }

    // Canonical
    cleanups.push(injectCanonical(options.path));

    // OG & Twitter Tags
    const ogTags: MetaTag[] = [
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Prestige Custom Painting LLC' },
        { property: 'og:title', content: options.seoTitle },
        { property: 'og:description', content: options.description },
        { property: 'og:url', content: options.path.startsWith('http') ? options.path : `${SITE_URL}${options.path}` },
        { property: 'og:image', content: options.ogImage || `${SITE_URL}/logo.png` },
        { property: 'og:locale', content: 'en_US' },
    ];

    const twitterTags: MetaTag[] = [
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: options.seoTitle },
        { name: 'twitter:description', content: options.description },
        { name: 'twitter:image', content: options.ogImage || `${SITE_URL}/logo.png` },
    ];

    cleanups.push(injectMetaTags(ogTags, 'og'));
    cleanups.push(injectMetaTags(twitterTags, 'twitter'));

    // Robots meta tag for Guideline 9 & 10
    const robotsTags: MetaTag[] = options.noindex ? [
        { name: 'robots', content: 'noindex, nofollow, noarchive' }
    ] : [
        { name: 'robots', content: 'index, follow' }
    ];
    cleanups.push(injectMetaTags(robotsTags, 'robots'));

    // Schemas
    if (options.schemas) {
        options.schemas.forEach(schema => {
            cleanups.push(injectSchema(schema.data, schema.id));
        });
    }

    return () => {
        cleanups.forEach(fn => fn());
    };
}
/**
 * Generates a standard WebPage schema.
 */
export function generateWebPageSchema(options: { topic: string; description: string; url: string }) {
    return {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": options.topic,
        "description": options.description,
        "url": options.url.startsWith('http') ? options.url : `${SITE_URL}${options.url}`,
        "publisher": {
            "@id": `${SITE_URL}/#organization`
        }
    };
}

/**
 * Generates an FAQPage schema.
 */
export function generateFAQSchema(faqs: { q: string; a: string }[]) {
    return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.q,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.a
            }
        }))
    };
}

/**
 * Generates an Article/BlogPosting schema.
 */
export function generateArticleSchema(options: {
    topic: string;
    description: string;
    path: string;
    image?: string;
    datePublished?: string;
    dateModified?: string;
}) {
    return {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": options.topic,
        "description": options.description,
        "image": options.image || `${SITE_URL}/logo.png`,
        "author": {
            "@type": "Organization",
            "name": "Prestige Custom Painting LLC",
            "url": SITE_URL
        },
        "publisher": {
            "@type": "Organization",
            "name": "Prestige Custom Painting LLC",
            "logo": {
                "@type": "ImageObject",
                "url": `${SITE_URL}/logo.png`
            }
        },
        "datePublished": options.datePublished || "2024-01-01",
        "dateModified": options.dateModified || new Date().toISOString().split('T')[0],
        "url": `${SITE_URL}${options.path}`
    };
}
