import { SITE_INFO } from '../../lib/constants';
import SEOHead from '../../components/SEOHead';
import Breadcrumbs from '../../components/Breadcrumbs';
import AuthorBio from '../../components/AuthorBio';
import StickyMobileCTA from '../../components/StickyMobileCTA';
import RelatedTopics from '../../components/RelatedTopics';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { generateFAQSchema, generateBreadcrumbSchema, generateServiceSchema, generateArticleSchema } from '../../lib/schemaGenerator';
import { CheckCircle, Sun, ThermometerSnowflake, DollarSign, AlertTriangle } from 'lucide-react';
import React from 'react';

const ExteriorPaintingCost: React.FC = () => {
    const { phoneNumber, ownerName } = SITE_INFO;
    
    // Schema Data
    const faqs = [
        {
            question: "How much does it cost to paint a stucco house in Spokane?",
            answer: "Painting a stucco home typically costs 15-25% more than wood siding due to the high absorption rate and the need for specialized elastomeric coatings. Expect to pay between $5,000 and $9,000 for a standard rancher in 2026."
        },
        {
            question: "How long does exterior paint last in the Inland Northwest?",
            answer: "In Spokane's climate, a professional exterior paint job with premium elastic materials lasts 7 to 10 years. Homes exposed to heavy UV on the South Hill may fade faster, while shaded North Spokane homes deal with moisture issues."
        },
        {
            question: "Should I power wash my house before painting?",
            answer: "Yes, power washing is entirely non-negotiable. It removes dirt, mold, and oxidation that prevent paint from chemically bonding to the substrate. We include a professional-grade house wash in every exterior estimate."
        },
        {
            question: "What is the best time of year to paint a house in Spokane?",
            answer: "The ideal painting window in Spokane is late May through early October. Temperatures must remain consistently above 35-50°F (depending on the specific paint formulation) during application and curing, and there should be no rain or heavy dew forecasted."
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
            description: "Professional exterior painting services in Spokane, WA. Specialized in siding, trim, and weather-resistant coatings to combat freeze-thaw cycles.",
            serviceType: "Exterior House Painting"
        }) },
        { id: 'breadcrumbs', data: generateBreadcrumbSchema(breadcrumbItems) },
        { id: 'article', data: generateArticleSchema({
            topic: "Exterior House Painting Cost in Spokane (2026 Guide)",
            description: "Detailed breakdown of exterior house painting costs in Spokane for 2026. Discover pricing by siding type, the impact of local weather, and DIY constraints.",
            image: "https://prestigecustompaintingllc.com/exterior.webp",
            datePublished: "2026-04-10",
            dateModified: "2026-04-24",
            authorName: ownerName,
            url: "https://prestigecustompaintingllc.com/cost-to-paint-house-exterior"
        })}
    ];

    const relatedTopics = [
        {
            topic: "Cost to Paint a House",
            path: "/cost-to-paint-a-house",
            description: "Our main hub for all painting costs, including national vs. local Spokane averages."
        },
        {
            topic: "DIY vs. Hiring a Painter",
            path: "/diy-vs-hiring-a-painter",
            description: "A candid look at the real costs and risks of DIY exterior painting in a harsh climate."
        },
        {
            topic: "How Often To Paint",
            path: "/blog/how-often-to-paint-house-spokane",
            description: "Learn the specific timelines and warning signs indicating your home needs a repaint."
        }
    ];

    return (
        <div className="min-h-screen bg-white text-brand-black font-sans">
            <SEOHead 
                seoTitle="Exterior House Painting Cost Spokane | 2026 Pricing Guide"
                description="What does it cost to paint your house exterior in Spokane? Get our deep-dive 2026 pricing for siding, trim, and weather preparation for the Inland Northwest."
                path="/cost-to-paint-house-exterior"
                schemas={schemas}
            />
            <Navbar />

            <header className="bg-brand-black pt-28 pb-16 md:pt-36 md:pb-24 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-green/10 -skew-x-12 transform translate-x-32" />
                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <Breadcrumbs items={breadcrumbItems} variant="light" />
                    
                    <div className="max-w-4xl mt-6">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-green/10 text-brand-green text-sm font-bold mb-6 border border-brand-green/20">
                            <DollarSign size={16} /> 2026 PRICING DATA
                        </div>
                        <h1 className="text-4xl md:text-6xl font-poppins font-bold leading-tight mb-8">
                            Cost to Paint the <span className="text-brand-green italic">Exterior</span> of a House in Spokane
                        </h1>
                        <p className="text-xl text-gray-300 leading-relaxed font-medium">
                            Protecting your home from Spokane's extreme seasonal shifts—from sub-zero winters to triple-digit summers—starts with a resilient exterior paint system. In 2026, the local cost for an exterior repaint ranges from <strong>$3,500 to $9,500+</strong>. This guide demystifies exactly where every dollar goes.
                        </p>
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-4 py-20">
                <article className="max-w-4xl mx-auto">
                    
                    {/* Executive Summary */}
                    <div className="bg-brand-gray/30 border-l-8 border-brand-green p-8 rounded-r-3xl mb-16">
                        <h2 className="text-2xl font-bold font-poppins mb-4">The Quick Estimate (2026 Averages)</h2>
                        <ul className="space-y-3 m-0 pl-0 list-none">
                            <li className="flex items-center gap-3"><CheckCircle className="text-brand-green w-5 h-5 shrink-0" /> <strong>Single-Story Rancher:</strong> $3,500 – $5,500</li>
                            <li className="flex items-center gap-3"><CheckCircle className="text-brand-green w-5 h-5 shrink-0" /> <strong>Two-Story Home:</strong> $6,000 – $9,500</li>
                            <li className="flex items-center gap-3"><CheckCircle className="text-brand-green w-5 h-5 shrink-0" /> <strong>Historic/Complex Architecture:</strong> $8,000 – $15,000+</li>
                        </ul>
                        <p className="mt-4 text-sm text-gray-600 italic">Prices vary heavily based on siding condition, lead paint presence, and accessibility.</p>
                    </div>

                    <div className="prose prose-lg prose-brand max-w-none">
                        
                        <h2 className="text-3xl font-bold font-poppins mb-6">Why Spokane's Climate Demands a Premium Paint Job</h2>
                        <p>
                            If you lived in mild Southern California, a standard coat of builder-grade paint might last over a decade. But the <strong>Inland Northwest is a stress-test for exterior coatings</strong>. 
                        </p>
                        <p>
                            Spokane experiences severe freeze-thaw cycles. During winter, moisture penetrates tiny cracks in older paint. When temperatures drop below freezing, that moisture turns to ice and expands, literally pushing the paint off the siding. In the summer, intense UV radiation breaks down the chemical binders in the paint, leading to chalking and severe fading on south and west-facing walls.
                        </p>
                        <div className="grid md:grid-cols-2 gap-6 my-8">
                            <div className="bg-blue-50/50 border border-blue-100 p-6 rounded-2xl">
                                <ThermometerSnowflake className="text-blue-500 w-10 h-10 mb-4" />
                                <h4 className="font-bold text-lg mb-2">Winter: Freeze-Thaw</h4>
                                <p className="text-sm text-gray-600 m-0">Requires highly elastic, breathable acrylic paints that can flex with the siding as it expands and shrinks.</p>
                            </div>
                            <div className="bg-orange-50/50 border border-orange-100 p-6 rounded-2xl">
                                <Sun className="text-orange-500 w-10 h-10 mb-4" />
                                <h4 className="font-bold text-lg mb-2">Summer: UV Degradation</h4>
                                <p className="text-sm text-gray-600 m-0">Requires premium UV-blocking pigments, especially for darker 2026 color trends like charcoal or forest green.</p>
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold font-poppins mb-6 mt-16">Exterior Pricing Breakdown by Siding Type</h2>
                        <p>
                            Every neighborhood in Spokane presents a different siding footprint. A cedar-shake craftsman on the South Hill requires vastly different preparation and coatings than a vinyl-sided build in Airway Heights. Here is how your siding material dictates your estimate.
                        </p>
                        
                        <div className="overflow-x-auto my-8 rounded-2xl border border-gray-200 shadow-sm">
                            <table className="w-full text-left m-0">
                                <thead className="bg-gray-50 border-b border-gray-200">
                                    <tr>
                                        <th className="p-5 font-bold">Siding Material</th>
                                        <th className="p-5 font-bold">2026 Average Cost</th>
                                        <th className="p-5 font-bold">Lifespan Expectancy</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="p-5 font-medium">Wood / Cedar</td>
                                        <td className="p-5 font-bold text-brand-green">$4,500 – $8,500</td>
                                        <td className="p-5 text-gray-600">7-10 Years</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="p-5 font-medium">Stucco</td>
                                        <td className="p-5 font-bold text-brand-green">$5,000 – $9,000</td>
                                        <td className="p-5 text-gray-600">10-12 Years</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="p-5 font-medium">Vinyl (Refresh)</td>
                                        <td className="p-5 font-bold text-brand-green">$3,500 – $5,500</td>
                                        <td className="p-5 text-gray-600">10+ Years</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="p-5 font-medium">Fiber Cement (Hardie)</td>
                                        <td className="p-5 font-bold text-brand-green">$4,000 – $7,500</td>
                                        <td className="p-5 text-gray-600">10-15 Years</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="text-sm text-gray-500 italic mt-2">Note: Stucco commands a higher price because its porous nature requires specialized, high-build elastomeric coatings to bridge hairline cracks.</p>

                        <h2 className="text-3xl font-bold font-poppins mb-6 mt-16">The "Hidden" Costs: Preparation and Accessibility</h2>
                        <p>
                            When homeowners receive wildly varying quotes—say, one for $3,500 and one for $7,500—the difference rarely lies in the paint brand. The difference is <strong>preparation</strong>.
                        </p>
                        <p>
                             In the industry, we say, "The paint is only as good as what's underneath it." If a contractor paints over failing, flaking lead paint without scraping and neutralizing the surface, the new paint will fail within 18 months.
                        </p>

                        <h3 className="text-2xl font-bold mt-8 mb-4">1. Extensive Scraping and Sanding</h3>
                        <p>
                            Older Spokane homes often have layers of failing oil-based paints. Safely scraping this away, capturing the hazardous chips, and using HEPA-filtered sanders to feather out the harsh transitions is incredibly labor-intensive. It can comprise 50% to 70% of the total labor cost.
                        </p>

                        <h3 className="text-2xl font-bold mt-8 mb-4">2. Accessibility and Height Limitations</h3>
                        <p>
                            Painting a sprawling single-story rancher in Spokane Valley is straightforward because it can mostly be painted from the ground. Conversely, a tall two-story home built into a steep hill in the Rockwood neighborhood requires significant ladder work, staging, or even mechanical lifts. Working at heights safely slows down production by roughly 40%, directly increasing labor costs.
                        </p>

                        <h3 className="text-2xl font-bold mt-8 mb-4">3. Lead Paint Compliance (Pre-1978 Homes)</h3>
                        <div className="bg-red-50 border border-red-100 p-6 rounded-2xl flex gap-4 my-6">
                            <AlertTriangle className="text-red-500 shrink-0 mt-1" />
                            <div>
                                <h4 className="font-bold text-red-800 mb-1">EPA RRP Rule Impact</h4>
                                <p className="text-sm text-red-900 m-0">If your home was built before 1978, federal law dictates strict lead-safe practices. Contractors must set up specialized plastic containment, wear protective tyvek suits, and meticulously dispose of debris. This mandatory safety protocol adds an average of 15-25% to the total project cost.</p>
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold font-poppins mb-6 mt-16">Top 2026 Exterior Paint Color Trends in Spokane</h2>
                        <p>
                            If you are investing in an exterior repaint, you want a color scheme that enhances your curb appeal and property value. In 2026, the Pacific Northwest design aesthetic is heavily shifting toward nature-inspired, grounded tones:
                        </p>
                        <ul className="space-y-3">
                            <li><strong>Warm, Earthy Neutrals:</strong> We are seeing a mass exodus from cold, sterile grays. Homeowners are requesting warm creamy whites (like Alabaster), mushroom tones, and soft khakis that pair beautifully with natural wood accents.</li>
                            <li><strong>Deep, Moody Greens & Blues:</strong> Forest green, sage, and deep navy are exceptionally popular for Craftsman homes. These colors make white trim pop aggressively and harmonize with surrounding pine trees.</li>
                            <li><strong>High-Contrast Trim:</strong> While white trim remains classic, many modern remodels are utilizing matte black or charcoal gray trim around windows and fascia to achieve a sharp, architectural look.</li>
                        </ul>

                        <h2 className="text-3xl font-bold font-poppins mb-6 mt-16">Frequently Asked Questions</h2>
                        <div className="space-y-6 mb-16" id="faq">
                            {faqs.map((faq, index) => (
                                <div key={index} className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-brand-green/30 transition-colors">
                                    <h4 className="font-bold text-lg mb-3 flex items-start gap-3">
                                        <span className="w-6 h-6 rounded-full bg-brand-green text-white flex items-center justify-center text-xs shrink-0 mt-0.5">Q</span>
                                        {faq.question}
                                    </h4>
                                    <p className="text-gray-600 pl-9 font-medium mb-0">{faq.answer}</p>
                                </div>
                            ))}
                        </div>
                        
                        <AuthorBio />

                        <section className="my-16 flex flex-col md:flex-row gap-0 items-stretch bg-brand-black text-white rounded-[3rem] overflow-hidden shadow-2xl">
                            <div className="flex-1 p-10 md:p-14 flex flex-col justify-center relative">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-green/10 blur-[100px]" />
                                <h3 className="text-3xl font-bold mb-4 relative z-10">Want an Exact Bid for Your Exterior?</h3>
                                <p className="text-gray-400 mb-8 relative z-10 text-lg leading-relaxed">
                                    Stop relying on national averages. We evaluate your specific siding condition, measure the exact square footage, and provide a firm, iron-clad estimate within 24 hours of our site visit.
                                </p>
                                <a href={`tel:${phoneNumber}`} className="inline-flex items-center justify-center gap-2 bg-brand-green text-white px-8 py-5 rounded-2xl font-bold text-lg hover:bg-green-600 transition-all self-start shadow-xl shadow-green-500/20 relative z-10">
                                    <PhoneIcon /> CALL {phoneNumber}
                                </a>
                            </div>
                            <div className="hidden md:block w-2/5 relative">
                                <img 
                                    src="/exterior.webp" 
                                    alt="Full exterior painting project in Spokane WA" 
                                    className="absolute inset-0 w-full h-full object-cover" 
                                />
                            </div>
                        </section>

                        <RelatedTopics topics={relatedTopics} />
                    </div>
                </article>
            </main>

            <StickyMobileCTA />
            <Footer />
        </div>
    );
};

// Quick inline component to fix import ease 
const PhoneIcon = () => (
   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
);

export default ExteriorPaintingCost;
