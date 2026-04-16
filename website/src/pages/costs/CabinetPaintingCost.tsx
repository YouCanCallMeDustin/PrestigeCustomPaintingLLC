import { SITE_INFO } from '../../lib/constants';
import SEOHead from '../../components/SEOHead';
import Breadcrumbs from '../../components/Breadcrumbs';
import AuthorBio from '../../components/AuthorBio';
import StickyMobileCTA from '../../components/StickyMobileCTA';
import RelatedTopics from '../../components/RelatedTopics';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { generateFAQSchema, generateBreadcrumbSchema, generateServiceSchema } from '../../lib/schemaGenerator';
import { Palette, CheckCircle, Sparkles, Shield, DollarSign } from 'lucide-react';

const CabinetPaintingCost = () => {
    const { phoneNumber } = SITE_INFO;
    
    // Schema Data
    const faqs = [
        {
            question: "How much does it cost to paint a standard kitchen's cabinets?",
            answer: "For a medium-sized kitchen (approx. 20-30 openings), professional cabinet painting in Spokane typically costs between $3,500 and $6,000. This includes all preparation, degreasing, sanding, priming, and two coats of factory-grade finish."
        },
        {
            question: "Is it cheaper to paint or replace cabinets?",
            answer: "Painting is significantly cheaper. Replacing cabinets in a standard Spokane home starts at $15,000 to $30,000+. Professional painting provides a factory-new look for 1/4 the cost of replacement, with a much faster turnaround time (usually 5-7 days)."
        },
        {
            question: "Do you paint the inside of the cabinets?",
            answer: "Our standard quote covers the faces of the cabinet boxes and both sides of the doors and drawer fronts. Painting the interior of the boxes is an optional add-on but is usually not necessary for a complete aesthetic transformation."
        }
    ];

    const breadcrumbItems = [
        { name: "Pricing Guides", path: "/cost-to-paint-a-house" },
        { name: "Cabinet Painting Cost", path: "/cost-to-paint-kitchen-cabinets" }
    ];

    const schemas = [
        { id: 'faq', data: generateFAQSchema(faqs) },
        { id: 'service', data: generateServiceSchema({
            name: "Kitchen Cabinet Professional Refinishing",
            description: "High-end cabinet painting and refinishing in Spokane, WA. We use factory-grade coatings for a durable, smooth finish.",
            serviceType: "Cabinet Refinishing"
        }) },
        { id: 'breadcrumbs', data: generateBreadcrumbSchema(breadcrumbItems) }
    ];

    const relatedTopics = [
        {
            topic: "Interior Painting Costs",
            path: "/cost-to-paint-house-interior",
            description: "How cabinet pricing fits into a larger interior renovation budget."
        },
        {
            topic: "Cost to Paint a Room",
            path: "/cost-to-paint-a-room",
            description: "Budgeting for walls and trim alongside your cabinet project."
        },
        {
            topic: "Cost to Paint a House",
            path: "/cost-to-paint-a-house",
            description: "The main guide for understanding all Spokane painting costs."
        }
    ];

    return (
        <div className="min-h-screen bg-white text-brand-black">
            <SEOHead 
                seoTitle="Cost to Paint Kitchen Cabinets in Spokane | 2026 Refinising Prices"
                description="Transform your kitchen for less. See 2026 cabinet painting costs in Spokane, including pro finishing prices for small, medium, and large luxury kitchens."
                path="/cost-to-paint-kitchen-cabinets"
                schemas={schemas}
            />
            <Navbar />

            <header className="bg-brand-black pt-28 pb-16 md:pt-36 md:pb-24 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-green/10 -skew-x-12 transform translate-x-32" />
                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <Breadcrumbs items={breadcrumbItems} variant="light" />
                    
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-green/10 text-brand-green text-xs font-bold mb-6">
                            HIGH-VALUE UPGRADE
                        </div>
                        <h1 className="text-4xl md:text-6xl font-poppins font-bold leading-tight mb-8">
                            How Much Does <span className="text-brand-green">Cabinet Painting</span> Cost in Spokane?
                        </h1>
                        <p className="text-xl text-gray-300 leading-relaxed font-medium">
                            Kitchen cabinets are the focal point of your home. In 2026, professional cabinet refinishing is the #1 requested interior service in Spokane Valley and Liberty Lake. For a standard kitchen, homeowners are investing between <strong>$3,500 and $6,500</strong> to achieve a factory-new finish that lasts for years.
                        </p>
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-4 py-20">
                <article className="max-w-4xl">

                    <div className="prose prose-lg prose-brand max-w-none">
                        <section className="my-12">
                            <h2 className="text-3xl font-bold font-poppins mb-6">Cabinet Refinishing Comparison: Paint vs. Replace</h2>
                            <p>
                                If your cabinet boxes are structurally sound, there is rarely a reason to replace them. Painting allows you to spend your budget on high-end hardware and appliances instead.
                            </p>
                            
                            <div className="overflow-x-auto my-8 rounded-2xl border border-gray-100 shadow-sm">
                                <table className="w-full text-left">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="p-4 border-b">Feature</th>
                                            <th className="p-4 border-b">Professional Painting</th>
                                            <th className="p-4 border-b">Full Replacement</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="p-4 border-b">Typical Cost</td>
                                            <td className="p-4 border-b font-bold text-brand-green">$3,500 – $6,500</td>
                                            <td className="p-4 border-b font-bold text-red-600">$15,000 – $40,000+</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 border-b">Project Duration</td>
                                            <td className="p-4 border-b">5-7 Days</td>
                                            <td className="p-4 border-b">3-6 Weeks</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 border-b">Customization</td>
                                            <td className="p-4 border-b">Unlimited Colors</td>
                                            <td className="p-4 border-b">Limited to Stock</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 border-b">Mess Factor</td>
                                            <td className="p-4 border-b">Minimal (Closed System)</td>
                                            <td className="p-4 border-b">Significant (Demolition)</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        <section className="my-12">
                            <h2 className="text-3xl font-bold font-poppins mb-6">The "Prestige" Cabinet Process</h2>
                            <p>
                                We don't just "paint" cabinets; we refinish them. Our process is designed to handle the heavy use of a Spokane family kitchen.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-2xl bg-brand-green/10 flex items-center justify-center text-brand-green shrink-0">
                                        <Sparkles size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold mb-1">Industrial Degreasing</h4>
                                        <p className="text-sm text-gray-500">We remove all cooking oils and grease to ensure the primer creates a permanent chemical bond.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-2xl bg-brand-green/10 flex items-center justify-center text-brand-green shrink-0">
                                        <Shield size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold mb-1">Bonding Primer</h4>
                                        <p className="text-sm text-gray-500">We use specialized shellac or high-build bonding primers that "bite" into the existing finish.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-2xl bg-brand-green/10 flex items-center justify-center text-brand-green shrink-0">
                                        <Palette size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold mb-1">Factory Spray Finish</h4>
                                        <p className="text-sm text-gray-500">Doors are sprayed in our controlled environment for a smooth-as-glass finish with NO brush marks.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-2xl bg-brand-green/10 flex items-center justify-center text-brand-green shrink-0">
                                        <CheckCircle size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold mb-1">Durable Topcoat</h4>
                                        <p className="text-sm text-gray-500">We use high-grade enamels like Benjamin Moore Scuff-X for extreme scratch and chemical resistance.</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="my-12">
                            <h2 className="text-2xl font-bold font-poppins mb-4 italic">
                                Pricing by Kitchen Size
                            </h2>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                                    <DollarSign size={18} className="text-brand-green mt-1" />
                                    <span><strong>Small Kitchen (Under 15 openings):</strong> $2,800 – $4,000</span>
                                </li>
                                <li className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl border border-brand-green/20 bg-brand-green/5">
                                    <DollarSign size={18} className="text-brand-green mt-1" />
                                    <span><strong>Medium Kitchen (20-35 openings):</strong> $4,000 – $6,500</span>
                                </li>
                                <li className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                                    <DollarSign size={18} className="text-brand-green mt-1" />
                                    <span><strong>Large/Executive Kitchen (40+ openings):</strong> $7,000 – $12,000+</span>
                                </li>
                            </ul>
                        </section>

                        <section className="my-16 text-center">
                            <div className="max-w-3xl mx-auto p-10 bg-brand-green rounded-[3rem] text-white shadow-2xl shadow-green-500/20">
                                <h3 className="text-3xl font-bold mb-4">Transform your kitchen this week.</h3>
                                <p className="text-lg mb-8 opacity-90 font-medium">Schedule a free consultation and see our factory-finish samples in person.</p>
                                <a href={`tel:${phoneNumber}`} className="inline-flex items-center gap-2 bg-brand-black text-white px-10 py-5 rounded-2xl font-bold text-xl hover:scale-105 transition-transform">
                                    {phoneNumber}
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

export default CabinetPaintingCost;
