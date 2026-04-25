import { SITE_INFO } from '../../lib/constants';
import SEOHead from '../../components/SEOHead';
import Breadcrumbs from '../../components/Breadcrumbs';
import AuthorBio from '../../components/AuthorBio';
import StickyMobileCTA from '../../components/StickyMobileCTA';
import RelatedTopics from '../../components/RelatedTopics';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { generateFAQSchema, generateBreadcrumbSchema, generateServiceSchema, generateArticleSchema } from '../../lib/schemaGenerator';
import { Shield, CheckCircle, DollarSign, PaintBucket, Home, Clock } from 'lucide-react';
import React from 'react';

const InteriorPaintingCost: React.FC = () => {
    const { phoneNumber, ownerName, email } = SITE_INFO;
    
    // Schema Data
    const faqs = [
        {
            question: "How much does it cost to paint a single room in Spokane?",
            answer: "In 2026, painting a standard 12x12 bedroom (walls only, two coats) typically costs between $450 and $750. If you include the ceiling, baseboards, and window trim, the cost increases to $800 - $1,200 due to the intricate detail work required."
        },
        {
            question: "How much does it cost to paint a 2,000 sq ft house interior?",
            answer: "A full interior repaint of a 2,000 square foot home (including walls, ceilings, and standard trim) ranges from $5,000 to $9,000. Homes with high ceilings, complex wainscoting, or demanding drywall repairs will fall on the higher end of that spectrum."
        },
        {
            question: "What is 'Color Drenching' and does it cost more?",
            answer: "Color drenching is a popular 2026 design trend where the walls, ceiling, and trim are all painted the exact same color (often a dark, moody hue). While it uses one color, it still requires painting three different surfaces, so the labor cost is similar to traditional painting."
        },
        {
            question: "Is paint included in the cost of an estimate?",
            answer: "Yes, at Prestige Custom Painting LLC, all of our estimates are fully inclusive of labor, premium materials (like Benjamin Moore Scuff-X or Sherwin-Williams Emerald), and taxes. There are no hidden trips to the hardware store."
        }
    ];

    const breadcrumbItems = [
        { name: "Pricing Guides", path: "/cost-to-paint-a-house" },
        { name: "Interior Painting Cost", path: "/cost-to-paint-house-interior" }
    ];

    const schemas = [
        { id: 'faq', data: generateFAQSchema(faqs) },
        { id: 'service', data: generateServiceSchema({
            name: "Interior Home Painting",
            description: "Premium interior painting services in Spokane, WA. Specializing in flawless walls, detailed trim painting, and high-end finishes.",
            serviceType: "Interior House Painting"
        }) },
        { id: 'breadcrumbs', data: generateBreadcrumbSchema(breadcrumbItems) },
        { id: 'article', data: generateArticleSchema({
            topic: "Cost to Paint a House Interior in Spokane (2026 Guide)",
            description: "Discover accurate interior house painting costs in Spokane. Learn how room size, trim complexity, and 2026 design trends affect your final estimate.",
            image: "https://prestigecustompaintingllc.com/interior.webp",
            datePublished: "2026-04-10",
            dateModified: "2026-04-24",
            authorName: ownerName,
            url: "https://prestigecustompaintingllc.com/cost-to-paint-house-interior"
        })}
    ];

    const relatedTopics = [
        {
            topic: "Cabinet Painting Pricing",
            path: "/cost-to-paint-kitchen-cabinets",
            description: "Transform your kitchen for a fraction of the cost of new cabinets."
        },
        {
            topic: "5 Pro Interior Painting Tips",
            path: "/blog/interior-painting-tips-spokane",
            description: "Learn the secrets professional painters use for flawless interior results."
        },
        {
            topic: "Cost to Paint a House Exterior",
            path: "/cost-to-paint-house-exterior",
            description: "Planning a full exterior remodel? Here are the numbers you need."
        }
    ];

    return (
        <div className="min-h-screen bg-white text-brand-black font-sans">
            <SEOHead 
                seoTitle="Interior Painting Cost Spokane | 2026 Pricing Guide"
                description="How much does it cost to paint a room or a whole house interior in Spokane? Get our 2026 breakdown of wall, ceiling, and trim painting prices."
                path="/cost-to-paint-house-interior"
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
                            Cost to Paint the <span className="text-brand-green italic">Interior</span> of a House in Spokane
                        </h1>
                        <p className="text-xl text-gray-300 leading-relaxed font-medium">
                            Whether you are updating a single nursery on the South Hill or executing a full-home color transformation in Liberty Lake, interior painting is the ultimate ROI project. In 2026, professional interior repaints in Spokane range from <strong>$450 for a single room to $9,000+ for large custom homes</strong>. 
                        </p>
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-4 py-20">
                <article className="max-w-4xl mx-auto">
                    
                    {/* Executive Summary Box */}
                    <div className="bg-brand-gray/30 border-l-8 border-brand-green p-8 rounded-r-3xl mb-16">
                        <h2 className="text-2xl font-bold font-poppins mb-4">Quick Interior Price Cheat Sheet (2026)</h2>
                        <ul className="space-y-3 m-0 pl-0 list-none">
                            <li className="flex items-center gap-3"><CheckCircle className="text-brand-green w-5 h-5 shrink-0" /> <strong>Standard Bedroom (Walls Only):</strong> $450 – $750</li>
                            <li className="flex items-center gap-3"><CheckCircle className="text-brand-green w-5 h-5 shrink-0" /> <strong>Master Suite (Walls, Ceiling, Trim):</strong> $1,200 – $2,500</li>
                            <li className="flex items-center gap-3"><CheckCircle className="text-brand-green w-5 h-5 shrink-0" /> <strong>Full Home (Approx 2,000 sq ft):</strong> $5,000 – $9,000+</li>
                            <li className="flex items-center gap-3"><CheckCircle className="text-brand-green w-5 h-5 shrink-0" /> <strong>Kitchen Cabinets (Add-on):</strong> $3,500 – $6,500</li>
                        </ul>
                    </div>

                    <div className="prose prose-lg prose-brand max-w-none">
                        
                        <h2 className="text-3xl font-bold font-poppins mb-6">The Real Math Behind an Interior Painting Quote</h2>
                        <p>
                            If you look around your living room, you might just see four walls. But a professional painter sees varying substrates, transition lines, and obstacles. 
                        </p>
                        <p>
                            National aggregate websites often claim you can paint an entire house for $1,500. This is fundamentally untrue in the modern Spokane market if you want <em>insured, professional labor using premium, scuff-resistant paints</em>. Here is exactly what drives the cost of an interior bid.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6 my-10">
                            <div className="border border-gray-200 p-8 rounded-3xl hover:border-brand-green transition-colors">
                                <Home className="text-brand-green w-10 h-10 mb-4" />
                                <h3 className="text-xl font-bold mb-2">1. The "Surface Factor"</h3>
                                <p className="text-gray-600 text-sm m-0">The price isn't just about floor square footage; it's about <strong>paintable</strong> square footage. A room with 8-foot ceilings takes significantly less labor than a vaulted Great Room with 16-foot ceilings that require interior scaffolding.</p>
                            </div>
                            <div className="border border-gray-200 p-8 rounded-3xl hover:border-brand-green transition-colors">
                                <Shield className="text-brand-green w-10 h-10 mb-4" />
                                <h3 className="text-xl font-bold mb-2">2. Trim and Millwork Complexity</h3>
                                <p className="text-gray-600 text-sm m-0">Walls are fast; trim is slow. Flat MDF baseboards are quick to paint, while historic Craftsman window casings, crown molding, and wainscoting require meticulous, slow brushwork and extensive caulking.</p>
                            </div>
                            <div className="border border-gray-200 p-8 rounded-3xl hover:border-brand-green transition-colors">
                                <Clock className="text-brand-green w-10 h-10 mb-4" />
                                <h3 className="text-xl font-bold mb-2">3. Surface Preparation</h3>
                                <p className="text-gray-600 text-sm m-0">Does your drywall look like a teenager’s dartboard? Skim-coating rough walls, patching doorknob holes, and sanding out previous DIY paint drips adds hours of labor to a baseline estimate.</p>
                            </div>
                            <div className="border border-gray-200 p-8 rounded-3xl hover:border-brand-green transition-colors">
                                <PaintBucket className="text-brand-green w-10 h-10 mb-4" />
                                <h3 className="text-xl font-bold mb-2">4. Quality of Materials</h3>
                                <p className="text-gray-600 text-sm m-0">We explicitly use products like Benjamin Moore Scuff-X or Sherwin-Williams Emerald. Cheap paint requires 3-4 coats to cover dark colors and lacks washability. Premium paint costs more upfront but lasts thrice as long.</p>
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold font-poppins mb-6 mt-16">The True Cost of Ceilings and Trim</h2>
                        <p>
                            When homeowners attempt to budget their project, they frequently forget the "fifth and sixth walls." 
                        </p>
                        <ul>
                            <li><strong>Ceilings:</strong> Painting a ceiling flat white makes the rest of the room's colors pop. However, painting a ceiling requires covering everything below it in plastic and working overhead—a strenuous physical task that increases the room's total cost by roughly 25-35%.</li>
                            <li><strong>Doors, Baseboards, and Casings:</strong> Interior trim takes a beating from vacuums and shoe scuffs. We use high-grade urethane enamels for trim. The intricate brushwork required for a paneled door or crown molding can equal the labor cost of painting all the flat walls in the same room.</li>
                        </ul>

                        <h2 className="text-3xl font-bold font-poppins mb-6 mt-16">2026 Interior Design Trends in Spokane</h2>
                        <p>
                            The era of "agreeable gray" is coming to a close. In 2026, Spokane homeowners are making bolder, more intentional choices for their interiors, heavily influenced by the surrounding Pacific Northwest environment.
                        </p>
                        
                        <div className="bg-gray-50 p-8 rounded-3xl my-8">
                            <h3 className="text-2xl font-bold mb-4 font-poppins">The Rise of "Color Drenching"</h3>
                            <p>
                                A major trend in high-end homes and historical Craftsman restorations is <strong>Color Drenching</strong>. This involves painting the baseboards, walls, crown molding, and even the ceiling in the exact same color. 
                            </p>
                            <p className="mb-0">
                                This technique erases visual boundaries, making small rooms (like home offices or powder rooms) feel infinitely larger and incredibly moody. Deep, muddy tones like eggplant, navy, and mossy green are the primary colors used for this effect.
                            </p>
                        </div>
                        
                        <p>
                            For main living areas, warm whites and cream tones (such as Sherwin-Williams Alabaster or Benjamin Moore White Dove) remain the default standard, providing a clean gallery aesthetic that warms up under incandescent lighting.
                        </p>

                        <h2 className="text-3xl font-bold font-poppins mb-6 mt-16">Frequently Asked Questions</h2>
                        <div className="space-y-6 mb-16" id="faq">
                            {faqs.map((faq, index) => (
                                <div key={index} className="p-6 bg-white rounded-2xl border border-gray-200 hover:border-brand-green/30 transition-colors shadow-sm">
                                    <h4 className="font-bold text-lg mb-3 flex items-start gap-3">
                                        <span className="w-6 h-6 rounded-full bg-brand-green text-white flex items-center justify-center text-xs shrink-0 mt-0.5 font-poppins">Q</span>
                                        {faq.question}
                                    </h4>
                                    <p className="text-gray-600 pl-9 font-medium mb-0">{faq.answer}</p>
                                </div>
                            ))}
                        </div>
                        
                        <AuthorBio />

                        <section className="my-16 flex flex-col items-center text-center bg-brand-black text-white p-10 md:p-16 rounded-[3rem] shadow-2xl relative overflow-hidden">
                            <div className="absolute -top-32 -right-32 w-96 h-96 bg-brand-green/20 blur-[100px]" />
                            <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-brand-green/20 blur-[100px]" />
                            
                            <h3 className="text-3xl md:text-5xl font-poppins font-bold mb-6 relative z-10 w-full max-w-2xl text-balance">
                                Stop guessing.<br /> Get a firm price today.
                            </h3>
                            <p className="text-gray-400 text-lg md:text-xl font-medium mb-10 max-w-2xl relative z-10">
                                We walk your home, listen to your vision, calculate the exact square footage, and provide a detailed, written proposal with zero hidden fees.
                            </p>
                            
                            <div className="flex flex-col sm:flex-row gap-4 relative z-10 w-full justify-center">
                                <a href={`tel:${phoneNumber}`} className="bg-brand-green text-white px-10 py-5 rounded-2xl font-bold text-xl hover:scale-105 transition-transform flex items-center justify-center gap-2 shadow-xl shadow-green-500/20">
                                    <PhoneIcon /> CALL {phoneNumber}
                                </a>
                                <a href={`mailto:${email}`} className="bg-white/10 text-white backdrop-blur-md border border-white/20 px-10 py-5 rounded-2xl font-bold text-xl hover:bg-white/20 transition-colors">
                                    EMAIL US
                                </a>
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
   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
);

export default InteriorPaintingCost;
