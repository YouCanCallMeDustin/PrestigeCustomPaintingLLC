import { SITE_INFO } from '../../lib/constants';
import SEOHead from '../../components/SEOHead';
import Breadcrumbs from '../../components/Breadcrumbs';
import AuthorBio from '../../components/AuthorBio';
import StickyMobileCTA from '../../components/StickyMobileCTA';
import RelatedTopics from '../../components/RelatedTopics';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { generateFAQSchema, generateBreadcrumbSchema, generateHowToSchema } from '../../lib/schemaGenerator';
import { Clock, DollarSign, Shield, AlertTriangle } from 'lucide-react';

const DiyVsProfessionalCost = () => {
    const { phoneNumber } = SITE_INFO;
    
    // Schema Data
    const faqs = [
        {
            question: "Is it really cheaper to paint your house yourself?",
            answer: "Only if you value your time at $0. When you factor in the cost of high-quality sprayers, scaffolding, paint, and the weeks of labor, many Spokane homeowners find that hiring a professional crew is more cost-effective when the 10-year durability of the finish is considered."
        },
        {
            question: "What are the biggest risks of DIY exterior painting?",
            answer: "In the Inland Northwest, improper preparation and poor paint choice are the biggest risks. DIY jobs often peel within 2-3 years because the surface wasn't properly deglossed or the wrong primer was used for our climate."
        },
        {
            question: "Can I save money by doing the prep work myself?",
            answer: "We generally discourage this. Professional preparation accounts for 70% of the long-term quality. Because we warranty our work, we need to ensure the scraping, sanding, and caulking meet our structural standards."
        }
    ];

    const breadcrumbItems = [
        { name: "Pricing Guides", path: "/cost-to-paint-a-house" },
        { name: "DIY vs. Professional Cost", path: "/diy-vs-hiring-a-painter" }
    ];

    const howToData = {
        name: "How to Decide Between DIY and Professional Painting",
        description: "A step-by-step framework to evaluate if you should tackle your own painting project or hire a professional in Spokane.",
        steps: [
            { name: "Assess the Height", text: "If the project requires a ladder taller than 10 feet, safety risks increase exponentially. We recommend professionals for all multi-story work." },
            { name: "Calculate Prep Time", text: "Measure the amount of peeling paint. If you have more than 10% failure, the prep work will likely take a DIYer 40+ hours." },
            { name: "Price the Equipment", text: "High-grade airless sprayers and brushes cost $500+. Compare this 'one-time use' cost to the labor portion of a professional bid." }
        ]
    };

    const schemas = [
        { id: 'faq', data: generateFAQSchema(faqs) },
        { id: 'howto', data: generateHowToSchema(howToData) },
        { id: 'breadcrumbs', data: generateBreadcrumbSchema(breadcrumbItems) }
    ];

    const relatedTopics = [
        {
            title: "Cost to Paint a House",
            path: "/cost-to-paint-a-house",
            description: "Total project averages for various home sizes in Spokane."
        },
        {
            title: "Painter Hourly Rates",
            path: "/how-much-do-painters-charge-per-hour",
            description: "Breakdown of the labor costs included in a professional bid."
        },
        {
            title: "Exterior Painting Cost",
            path: "/cost-to-paint-house-exterior",
            description: "Detailed pricing for exterior-specific challenges in our local climate."
        }
    ];

    return (
        <div className="min-h-screen bg-white text-brand-black">
            <SEOHead 
                title="DIY House Painting vs. Hiring a Professional (Cost Comparison)"
                description="Is DIY painting worth it? We compare material costs, labor hours, and the 'hidden' expenses of DIY house painting for Spokane homeowners."
                path="/diy-vs-hiring-a-painter"
                schemas={schemas}
            />
            <Navbar />

            <main className="max-w-7xl mx-auto px-4 pt-24 pb-20">
                <Breadcrumbs items={breadcrumbItems} />

                <article className="max-w-4xl">
                    <header className="mb-12">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-green/10 text-brand-green text-xs font-bold mb-6">
                            FINANCIAL ANALYSIS
                        </div>
                        <h1 className="text-4xl md:text-6xl font-poppins font-bold leading-tight mb-8">
                            DIY vs. Professional Painting: <span className="text-brand-green">The Real Cost</span>
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed font-medium">
                            It's tempting to think that "doing it yourself" saves 50% or more. But when you factor in professional-grade equipment, premium materials, and the value of your weekends, the gap narrows significantly. This guide breaks down the math for Spokane residents.
                        </p>
                    </header>

                    <div className="prose prose-lg prose-brand max-w-none">
                        <section className="my-12">
                            <h2 className="text-3xl font-bold font-poppins mb-6">The "Weekend Warrior" Math</h2>
                            <p>
                                Let's look at a standard 2,000 sq ft exterior repaint. 
                            </p>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
                                <div className="p-8 bg-red-50 rounded-3xl border border-red-100">
                                    <h4 className="text-red-600 font-bold text-xl mb-4">The DIY Route (Estimate)</h4>
                                    <ul className="space-y-2 list-none p-0 text-sm">
                                        <li><strong>Materials:</strong> $1,200 – $1,800 (Paint, Caulk, Primer)</li>
                                        <li><strong>Tool Rental/Purchase:</strong> $600 – $1,000 (Sprayer, Ladders)</li>
                                        <li><strong>Your Labor:</strong> 80 – 120 Hours (Prep + Paint)</li>
                                        <li className="pt-4 border-t border-red-200"><strong>Out-of-Pocket:</strong> ~$2,500 + 3 weeks of work.</li>
                                    </ul>
                                </div>
                                <div className="p-8 bg-brand-green/5 rounded-3xl border border-brand-green/10">
                                    <h4 className="text-brand-green font-bold text-xl mb-4">The Professional Route</h4>
                                    <ul className="space-y-2 list-none p-0 text-sm text-gray-700">
                                        <li><strong>Full Project Price:</strong> $4,500 – $7,500</li>
                                        <li><strong>Warranty:</strong> 5-10 Year Protection</li>
                                        <li><strong>Your Labor:</strong> 0 Hours (Worry-free)</li>
                                        <li className="pt-4 border-t border-brand-green/20"><strong>Timeline:</strong> 3-5 Days (Crew of 3-4)</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <section className="my-12">
                            <h2 className="text-3xl font-bold font-poppins mb-6">The High Cost of DIY Mistakes</h2>
                            <p>
                                In Spokane's climate, a mistake in the preparation phase can be incredibly expensive to fix. If the paint fails due to moisture trapping or poor adhesion, a professional will have to <strong>strip the house down to the bare wood</strong>, which often doubles the cost of a standard repaint.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
                                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                                    <AlertTriangle className="text-amber-500 shrink-0" />
                                    <span className="text-sm"><strong>Ladder Falls:</strong> Leading cause of home improvement injuries.</span>
                                </div>
                                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                                    <Shield className="text-brand-green shrink-0" />
                                    <span className="text-sm"><strong>Liability:</strong> Amateurs lack the insurance that protects your equity.</span>
                                </div>
                            </div>
                        </section>

                        <section className="my-12">
                            <h2 className="text-3xl font-bold font-poppins mb-6">When SHOULD You DIY?</h2>
                            <p>
                                We love a good DIY project too! Here is when we recommend you tackle it yourself:
                            </p>
                            <ul>
                                <li><strong>Interior Accent Walls:</strong> low risk, high reward.</li>
                                <li><strong>Single Bedrooms:</strong> Easy to manage around a 9-5 schedule.</li>
                                <li><strong>Baseboards & Trim:</strong> If you have steady hands and a lot of patience.</li>
                            </ul>
                        </section>

                        <section className="my-16 flex flex-col items-center text-center">
                            <h3 className="text-3xl font-bold mb-6 italic">Skip the stress. Reap the rewards.</h3>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a href={`tel:${phoneNumber}`} className="bg-brand-black text-white px-10 py-5 rounded-2xl font-bold text-xl hover:scale-105 transition-transform flex items-center justify-center gap-2">
                                    <Clock size={24} className="text-brand-green" /> SAVE YOUR WEEKEND
                                </a>
                                <a href="mailto:buddylee12091@gmail.com" className="bg-brand-green text-white px-10 py-5 rounded-2xl font-bold text-xl hover:scale-105 transition-transform flex items-center justify-center gap-2">
                                    <DollarSign size={24} /> GET A QUOTE
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

export default DiyVsProfessionalCost;
