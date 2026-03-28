import { SITE_INFO } from '../../lib/constants';
import SEOHead from '../../components/SEOHead';
import Breadcrumbs from '../../components/Breadcrumbs';
import AuthorBio from '../../components/AuthorBio';
import StickyMobileCTA from '../../components/StickyMobileCTA';
import RelatedTopics from '../../components/RelatedTopics';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { generateFAQSchema, generateBreadcrumbSchema, generateServiceSchema } from '../../lib/schemaGenerator';
import { Shield, CheckCircle } from 'lucide-react';

const ExteriorPaintingCost = () => {
    const { phoneNumber } = SITE_INFO;
    
    // Schema Data
    const faqs = [
        {
            question: "How much does it cost to paint a stucco house in Spokane?",
            answer: "Painting a stucco home typically costs 15-25% more than wood siding due to the high absorption rate and the need for specialized elastomeric coatings. Expect to pay between $4,500 and $7,500 for a standard rancher."
        },
        {
            question: "How long does exterior paint last in the Inland Northwest?",
            answer: "In Spokane's climate, a professional exterior paint job with premium materials lasts 7 to 10 years. Homes on the South Hill often see more moisture, while North Spokane homes deal with more sun exposure, both of which affect longevity."
        },
        {
            question: "Should I power wash my house before painting?",
            answer: "Yes, power washing is non-negotiable. It removes dirt, mold, and oxidation that prevent paint from bonding. We include a professional-grade house wash in every exterior estimate."
        }
    ];

    const breadcrumbItems = [
        { name: "Pricing Guides", path: "/cost-to-paint-a-house" },
        { name: "Exterior Painting Cost", path: "/cost-to-paint-house-exterior" }
    ];

    const schemas = [
        { id: 'faq', data: generateFAQSchema(faqs) },
        { id: 'service', data: generateServiceSchema({
            name: "Exterior Home Painting",
            description: "Professional exterior painting services in Spokane, WA. Specialized in siding, trim, and weather-resistant coatings.",
            serviceType: "Exterior House Painting"
        }) },
        { id: 'breadcrumbs', data: generateBreadcrumbSchema(breadcrumbItems) }
    ];

    const relatedTopics = [
        {
            title: "Cost to Paint a House",
            path: "/cost-to-paint-a-house",
            description: "Our main hub for all painting costs, including national vs. local Spokane averages."
        },
        {
            title: "Two-Story House Costs",
            path: "/cost-to-paint-a-two-story-house",
            description: "How height and ladder work impact your exterior painting bid."
        },
        {
            title: "DIY vs. Professional",
            path: "/diy-vs-hiring-a-painter",
            description: "A candid look at the risks of DIY exterior painting in a harsh climate."
        }
    ];

    return (
        <div className="min-h-screen bg-white text-brand-black">
            <SEOHead 
                title="Cost to Paint Exterior of House in Spokane (2026) | Prestige"
                description="What does it cost to paint your home's exterior in Spokane? Get detailed pricing for stucco, wood siding, trim, and preparation for the Inland Northwest."
                path="/cost-to-paint-house-exterior"
                schemas={schemas}
            />
            <Navbar />

            <main className="max-w-7xl mx-auto px-4 pt-24 pb-20">
                <Breadcrumbs items={breadcrumbItems} />

                <article className="max-w-4xl">
                    <header className="mb-12">
                        <h1 className="text-4xl md:text-6xl font-poppins font-bold leading-tight mb-8 text-brand-black">
                            Cost to Paint the <span className="text-brand-green">Exterior</span> of a House in Spokane
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed font-medium">
                            Protecting your home from Spokane's extreme seasonal shifts—from sub-zero winters to triple-digit summers—starts with a high-quality exterior paint job. In 2026, the average cost for an exterior repaint ranges from **$3,500 to $9,500**, depending on your siding type and the level of preparation required.
                        </p>
                    </header>

                    <div className="prose prose-lg prose-brand max-w-none">
                        <section className="my-12">
                            <h2 className="text-3xl font-bold font-poppins mb-6">Exterior Pricing Breakdown by Siding Type</h2>
                            <p>
                                Every home in Spokane is a different puzzle. A cedar-shake home in the historic Rockwood area requires vastly different steps than a modern vinyl-sided home in North Spokane.
                            </p>
                            
                            <div className="overflow-x-auto my-8 rounded-2xl border border-gray-100 shadow-sm">
                                <table className="w-full text-left">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="p-4 border-b">Siding Type</th>
                                            <th className="p-4 border-b">Average Cost</th>
                                            <th className="p-4 border-b">Longevity</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="p-4 border-b">Wood / Cedar</td>
                                            <td className="p-4 border-b font-bold">$4,500 – $8,500</td>
                                            <td className="p-4 border-b">7-10 Years</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 border-b">Stucco</td>
                                            <td className="p-4 border-b font-bold">$5,000 – $9,000</td>
                                            <td className="p-4 border-b">10-12 Years</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 border-b">Vinyl (Color Change)</td>
                                            <td className="p-4 border-b font-bold">$3,500 – $5,500</td>
                                            <td className="p-4 border-b">10+ Years</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 border-b">Brick (Painted)</td>
                                            <td className="p-4 border-b font-bold">$4,000 – $7,000</td>
                                            <td className="p-4 border-b">15+ Years</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        <section className="my-12">
                            <h2 className="text-3xl font-bold font-poppins mb-6">Preparation: The "Hidden" Cost of Longevity</h2>
                            <p>
                                In the painting world, we have a saying: **"The paint is only as good as what's underneath it."** This is especially true in Spokane. Our fluctuating humidity causes wood to expand and contract, which is why "cheap" paint jobs fail so quickly—they skip the prep.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                                    <h4 className="font-bold mb-3 flex items-center gap-2"><CheckCircle size={18} className="text-brand-green" /> Masking & Protection</h4>
                                    <p className="text-sm text-gray-600 text-balance">We spend a full day masking windows, roofs, and landscaping. Overspray on a Spokane homeowner's garden or driveway is unacceptable.</p>
                                </div>
                                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                                    <h4 className="font-bold mb-3 flex items-center gap-2"><Shield size={18} className="text-brand-green" /> Scraping & Sanding</h4>
                                    <p className="text-sm text-gray-600 text-balance">Removing old, failing paint is labor-intensive. We use professional-grade scrapers and HEPA-filtered sanders to ensure a smooth, bondable surface.</p>
                                </div>
                            </div>
                        </section>

                        <section className="my-12">
                            <h2 className="text-3xl font-bold font-poppins mb-6">Weather Factors in the Inland Northwest</h2>
                            <p>
                                Timing your exterior project is crucial. Spokane's "Painting Season" typically runs from **late April to early October**. High humidity in early spring or freezing temps in late fall can prevent paint from curing properly. At Prestige Custom Painting LLC, we monitor daily dew points and temperatures to ensure we never paint in conditions that compromise the warranty.
                            </p>
                        </section>

                        <section className="my-16 flex flex-col md:flex-row gap-8 items-center bg-brand-black text-white p-8 md:p-12 rounded-[2.5rem]">
                            <div className="flex-1">
                                <h3 className="text-3xl font-bold mb-4">Want a Precise Exterior Bid?</h3>
                                <p className="text-gray-400 mb-6">We provide a firm, written price within 24 hours of our visit. No hidden fees, just professional results.</p>
                                <a href={`tel:${phoneNumber}`} className="inline-flex items-center gap-2 bg-brand-green text-white px-8 py-4 rounded-xl font-bold hover:scale-105 transition-all">
                                    {phoneNumber}
                                </a>
                            </div>
                            <div className="shrink-0">
                                <img src="/exterior.png" alt="Full exterior painting project in Spokane WA" className="w-[300px] h-auto rounded-2xl shadow-xl" />
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

export default ExteriorPaintingCost;
