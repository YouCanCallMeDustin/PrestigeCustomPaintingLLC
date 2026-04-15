
import { SITE_INFO } from '../lib/constants';
import SEOHead from '../components/SEOHead';
import Breadcrumbs from '../components/Breadcrumbs';
import StickyMobileCTA from '../components/StickyMobileCTA';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { generateFAQSchema, generateBreadcrumbSchema } from '../lib/schemaGenerator';
import { BookOpen } from 'lucide-react';

const PaintingGlossaryPage = () => {
    const { phoneNumber, email } = SITE_INFO;

    const terms = [
        {
            term: "Elastomeric Paint",
            definition: "A high-build, flexible coating designed to bridge hairline cracks and stretch with the substrate as temperatures fluctuate. Highly recommended in Spokane to protect exterior stucco and masonry during extreme seasonal freeze-thaw cycles."
        },
        {
            term: "HVLP (High Volume Low Pressure)",
            definition: "An industrial paint spraying technique that operates at a lower air pressure to reduce overspray and provide maximum transfer efficiency. It is the gold standard for achieving a factory-smooth, glass-like finish on kitchen cabinets."
        },
        {
            term: "Low-VOC / Zero-VOC",
            definition: "Paints crafted with low or zero Volatile Organic Compounds. These coatings significantly reduce harmful indoor emissions and off-gassing odors, making them the safest choice for interior painting during Spokane's closed-window winter months."
        },
        {
            term: "Scuff-X",
            definition: "A premium, highly durable scuff-resistant interior paint technology manufactured by Benjamin Moore. It provides superior protection against scuffs and impacts in high-traffic residential and commercial spaces without needing a clear topcoat."
        },
        {
            term: "Cut-in",
            definition: "The technique of manually painting the edges and corners with a brush where a roller cannot reach (like ceilings, baseboards, or window trim) before rolling the broad wall surfaces."
        },
        {
            term: "Back-Rolling",
            definition: "The process of rolling over a freshly sprayed surface while it's still wet to push the paint deeper into the pores of the surface. This is a critical step for exterior siding in the Inland Northwest to ensure long-term adhesion."
        },
        {
            term: "Primer",
            definition: "A preparatory undercoat applied to materials before painting. Primers ensure better adhesion of paint to the surface, increase paint durability, and provide additional protection for the painted material."
        },
        {
            term: "Urethane Enamel",
            definition: "A hard, durable finish that combines the toughness of polyurethane and the leveling characteristics of traditional enamel. It is the preferred coating for high-touch surfaces like cabinets, doors, and trim."
        }
    ];

    const faqs = terms.map(t => ({
        question: `What does ${t.term} mean in professional painting?`,
        answer: t.definition
    }));

    const breadcrumbItems = [
        { name: "Resources", path: "/blog" },
        { name: "Spokane Painting Glossary", path: "/spokane-painting-glossary" }
    ];

    const schemas = [
        { id: 'faq', data: generateFAQSchema(faqs) },
        { id: 'breadcrumbs', data: generateBreadcrumbSchema(breadcrumbItems) }
    ];

    return (
        <div className="min-h-screen bg-white text-brand-black">
            <SEOHead 
                title="Spokane Painting Glossary: Professional Terminology Guide"
                description="Understand professional painting terminology with Prestige Custom Painting's glossary. Learn about Elastomeric, HVLP, Scuff-X, Low-VOC, and what they mean for your Spokane home."
                path="/spokane-painting-glossary"
                schemas={schemas}
            />
            <Navbar />

            <main className="max-w-7xl mx-auto px-4 pt-24 pb-20">
                <Breadcrumbs items={breadcrumbItems} />

                <article className="max-w-4xl mx-auto">
                    <header className="mb-12 text-center md:text-left">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-green/10 text-brand-green text-xs font-bold mb-6">
                            HOMEOWNER RESOURCE
                        </div>
                        <h1 className="text-4xl md:text-6xl font-poppins font-bold leading-tight mb-8">
                            Spokane Painting <span className="text-brand-green">Glossary</span>
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed font-medium">
                            Clear definitions for professional painting terminology, materials, and techniques. Understand exactly what goes into protecting your Inland Northwest home.
                        </p>
                    </header>

                    <div className="space-y-6">
                        {terms.map((item, index) => (
                            <div key={index} id={item.term.toLowerCase().replace(/[^a-z0-9]+/g, '-')} className="bg-gray-50 p-8 rounded-3xl border border-gray-100 shadow-sm scroll-mt-32 hover:border-brand-green/30 transition-colors">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-brand-green/10 text-brand-green rounded-xl flex items-center justify-center shrink-0 mt-1">
                                        <BookOpen size={24} />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold font-poppins mb-3 text-brand-black">{item.term}</h2>
                                        <p className="text-lg text-gray-600 leading-relaxed">{item.definition}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="my-16 p-8 md:p-12 bg-brand-black text-white rounded-[3rem] flex flex-col items-center text-center">
                        <h3 className="text-3xl font-bold mb-4">Have Questions About Your Custom Project?</h3>
                        <p className="text-lg text-gray-400 mb-8 max-w-2xl">
                            We pride ourselves on transparent communication. If you want to know which of these products or techniques is right for your property, give us a call.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 mb-8">
                            <a href={`tel:${phoneNumber}`} className="bg-brand-green text-white px-8 py-4 rounded-xl font-bold hover:scale-105 transition-transform flex items-center justify-center">
                                CALL {phoneNumber}
                            </a>
                            <a href={`mailto:${email}`} className="text-white bg-white/10 px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-all flex items-center justify-center">
                                EMAIL AN EXPERT
                            </a>
                        </div>
                    </div>
                </article>
            </main>

            <StickyMobileCTA />
            <Footer />
        </div>
    );
};

export default PaintingGlossaryPage;
