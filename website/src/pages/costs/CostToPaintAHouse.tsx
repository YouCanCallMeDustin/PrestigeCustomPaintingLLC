import { SITE_INFO } from '../../lib/constants';
import SEOHead from '../../components/SEOHead';
import Breadcrumbs from '../../components/Breadcrumbs';
import AuthorBio from '../../components/AuthorBio';
import StickyMobileCTA from '../../components/StickyMobileCTA';
import RelatedTopics from '../../components/RelatedTopics';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { generateFAQSchema, generateLocalBusinessSchema, generateBreadcrumbSchema, generateArticleSchema } from '../../lib/schemaGenerator';
import { DollarSign, Home, PaintBucket, Clock, ArrowRight, Star } from 'lucide-react';

const CostToPaintAHouse = () => {
    const { phoneNumber, email, ownerName } = SITE_INFO;
    
    // Schema Data
    const faqs = [
        {
            question: "How much does it cost to paint a 2,000 sq ft house?",
            answer: "In Spokane, painting a 2,000 sq ft house typically costs between $3,500 and $7,500 for the exterior, and $4,500 to $9,000 for the interior, depending on the number of colors, prep work required, and material quality."
        },
        {
            question: "Is it cheaper to paint a house yourself?",
            answer: "While DIY saves on labor (which is about 70-80% of a professional quote), you must factor in the cost of high-quality paint, specialized tools, ladders, and your own time. Professionals often achieve a more durable finish that lasts twice as long, saving you money in the long run."
        },
        {
            question: "How much do painters charge per hour in Spokane?",
            answer: "Professional painters in the Spokane area typically charge between $50 and $90 per hour per worker. This rate covers skilled labor, insurance, overhead, and premium tools. Most reputable companies provide flat-rate estimates based on the total scope of work."
        },
        {
            question: "What factors affect the price of house painting?",
            answer: "The primary factors include total square footage, the condition of the surfaces (prep work), the height of the building (ladder/lift work), the number of colors used, and the quality of the paint product selected."
        },
        {
            question: "How long does a professional paint job last?",
            answer: "A high-quality professional exterior paint job in Spokane's climate should last 7 to 10 years. Interior paint can last 15+ years, though many homeowners choose to refresh colors every 5 to 7 years."
        }
    ];

    const breadcrumbItems = [
        { name: "Pricing Guides", path: "/cost-to-paint-a-house" },
        { name: "Cost to Paint a House", path: "/cost-to-paint-a-house" }
    ];

    const schemas = [
        { id: 'faq', data: generateFAQSchema(faqs) },
        { id: 'local-business', data: generateLocalBusinessSchema() },
        { id: 'breadcrumbs', data: generateBreadcrumbSchema(breadcrumbItems) },
        { 
            id: 'article', 
            data: generateArticleSchema({
                topic: "How Much Does It Cost to Paint a House in 2026? (Spokane Guide)",
                description: "The ultimate guide to house painting costs in Spokane, WA. Compare interior and exterior pricing, hourly rates, and factors that affect your estimate.",
                image: "https://prestigecustompaintingllc.com/exterior.png",
                datePublished: "2026-03-27",
                dateModified: "2026-03-27",
                authorName: ownerName,
                url: "https://prestigecustompaintingllc.com/cost-to-paint-a-house"
            }) 
        }
    ];

    const relatedTopics = [
        {
            topic: "Exterior Painting Costs",
            path: "/cost-to-paint-house-exterior",
            description: "Detailed breakdown of siding, trim, and preparation costs for Spokane exteriors."
        },
        {
            topic: "Interior Painting Costs",
            path: "/cost-to-paint-house-interior",
            description: "How much to budget for walls, ceilings, and trim throughout your home."
        },
        {
            topic: "Cabinet Painting Pricing",
            path: "/cost-to-paint-kitchen-cabinets",
            description: "Transform your kitchen for a fraction of the cost of new cabinets."
        }
    ];

    return (
        <div className="min-h-screen bg-white text-brand-black">
            <SEOHead 
                seoTitle="How Much Does It Cost to Paint a House in Spokane? (2026 Guide)"
                description="Discover accurate house painting costs in Spokane, WA. Our comprehensive 2026 guide covers interior, exterior, labor rates, and square foot pricing estimates."
                path="/cost-to-paint-a-house"
                schemas={schemas}
            />
            <Navbar />

            <header className="bg-brand-black pt-28 pb-16 md:pt-36 md:pb-24 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-green/10 -skew-x-12 transform translate-x-32" />
                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <Breadcrumbs items={breadcrumbItems} variant="light" />
                    
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-green/10 text-brand-green text-sm font-bold mb-6">
                            <DollarSign size={16} /> UPDATED FOR 2026
                        </div>
                        <h1 className="text-4xl md:text-6xl font-poppins font-bold leading-tight mb-8">
                            How Much Does It Cost to <span className="text-brand-green">Paint a House</span> in Spokane?
                        </h1>
                        <p className="text-xl text-gray-300 leading-relaxed font-medium">
                            If you're planning a home refresh in the Inland Northwest, the question isn't just "how much," but "what am I getting for my investment?" In 2026, professional painting costs in Spokane have shifted due to material innovations and labor trends. This guide breaks down every variable to help you budget accurately.
                        </p>
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-4 py-20">
                <article className="max-w-4xl">

                    {/* Quick Answer Box */}
                    <div className="bg-brand-black text-white p-8 rounded-[2rem] mb-16 relative overflow-hidden shadow-2xl">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-green/20 blur-3xl" />
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                            <Clock className="text-brand-green" /> The Quick Answer
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                            <div>
                                <p className="text-gray-400 text-sm uppercase tracking-widest font-bold mb-2">Exterior Average</p>
                                <p className="text-3xl font-bold text-brand-green">$3,500 – $8,500</p>
                                <p className="text-sm text-gray-400 mt-2">Typical 3-bed partial/full repaint</p>
                            </div>
                            <div>
                                <p className="text-gray-400 text-sm uppercase tracking-widest font-bold mb-2">Interior Average</p>
                                <p className="text-3xl font-bold text-brand-green">$4,000 – $9,000</p>
                                <p className="text-sm text-gray-400 mt-2">Full interior (walls & trim)</p>
                            </div>
                        </div>
                        <div className="mt-8 pt-8 border-t border-white/10">
                            <a href={`tel:${phoneNumber}`} className="inline-flex items-center gap-2 bg-brand-green text-white px-8 py-4 rounded-xl font-bold hover:bg-green-600 transition-all">
                                GET A FIRM ESTIMATE <ArrowRight size={18} />
                            </a>
                        </div>
                    </div>

                    <div className="prose prose-lg prose-brand max-w-none">
                        <h2 className="text-3xl font-bold font-poppins mb-6">Understanding the "Cost vs. Value" of Spokane Painting</h2>
                        <p>
                            When you search for "cost to paint a house," you'll see national averages from sites like Angi or HomeAdvisor. However, Spokane's market is unique. Our local weather—from scorching 100-degree summers to freezing, damp winters—demands a higher technical standard for exterior work. Cheap paint that works in San Diego will peel in two years on a house in the South Hill or Liberty Lake.
                        </p>
                        <p>
                            At Prestige Custom Painting LLC, we focus on <strong>Topical Authority</strong>. We don't just "slap on paint"; we engineer a protective barrier for your home. This means our pricing includes the heavy prep work required to handle the Inland Northwest climate.
                        </p>

                        <h2 className="text-3xl font-bold font-poppins mb-6 mt-12">Average Pricing by Project Type (2026 Rankings)</h2>
                        
                        {/* Pricing Table */}
                        <div className="overflow-x-auto my-10 rounded-2xl border border-gray-100 shadow-sm">
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="p-4 font-bold text-brand-black border-b border-gray-100">Project Type</th>
                                        <th className="p-4 font-bold text-brand-black border-b border-gray-100">Price Range (Est.)</th>
                                        <th className="p-4 font-bold text-brand-black border-b border-gray-100">Key Deliverables</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="p-4 border-b border-gray-50">Single Room (Walls)</td>
                                        <td className="p-4 border-b border-gray-50 font-bold">$450 – $750</td>
                                        <td className="p-4 border-b border-gray-50 text-sm">2 coats, minor patching, trim not incl.</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 border-b border-gray-50">Interior (Full Home)</td>
                                        <td className="p-4 border-b border-gray-50 font-bold">$4,500 – $10k+</td>
                                        <td className="p-4 border-b border-gray-50 text-sm">Walls, Trim, Ceilings, Doors.</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 border-b border-gray-50">Exterior (Rancher)</td>
                                        <td className="p-4 border-b border-gray-50 font-bold">$3,500 – $5,500</td>
                                        <td className="p-4 border-b border-gray-50 text-sm">Power wash, scrape, caulk, 2 coats.</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 border-b border-gray-50">Exterior (Two-Story)</td>
                                        <td className="p-4 border-b border-gray-50 font-bold">$6,000 – $9,500</td>
                                        <td className="p-4 border-b border-gray-50 text-sm">Includes ladder work & complex trim.</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 border-b border-gray-50">Kitchen Cabinets</td>
                                        <td className="p-4 border-b border-gray-50 font-bold">$3,500 – $6,000</td>
                                        <td className="p-4 border-b border-gray-50 text-sm">Factory finish, high-durability enamel.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h2 className="text-3xl font-bold font-poppins mb-6 mt-12">The 5 Core Factors That Drive Your Quote</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
                            <div className="flex gap-4 p-6 bg-white border border-gray-100 rounded-2xl">
                                <Home className="text-brand-green shrink-0" size={24} />
                                <div>
                                    <h4 className="font-bold mb-2">Square Footage & Complexity</h4>
                                    <p className="text-sm text-gray-600">Total paintable surface area is the foundation of any quote. We also factor in architectural detail—crown molding or Victorian-style trim takes more time than flat walls.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 p-6 bg-white border border-gray-100 rounded-2xl">
                                <PaintBucket className="text-brand-green shrink-0" size={24} />
                                <div>
                                    <h4 className="font-bold mb-2">Surface Condition (Prep)</h4>
                                    <p className="text-sm text-gray-600">The "meat" of the cost is often the prep. If your house has peeling lead paint or rotted wood siding, the labor to fix these before painting increases the price but ensures longevity.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 p-6 bg-white border border-gray-100 rounded-2xl">
                                <PaintBucket className="text-brand-green shrink-0" size={24} />
                                <div>
                                    <h4 className="font-bold mb-2">Material Quality</h4>
                                    <p className="text-sm text-gray-600">We exclusively use premium products like Sherwin-Williams Emerald or Benjamin Moore Scuff-X. These cost more per gallon but provide superior coverage and scuff resistance.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 p-6 bg-white border border-gray-100 rounded-2xl">
                                <Clock className="text-brand-green shrink-0" size={24} />
                                <div>
                                    <h4 className="font-bold mb-2">Labor & Expertise</h4>
                                    <p className="text-sm text-gray-600">In Spokane, skilled labor rates reflect the cost of living and insurance. You are paying for a crew that is licensed, bonded, and has decades of local experience.</p>
                                </div>
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold font-poppins mb-6 mt-12">DIY vs. Hiring a Professional: Is it Worth the Savings?</h2>
                        <p>
                            Many Spokane homeowners consider DIY to save money. On paper, you save 70% of the cost. However, a professional painter like Prestige Custom Painting LLC brings thousands of dollars in specialized equipment (sprayers, scaffolding, high-reach ladders) and the technique to apply paint without brush marks or laps.
                        </p>
                        <p>
                            <strong>Pro Tip:</strong> If you DIY, your "labor" is free, but your time isn't. An average exterior job takes a pro crew 4-6 days. A DIY homeowner might spend 4-6 <em>weekends</em> on the same task.
                        </p>

                        <h2 className="text-3xl font-bold font-poppins mb-6 mt-16">Frequently Asked Questions</h2>
                        <div className="space-y-6 mb-16">
                            {faqs.map((faq, index) => (
                                <div key={index} className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                                    <h4 className="font-bold text-lg mb-3 flex items-start gap-3">
                                        <span className="w-6 h-6 rounded-full bg-brand-green text-white flex items-center justify-center text-xs shrink-0 mt-0.5">Q</span>
                                        {faq.question}
                                    </h4>
                                    <p className="text-gray-600 pl-9 font-medium">{faq.answer}</p>
                                </div>
                            ))}
                        </div>

                        <AuthorBio />
                        
                        <div className="my-16 flex items-center justify-center">
                            <div className="flex flex-col items-center gap-6 text-center max-w-2xl p-10 bg-brand-green rounded-[3rem] text-white shadow-2xl shadow-green-500/20">
                                <div className="flex gap-1">
                                    {[...Array(5)].map((_, i) => <Star key={i} size={24} fill="currentColor" />)}
                                </div>
                                <h3 className="text-3xl font-bold">Ready for a Precise Quote?</h3>
                                <p className="text-lg opacity-90 font-medium">Don't guess on your home's value. We provide detailed, no-obligation estimates across all of Spokane County.</p>
                                <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                                    <a href={`tel:${phoneNumber}`} className="bg-brand-black text-white px-10 py-5 rounded-2xl font-bold text-xl hover:scale-105 transition-transform">
                                        {phoneNumber}
                                    </a>
                                    <a href={`mailto:${email}`} className="bg-white text-brand-green px-10 py-5 rounded-2xl font-bold text-xl hover:scale-105 transition-transform">
                                        EMAIL US
                                    </a>
                                </div>
                            </div>
                        </div>

                        <RelatedTopics topics={relatedTopics} />
                    </div>
                </article>
            </main>

            <StickyMobileCTA />
            <Footer />
        </div>
    );
};

export default CostToPaintAHouse;
