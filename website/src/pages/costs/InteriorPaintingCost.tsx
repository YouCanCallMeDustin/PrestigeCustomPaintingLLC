import { SITE_INFO } from '../../lib/constants';
import SEOHead from '../../components/SEOHead';
import Breadcrumbs from '../../components/Breadcrumbs';
import AuthorBio from '../../components/AuthorBio';
import StickyMobileCTA from '../../components/StickyMobileCTA';
import RelatedTopics from '../../components/RelatedTopics';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { generateFAQSchema, generateBreadcrumbSchema, generateServiceSchema } from '../../lib/schemaGenerator';
import { Shield, Palette, Lightbulb } from 'lucide-react';

const InteriorPaintingCost = () => {
    const { phoneNumber } = SITE_INFO;
    
    // Schema Data
    const faqs = [
        {
            question: "How much does it cost to paint a 2,000 square foot house interior?",
            answer: "In Spokane, painting a 2,000 sq ft home interior (including walls, ceilings, and baseboards) typically costs between $4,500 and $8,500. This varies based on the number of colors used and whether we are painting closets and doors."
        },
        {
            question: "Which type of paint finish is best for kitchens and bathrooms?",
            answer: "For Spokane's moisture-prone areas, we recommend Satin or Semi-Gloss finishes. These provide a hard, non-porous surface that is easy to wipe clean and resists mold better than Flat or Eggshell finishes."
        },
        {
            question: "How long does it take to paint a whole house interior?",
            answer: "A standard 3-bedroom, 2-bath home in Spokane usually takes a professional crew 4 to 6 days to complete. This includes meticulous masking of floors and cabinets, surface prep, and two coats of paint."
        }
    ];

    const breadcrumbItems = [
        { name: "Pricing Guides", path: "/cost-to-paint-a-house" },
        { name: "Interior Painting Cost", path: "/cost-to-paint-house-interior" }
    ];

    const schemas = [
        { id: 'faq', data: generateFAQSchema(faqs) },
        { id: 'service', data: generateServiceSchema({
            name: "Full Interior Home Painting",
            description: "Premium interior painting for Spokane homes. We handle everything from wall preparation to fine-finish trim work.",
            serviceType: "Interior House Painting"
        }) },
        { id: 'breadcrumbs', data: generateBreadcrumbSchema(breadcrumbItems) }
    ];

    const relatedTopics = [
        {
            title: "Cost to Paint a Room",
            path: "/cost-to-paint-a-room",
            description: "A detailed breakdown for single-room projects like kitchens or bedrooms."
        },
        {
            title: "Cabinet Painting Costs",
            path: "/cost-to-paint-kitchen-cabinets",
            description: "How to budget for high-impact kitchen cabinet refinishing."
        },
        {
            title: "Painter Hourly Rates",
            path: "/how-much-do-painters-charge-per-hour",
            description: "Understanding the labor costs behind a professional interior bid."
        }
    ];

    return (
        <div className="min-h-screen bg-white text-brand-black">
            <SEOHead 
                title="Interior House Painting Cost Spokane (2026 Prices)"
                description="Planning an interior refresh? See current 2026 pricing for interior painting in Spokane. Learn about square foot rates, material costs, and prep time."
                path="/cost-to-paint-house-interior"
                schemas={schemas}
            />
            <Navbar />

            <main className="max-w-7xl mx-auto px-4 pt-24 pb-20">
                <Breadcrumbs items={breadcrumbItems} />

                <article className="max-w-4xl">
                    <header className="mb-12">
                        <h1 className="text-4xl md:text-6xl font-poppins font-bold leading-tight mb-8">
                            How Much Does <span className="text-brand-green">Interior Painting</span> Cost in Spokane?
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed font-medium">
                            Whether you've just bought a home on the South Hill or you're preparing to sell in Spokane Valley, a fresh interior coat is the best way to add value. In 2026, Spokane homeowners are paying between **$2.50 and $5.50 per square foot** for comprehensive interior painting.
                        </p>
                    </header>

                    <div className="prose prose-lg prose-brand max-w-none">
                        <section className="my-12">
                            <h2 className="text-3xl font-bold font-poppins mb-6">Interior Pricing by Square Footage</h2>
                            <p>
                                While every project is unique, most Spokane homes fall into these general pricing tiers for wood, drywall, and ceilings.
                            </p>
                            
                            <div className="overflow-x-auto my-8 rounded-2xl border border-gray-100 shadow-sm">
                                <table className="w-full text-left">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="p-4 border-b">Home Size</th>
                                            <th className="p-4 border-b">Estimated Cost</th>
                                            <th className="p-4 border-b">Includes</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="p-4 border-b">1,200 sq ft (Condo/Small)</td>
                                            <td className="p-4 border-b font-bold">$3,000 – $5,000</td>
                                            <td className="p-4 border-b">Walls, Trim, 2 Colors</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 border-b">2,000 sq ft (Average)</td>
                                            <td className="p-4 border-b font-bold">$4,500 – $8,500</td>
                                            <td className="p-4 border-b">Whole Home + Ceilings</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 border-b">3,500+ sq ft (Executive)</td>
                                            <td className="p-4 border-b font-bold">$9,000 – $15,000+</td>
                                            <td className="p-4 border-b">Multi-story, Complex Trim</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        <section className="my-12">
                            <h2 className="text-3xl font-bold font-poppins mb-6">What Drives the Cost Up (or Down)?</h2>
                            <p>
                                At Prestige Custom Painting LLC, we emphasize transparency. Here are the three main needle-movers for your interior bid:
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
                                <div className="p-6 bg-gray-50 rounded-2xl">
                                    <div className="text-brand-green mb-4"><Shield size={32} /></div>
                                    <h4 className="font-bold mb-2">Furniture & Occupancy</h4>
                                    <p className="text-sm">An empty home is 15-20% cheaper to paint because we can move faster and require less meticulous masking of belongings.</p>
                                </div>
                                <div className="p-6 bg-gray-50 rounded-2xl">
                                    <div className="text-brand-green mb-4"><Palette size={32} /></div>
                                    <h4 className="font-bold mb-2">Color Complexity</h4>
                                    <p className="text-sm">Using a single color throughout is efficient. Every additional color requires more tool cleanups and careful 'cutting in' at the corners.</p>
                                </div>
                                <div className="p-6 bg-gray-50 rounded-2xl">
                                    <div className="text-brand-green mb-4"><Lightbulb size={32} /></div>
                                    <h4 className="font-bold mb-2">Surface Condition</h4>
                                    <p className="text-sm">Spokane's older homes often have nicotine stains or drywall settling cracks that require specialized primers and repair labor.</p>
                                </div>
                            </div>
                        </section>

                        <section className="my-16 bg-brand-green/5 p-8 md:p-12 rounded-[2.5rem] border border-brand-green/10">
                            <h3 className="text-3xl font-bold mb-6 italic text-brand-green">The Prestige Interior Advantage</h3>
                            <p className="text-lg text-gray-700 leading-relaxed mb-8">
                                We treat your home like our own. Our crews use HEPA-filtered vacuums to keep dust to a minimum and high-end Sherwin-Williams Scuff-Tuff paints that stand up to the Spokane lifestyle—from muddy dog paws to active toddlers.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a href={`tel:${phoneNumber}`} className="bg-brand-green text-white px-10 py-5 rounded-2xl font-bold text-xl hover:scale-105 transition-transform flex items-center justify-center gap-2">
                                    CALL FOR ESTIMATE
                                </a>
                            </div>
                        </section>

                        <RelatedTopics topics={relatedTopics} />
                        <AuthorBio />
                    </div>
                </article>
            </main>

            <StickyMobileCTA />
            <Footer />
        </div>
    );
};

export default InteriorPaintingCost;
