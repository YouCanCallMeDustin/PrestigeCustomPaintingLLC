import { SITE_INFO } from '../../lib/constants';
import SEOHead from '../../components/SEOHead';
import Breadcrumbs from '../../components/Breadcrumbs';
import AuthorBio from '../../components/AuthorBio';
import StickyMobileCTA from '../../components/StickyMobileCTA';
import RelatedTopics from '../../components/RelatedTopics';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { generateFAQSchema, generateBreadcrumbSchema, generateHowToSchema, generateArticleSchema } from '../../lib/schemaGenerator';
import { Clock, DollarSign, Shield, AlertTriangle, Scale, Wrench, Package } from 'lucide-react';
import React from 'react';

const DiyVsProfessionalCost: React.FC = () => {
    const { phoneNumber, ownerName } = SITE_INFO;
    
    // Schema Data
    const faqs = [
        {
            question: "Is it really cheaper to paint your house yourself?",
            answer: "Only if you value your time at $0. When you factor in the cost of high-quality sprayers, scaffolding, paint, and the weeks of labor, many Spokane homeowners find that hiring a professional crew is more cost-effective when the 10-year durability of the finish is considered."
        },
        {
            question: "What are the biggest risks of DIY exterior painting?",
            answer: "In the Inland Northwest, improper preparation and poor paint choice are the biggest risks. DIY jobs often peel within 2-3 years because the surface wasn't properly deglossed or the wrong primer was used for our intense freeze-thaw climate."
        },
        {
            question: "Can I save money by doing the painting prep work myself?",
            answer: "We generally discourage this. Professional preparation accounts for 70% of the long-term quality. Because professional painters warranty their work, they need to ensure the scraping, sanding, and caulking meet structural standards, and therefore must usually do it themselves."
        },
        {
            question: "How much does a DIY painting project cost in materials?",
            answer: "For a standard 2,000 sq ft home, a DIYer will spend between $1,200 and $1,800 on premium paint, primer, and caulk, plus an additional $500 to $1,000 on tool rental or purchase (sprayers, extension ladders, etc.)."
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
            { name: "Price the Equipment", text: "High-grade airless sprayers and brushes cost $500+. Compare this 'one-time use' cost to the labor portion of a professional bid." },
            { name: "Evaluate Your Timeline", text: "Professionals take 3-5 days. Be honest with yourself about whether you are willing to spend 3-4 consecutive weekends on this project." }
        ]
    };

    const schemas = [
        { id: 'faq', data: generateFAQSchema(faqs) },
        { id: 'howto', data: generateHowToSchema(howToData) },
        { id: 'breadcrumbs', data: generateBreadcrumbSchema(breadcrumbItems) },
        { id: 'article', data: generateArticleSchema({
            topic: "DIY vs. Hiring a Professional Painter: The Real 2026 Cost",
            description: "Is DIY painting worth the money? We compare material costs, labor hours, and the hidden expenses of DIY vs. professional painting for Spokane homeowners.",
            image: "https://prestigecustompaintingllc.com/exterior.webp",
            datePublished: "2026-04-10",
            dateModified: "2026-04-24",
            authorName: ownerName,
            url: "https://prestigecustompaintingllc.com/diy-vs-hiring-a-painter"
        })}
    ];

    const relatedTopics = [
        {
            topic: "Cost to Paint a House Exterior",
            path: "/cost-to-paint-house-exterior",
            description: "Detailed pricing for exterior-specific challenges in our local climate."
        },
        {
            topic: "Interior Painting Costs",
            path: "/cost-to-paint-house-interior",
            description: "How much to budget for walls, ceilings, and trim in Spokane."
        },
        {
            topic: "Painter Hourly Rates",
            path: "/how-much-do-painters-charge-per-hour",
            description: "Breakdown of the labor costs included in a professional bid."
        }
    ];

    return (
        <div className="min-h-screen bg-white text-brand-black">
            <SEOHead 
                seoTitle="DIY vs Professional Painter Cost Comparison (2026 Guide)"
                description="Is DIY house painting worth it? Compare 2026 material costs, labor hours, and hidden equipment expenses against professional painting estimates in Spokane."
                path="/diy-vs-hiring-a-painter"
                schemas={schemas}
            />
            <Navbar />

            <header className="bg-brand-black pt-28 pb-16 md:pt-36 md:pb-24 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-green/10 -skew-x-12 transform translate-x-32" />
                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <Breadcrumbs items={breadcrumbItems} variant="light" />
                    
                    <div className="max-w-4xl mt-6">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-green/10 text-brand-green text-sm font-bold mb-6 border border-brand-green/20">
                            <Scale size={16} /> FINANCIAL ANALYSIS
                        </div>
                        <h1 className="text-4xl md:text-6xl font-poppins font-bold leading-tight mb-8">
                            DIY vs. Professional Painting: <span className="text-brand-green italic">The Real Cost</span>
                        </h1>
                        <p className="text-xl text-gray-300 leading-relaxed font-medium">
                            It's tempting to watch a 10-minute YouTube tutorial and assume that "doing it yourself" will save you thousands of dollars. But when you legitimately calculate the cost of professional-grade equipment, premium materials, the risk of injury, and the brutal value of your weekends, the financial gap narrows significantly. 
                        </p>
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-4 py-20">
                <article className="max-w-4xl mx-auto">

                    <div className="prose prose-lg prose-brand max-w-none">
                        
                        <h2 className="text-3xl font-bold font-poppins mb-6">The "Weekend Warrior" Math for 2026</h2>
                        <p>
                            Let's look at an objective financial breakdown of a standard 2,000 sq ft exterior repaint in Spokane, Washington. National hardware stores heavily market the narrative that painting is cheap. While the paint itself is a relatively small expense, the <em>process</em> of painting correctly is where costs accumulate.
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
                            {/* DIY Column */}
                            <div className="p-8 bg-red-50 rounded-[2rem] border border-red-100 shadow-sm relative overflow-hidden">
                                <div className="absolute top-0 right-0 bg-red-100 text-red-800 px-4 py-1 rounded-bl-2xl font-bold text-xs tracking-widest">DIY</div>
                                <h4 className="text-red-800 font-bold text-2xl mb-6">The DIY Route</h4>
                                <ul className="space-y-4 list-none p-0">
                                    <li className="flex items-start gap-4 border-b border-red-100 pb-3">
                                        <Package className="text-red-400 shrink-0 mt-1" />
                                        <div>
                                            <strong className="block text-red-900">Materials: $1,200 – $1,800</strong>
                                            <span className="text-sm text-red-700">Premium paint, elastomeric caulk, masking tape, and primer.</span>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-4 border-b border-red-100 pb-3">
                                        <Wrench className="text-red-400 shrink-0 mt-1" />
                                        <div>
                                            <strong className="block text-red-900">Tool Rental/Purchase: $600 – $1,000</strong>
                                            <span className="text-sm text-red-700">Power washer rental, airless sprayer purchase, 28ft ladders, drop cloths.</span>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-4 pb-3">
                                        <Clock className="text-red-400 shrink-0 mt-1" />
                                        <div>
                                            <strong className="block text-red-900">Your Labor: 80 – 120 Hours</strong>
                                            <span className="text-sm text-red-700">Approximately 4 full weekends of grueling prep and spray time.</span>
                                        </div>
                                    </li>
                                </ul>
                                <div className="mt-6 pt-6 border-t border-red-200">
                                    <p className="font-bold text-red-900 m-0">Total Out-of-Pocket: ~$2,500 <br/> Total Time: 1 Month of Weekends</p>
                                </div>
                            </div>

                            {/* Professional Column */}
                            <div className="p-8 bg-brand-green/10 rounded-[2rem] border border-brand-green/20 shadow-sm relative overflow-hidden">
                                <div className="absolute top-0 right-0 bg-brand-green text-white px-4 py-1 rounded-bl-2xl font-bold text-xs tracking-widest">PRO</div>
                                <h4 className="text-brand-green font-bold text-2xl mb-6">The Professional Route</h4>
                                <ul className="space-y-4 list-none p-0">
                                    <li className="flex items-start gap-4 border-b border-brand-green/20 pb-3">
                                        <DollarSign className="text-brand-green shrink-0 mt-1" />
                                        <div>
                                            <strong className="block text-brand-black">Project Price: $4,500 – $7,500</strong>
                                            <span className="text-sm text-gray-600">Fully inclusive of materials, labor, specialized tools, and taxes.</span>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-4 border-b border-brand-green/20 pb-3">
                                        <Shield className="text-brand-green shrink-0 mt-1" />
                                        <div>
                                            <strong className="block text-brand-black">Warranty & Insurance</strong>
                                            <span className="text-sm text-gray-600">Multi-year protection against peeling, and full liability coverage.</span>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-4 pb-3">
                                        <Clock className="text-brand-green shrink-0 mt-1" />
                                        <div>
                                            <strong className="block text-brand-black">Your Labor: 0 Hours</strong>
                                            <span className="text-sm text-gray-600">You don't lift a finger. Keep your weekends for your family.</span>
                                        </div>
                                    </li>
                                </ul>
                                <div className="mt-6 pt-6 border-t border-brand-green/20">
                                    <p className="font-bold text-brand-black m-0">Total Out-of-Pocket: ~$6,000 avg <br/> Total Time: 3-5 Days</p>
                                </div>
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold font-poppins mb-6 mt-16">The Hidden "Cost" of DIY Mistakes in Spokane</h2>
                        <p>
                            The mathematical difference between the two routes above is roughly $3,500. For many homeowners, saving $3,500 is a highly motivating factor. However, this assumes the DIY job is executed <strong>flawlessly</strong>.
                        </p>
                        <p>
                            In Spokane's extreme climate—where winter temperatures plunge below freezing and summer days cross 100 degrees—exterior paint is put to the ultimate test. If a DIYer fails to properly degloss the original surface, or paints when the dew point is too high, the paint will suffer from catastrophic adhesion failure. 
                        </p>
                        <p className="font-bold underline text-red-600">
                            To fix a failed DIY paint job, a professional must completely strip the house down to the bare substrate. This turns a $6,000 professional repaint into a $12,000+ restoration nightmare.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
                            <div className="flex flex-col gap-4 p-6 bg-gray-50 border border-gray-200 rounded-3xl hover:shadow-lg transition-shadow">
                                <AlertTriangle className="text-amber-500 w-10 h-10" />
                                <div>
                                    <h4 className="font-bold text-lg mb-2">Safety and Liability Risks</h4>
                                    <p className="text-gray-600 text-sm leading-relaxed m-0">Ladder falls are the number one cause of home improvement hospitalizations. Balancing 20 feet in the air with a spray gun is highly dangerous. Professionals carry million-dollar liability and workman's comp policies.</p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-4 p-6 bg-gray-50 border border-gray-200 rounded-3xl hover:shadow-lg transition-shadow">
                                <Shield className="text-brand-green w-10 h-10" />
                                <div>
                                    <h4 className="font-bold text-lg mb-2">The Lead Paint Menace</h4>
                                    <p className="text-gray-600 text-sm leading-relaxed m-0">If your home was built prior to 1978, scraping it without full EPA-regulated containment protocols will expose your yard and your family to highly toxic lead dust.</p>
                                </div>
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold font-poppins mb-6 mt-16">When SHOULD You DIY?</h2>
                        <p>
                            We aren't inherently anti-DIY. For the right project, rolling up your sleeves is incredibly rewarding. As a professional contractor, here is where we genuinely recommend you tackle the job yourself:
                        </p>
                        <ul>
                            <li><strong>Interior Accent Walls:</strong> These are low risk, high reward. If you mess up, you only have to sand down one wall.</li>
                            <li><strong>Single Story Interiors:</strong> A small guest bedroom or office is perfectly manageable to prep and paint in a single weekend.</li>
                            <li><strong>Fences and Decks:</strong> Staining a ground-level fence requires a pressure washer and a roller. It's labor-intensive but bears zero risk of falling off a ladder or getting overspray on your neighbor's car.</li>
                        </ul>
                        <p>
                            Conversely, we strictly recommend <strong>against</strong> DIYing multi-story exteriors, kitchen cabinets (which require industrial spray setups for a factory finish), and vaulted interior ceilings.
                        </p>

                        <h2 className="text-3xl font-bold font-poppins mb-6 mt-16">Frequently Asked Questions</h2>
                        <div className="space-y-6 mb-16" id="faq">
                            {faqs.map((faq, index) => (
                                <div key={index} className="p-6 bg-white border border-gray-200 rounded-2xl hover:border-brand-green/40 transition-colors shadow-sm">
                                    <h4 className="font-bold text-lg mb-3 flex items-start gap-3">
                                        <span className="w-6 h-6 rounded-full bg-brand-green text-white flex items-center justify-center text-xs shrink-0 mt-0.5 font-poppins">Q</span>
                                        {faq.question}
                                    </h4>
                                    <p className="text-gray-600 pl-9 font-medium mb-0">{faq.answer}</p>
                                </div>
                            ))}
                        </div>

                        <AuthorBio />
                        
                        <section className="my-16 bg-brand-black p-10 md:p-16 rounded-[3rem] text-white text-center shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-green/20 blur-[100px]" />
                            <div className="relative z-10 max-w-2xl mx-auto">
                                <h3 className="text-3xl md:text-5xl font-poppins font-bold mb-6 italic">Skip the stress. Save your weekends.</h3>
                                <p className="text-xl text-gray-400 mb-10 leading-relaxed">
                                    Before you spend $1,000 on sprayers and ladders at the hardware store, let us give you a free, no-obligation quote. You might be surprised at how affordable peace of mind is.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <a href={`tel:${phoneNumber}`} className="bg-brand-green text-white px-10 py-5 rounded-2xl font-bold text-xl hover:scale-105 transition-transform flex items-center justify-center gap-3 shadow-xl shadow-green-500/20">
                                        <Clock size={24} /> SECURE YOUR EXPERT
                                    </a>
                                </div>
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

export default DiyVsProfessionalCost;
