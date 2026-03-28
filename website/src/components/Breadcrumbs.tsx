import { ChevronRight, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BreadcrumbItem {
    name: string;
    path: string;
}

interface BreadcrumbsProps {
    items: BreadcrumbItem[];
}

/**
 * Breadcrumbs Component
 * Visual navigation + BreadcrumbList schema injection.
 */
const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
    // Generate Schema object
    const schema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://prestigecustompaintingllc.com"
            },
            ...items.map((item, index) => ({
                "@type": "ListItem",
                "position": index + 2,
                "name": item.name,
                "item": `https://prestigecustompaintingllc.com${item.path}`
            }))
        ]
    };

    return (
        <nav aria-label="Breadcrumb" className="py-4 mb-8">
            <script type="application/ld+json">
                {JSON.stringify(schema)}
            </script>
            <ol className="flex items-center flex-wrap gap-2 text-sm font-medium text-gray-500">
                <li className="flex items-center">
                    <Link to="/" className="hover:text-brand-green transition-colors flex items-center gap-1.5">
                        <Home size={14} />
                        <span>Home</span>
                    </Link>
                </li>
                {items.map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                        <ChevronRight size={14} className="text-gray-300 shrink-0" />
                        {index === items.length - 1 ? (
                            <span className="text-brand-black font-semibold truncate max-w-[200px] sm:max-w-none" aria-current="page">
                                {item.name}
                            </span>
                        ) : (
                            <Link to={item.path} className="hover:text-brand-green transition-colors truncate max-w-[150px] sm:max-w-none">
                                {item.name}
                            </Link>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
};

export default Breadcrumbs;
