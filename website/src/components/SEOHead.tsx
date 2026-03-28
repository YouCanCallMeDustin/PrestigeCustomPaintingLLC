import { useEffect } from 'react';
import { injectPageSEO } from '../lib/seo';

interface SEOHeadProps {
    title: string;
    description: string;
    path: string;
    ogImage?: string;
    schemas?: { id: string; data: object }[];
}

/**
 * SEOHead Component
 * Unified component for head management: title, meta, OG, and JSON-LD schema.
 * Place this at the top of any page component.
 */
const SEOHead = ({ title, description, path, ogImage, schemas }: SEOHeadProps) => {
    useEffect(() => {
        return injectPageSEO({
            title,
            description,
            path,
            ogImage,
            schemas,
        });
    }, [title, description, path, ogImage, schemas]);

    return null; // This component doesn't render anything to the DOM
};

export default SEOHead;
