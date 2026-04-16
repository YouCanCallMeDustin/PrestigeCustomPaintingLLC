import { useEffect } from 'react';
import { injectPageSEO } from '../lib/seo';

interface SEOHeadProps {
    seoTitle: string;
    description: string;
    path: string;
    keywords?: string;
    ogImage?: string;
    noindex?: boolean;
    schemas?: { id: string; data: object }[];
}

/**
 * SEOHead Component
 * Unified component for head management: title, meta, OG, and JSON-LD schema.
 * Place this at the top of any page component.
 */
const SEOHead = ({ seoTitle, description, path, keywords, ogImage, noindex, schemas }: SEOHeadProps) => {
    useEffect(() => {
        return injectPageSEO({
            seoTitle,
            description,
            path,
            keywords,
            ogImage,
            noindex,
            schemas,
        });
    }, [seoTitle, description, path, keywords, ogImage, noindex, schemas]);

    return null; // This component doesn't render anything to the DOM
};

export default SEOHead;
