import { MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { areaData } from '../data/areaData';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { injectPageSEO } from '../lib/seo';
import { generateLocalBusinessSchema } from '../lib/schemaGenerator';

export default function ServiceAreaPage() {
    useEffect(() => {
        const title = "Service Areas | House Painters Spokane & Surrounding Region";
        const description = "Prestige Custom Painting LLC serves 60+ areas across the Inland Northwest, including Spokane, Spokane Valley, Liberty Lake, and more. Local, trusted painting experts.";

        document.title = title;
        const meta = document.querySelector('meta[name="description"]');
        if (meta) meta.setAttribute('content', description);

        return injectPageSEO({
            title,
            description,
            path: '/service-area',
            schemas: [
                {
                    id: 'service',
                    data: {
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "name": "House Painting",
                        "areaServed": areaData.map(a => ({
                            "@type": "City",
                            "name": a.city,
                            "addressRegion": "WA"
                        }))
                    }
                },
                {
                    id: 'local-business',
                    data: generateLocalBusinessSchema()
                }
            ]
        });
    }, []);

    return (
        <div className="min-h-screen bg-white text-brand-black pb-20 md:pb-0">
            <Navbar />

            <header className="bg-brand-black py-16 md:py-24 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-green/10 -skew-x-12 transform translate-x-32" />
                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <h1 className="text-4xl md:text-6xl font-poppins font-bold mb-6">
                        Service <span className="text-brand-green">Areas</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
                        We provide premium interior and exterior painting services to homeowners and businesses throughout the entire Spokane region and Inland Northwest.
                    </p>
                </div>
            </header>

            <section className="py-16 md:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {areaData.map((area, idx) => (
                            <Link
                                key={idx}
                                to={area.slug === 'spokane' ? '/house-painters-spokane' : `/painting-${area.slug}`}
                                className="group p-6 border border-gray-100 rounded-2xl hover:border-brand-green hover:shadow-xl hover:shadow-green-500/5 transition-all"
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <div className="w-10 h-10 bg-brand-green/10 rounded-xl flex items-center justify-center text-brand-green group-hover:bg-brand-green group-hover:text-white transition-colors">
                                        <MapPin size={20} />
                                    </div>
                                    <ArrowRight size={18} className="text-gray-300 group-hover:text-brand-green transform group-hover:translate-x-1 transition-all" />
                                </div>
                                <h3 className="font-poppins font-bold text-gray-900 group-hover:text-brand-green transition-colors">{area.city}</h3>
                                <p className="text-xs text-gray-400 mt-1">Washington State</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
