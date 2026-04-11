import { Phone, Mail, CheckCircle, ArrowLeft, ArrowRight, Star, Sparkles, Shield, DollarSign, ThermometerSun } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { SITE_INFO } from '../lib/constants';
import { injectPageSEO } from '../lib/seo';
import { generateWebPageSchema } from '../lib/schemaGenerator';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function CabinetPaintingPage() {
    const { phoneNumber, email } = SITE_INFO;

    const pageTitle = 'Top-Rated Cabinet Painting Contractors in Spokane, WA | Factory Finish';
    const pageDescription = 'Don\'t replace—refinish! Ranked as top cabinet painting contractors in Spokane. We deliver a flawless, ultra-durable factory finish that saves you thousands over remodeling. Get a Free Quote!';

    const faqs = [
        { q: "Why hire local cabinet painting contractors in Spokane?", a: "Absolutely — cabinet painting takes a fraction of the time and money of a full cabinet replacement while achieving equally stunning results. In Spokane, full cabinet replacement can easily reach $15,000–$30,000+. Professional cabinet painting from Prestige Custom Painting LLC can completely transform the same kitchen layout, often saving homeowners well over $10,000." },
        { q: "How long does professional cabinet painting take?", a: "Most kitchen cabinet refinishing projects take 4–6 days. We remove the doors and drawer fronts to spray them in a controlled environment for a flawless finish, while meticulously masking and painting the cabinet boxes in your home. We emphasize efficiency to minimize disruption to your daily routine." },
        { q: "Will the paint peel or chip on my kitchen cabinets?", a: "Not when executed by true professionals. The key to long-lasting cabinet paint is rigorous prep: thorough degreasing, mechanical sanding, a high-adhesion bonding primer, and an ultra-durable urethane or acrylic enamel topcoat like Benjamin Moore Advance or SCUFF-X. Our factory-finish approach is formulated to bond aggressively to wood and resist chipping, peeling, and daily wear-and-tear." },
        { q: "Can you change the color of my cabinets from dark wood to white?", a: "Yes! Going from dated, dark wood or honey oak to bright white or modern gray is our most requested cabinet service. The process relies heavily on using specialized stain-blocking primers to ensure the original wood tannins never bleed through your crisp, new bright finish." },
        { q: "Do you spray or brush the cabinets?", a: "We exclusively use professional fine-finish sprayers (like HVLP systems) for your cabinet doors and drawer fronts. Spraying is the only way to guarantee an ultra-smooth, factory-like finish without the prominent brush strokes or orange-peel roller marks left behind by DIY methods or amateur painters." },
        { q: "How does Spokane's climate affect cabinet painting?", a: "Spokane experiences very dry summers and highly fluctuating winter temperatures, causing interior wood cabinetry to expand and contract. If cheap, rigid paints are used, the cabinet joints will quickly develop hairline cracks. We strategically use flexible, premium coatings that can accommodate natural wood movement, drastically extending the life of your finish." }
    ];

    useEffect(() => {
        document.title = pageTitle;
        const meta = document.querySelector('meta[name="description"]');
        if (meta) meta.setAttribute('content', pageDescription);
        
        return injectPageSEO({
            title: pageTitle,
            description: pageDescription,
            path: '/cabinet-painting-spokane',
            schemas: [
                { 
                    id: 'faq', 
                    data: { 
                        "@context": "https://schema.org", 
                        "@type": "FAQPage", 
                        "mainEntity": faqs.map(f => ({ 
                            "@type": "Question", 
                            "name": f.q, 
                            "acceptedAnswer": { "@type": "Answer", "text": f.a } 
                        })) 
                    } 
                },
                {
                    id: 'local-business',
                    data: {
                        "@context": "https://schema.org",
                        "@type": "LocalBusiness",
                        "name": "Prestige Custom Painting LLC",
                        "address": {
                            "@type": "PostalAddress",
                            "addressLocality": "Spokane",
                            "addressRegion": "WA"
                        },
                        "hasOfferCatalog": {
                            "@type": "OfferCatalog",
                            "name": "Painting Services",
                            "itemListElement": [
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Cabinet Painting",
                                        "description": "Professional high-end cabinet refinishing and painting services utilizing HVLP factory-finish techniques in Spokane, WA.",
                                        "areaServed": [
                                            { "@type": "City", "name": "Spokane" },
                                            { "@type": "City", "name": "Spokane Valley" },
                                            { "@type": "City", "name": "Liberty Lake" }
                                        ]
                                    }
                                }
                            ]
                        }
                    }
                },
                {
                    id: 'webpage',
                    data: generateWebPageSchema({
                        title: pageTitle,
                        description: pageDescription,
                        url: "https://prestigecustompaintingllc.com/cabinet-painting-spokane"
                    })
                }
            ]
        });
    }, []);

    return (
        <div className="min-h-screen bg-white text-brand-black selection:bg-brand-green selection:text-white pb-20 md:pb-0">
            <Navbar />

            {/* HERO SECTION - CTR & Value Prop Focused */}
            <section className="bg-brand-black py-16 md:py-28 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-full md:w-3/4 h-full bg-brand-green/10 -skew-x-12 transform translate-x-32" />
                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <Link to="/" className="inline-flex items-center gap-2 text-brand-green font-bold mb-6 hover:gap-3 transition-all text-sm"><ArrowLeft size={18} /> BACK TO HOME</Link>
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-green/20 text-brand-green text-xs md:text-sm font-bold mb-6 animate-fade-in"><Star size={14} fill="currentColor" /> SPOKANE'S TOP-RATED CABINET REFINISHING CONTRACTORS</div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-poppins font-bold mb-6 leading-tight">
                            Flawless Cabinet Painting<br /><span className="text-brand-green">in Spokane, WA</span>
                        </h1>
                        <p className="text-lg md:text-2xl text-gray-300 leading-relaxed mb-8 max-w-3xl font-medium">Don't replace your kitchen—refinish it! Transform outdated cabinetry into a modern centerpiece with our ultra-durable, factory-smooth coating process. Save up to 70% compared to a full kitchen remodel.</p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a href={`tel:${phoneNumber}`} className="flex items-center justify-center gap-3 bg-brand-green hover:bg-green-600 text-white px-8 py-5 rounded-2xl font-bold text-lg transition-all transform hover:scale-105 shadow-2xl shadow-green-500/40"><Phone size={24} /> GET A FREE QUOTE</a>
                            <Link to="/#services" className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-5 rounded-2xl font-bold text-lg transition-all border border-white/20">ALL SERVICES <ArrowRight size={22} /></Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* VALUE PROP & SEO INTRODUCTION */}
            <section className="py-20 md:py-28 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2">
                            <h2 className="text-brand-green font-bold tracking-widest text-sm mb-4 uppercase">The Prestige Standard</h2>
                            <h3 className="text-3xl md:text-5xl font-poppins font-bold mb-8 text-brand-black leading-tight">Why Hire Professional Cabinet Painting Contractors?</h3>
                            <p className="text-lg text-gray-600 leading-relaxed mb-6 font-medium">Your kitchen cabinets are the architectural anchor of your home. However, replacing them is notoriously expensive, messy, and time-consuming. In the Spokane market, a total kitchen cabinet replacement can quickly spiral into the tens of thousands of dollars.</p>
                            <p className="text-lg text-gray-600 leading-relaxed mb-8">As premier <strong>cabinet painting contractors in Spokane</strong>, Prestige Custom Painting LLC offers the intelligent alternative. Our professional refinishing service delivers a rock-hard, factory-quality finish at a fraction of the cost of new cabinetry. We don’t just "paint" your doors; we utilize advanced HVLP spraying technology, chemical degreasers, and premium bonding enamels (like Benjamin Moore SCUFF-X) to completely transform your kitchen's aesthetic while preserving its structural bones.</p>
                            
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-start gap-4">
                                    <CheckCircle className="text-brand-green mt-1 shrink-0" size={24} />
                                    <span className="text-gray-700 text-lg"><strong>Cost-Effective:</strong> Save thousands compared to tearing out existing boxes.</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <CheckCircle className="text-brand-green mt-1 shrink-0" size={24} />
                                    <span className="text-gray-700 text-lg"><strong>Speed & Convenience:</strong> Kitchen updates finished in days, not months.</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <CheckCircle className="text-brand-green mt-1 shrink-0" size={24} />
                                    <span className="text-gray-700 text-lg"><strong>Limitless Colors:</strong> We can match any designer color flawlessly.</span>
                                </li>
                            </ul>
                        </div>
                        <div className="lg:w-1/2 w-full relative">
                            <div className="absolute inset-0 bg-brand-green rounded-[2.5rem] rotate-3 scale-105 opacity-10" />
                            <img src="/finish.png" alt="Before and after cabinet painting transformation in Spokane WA" className="relative z-10 rounded-[2.5rem] shadow-2xl object-cover w-full h-[600px]" />
                        </div>
                    </div>
                </div>
            </section>

            {/* THE PROCESS (Detailed for SEO semantics) */}
            <section className="py-20 md:py-28 bg-brand-black text-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-brand-green font-bold tracking-widest text-sm mb-4 uppercase">Our Signature System</h2>
                        <h3 className="text-3xl md:text-5xl font-poppins font-bold mb-6">The "Factory Finish" Painting Process</h3>
                        <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">We engineer our cabinet surfaces to withstand Spokane's toughest kitchens. Here is exactly how we deliver a finish that refuses to chip.</p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { step: "01", title: "Site Prep & Dismantling", desc: "We protect your counters and floors with heavy duty masking. Doors, drawers, and hardware are meticulously labeled, removed, and transported to our controlled spray facility." },
                            { step: "02", title: "Heavy Degreasing", desc: "Even clean-looking kitchens hover microscopic cooking oils. We scrub every inch of wood with industrial degreasers to ensure paint adhesion." },
                            { step: "03", title: "Dustless Sanding", desc: "We mechanically sand the clear coat off the original wood using HEPA-filtered dustless systems to open the wood grain without filling your home with dust." },
                            { step: "04", title: "High-Adhesion Priming", desc: "We spray premium, stain-blocking bonding primers. Once cured, we fine-sand the primer layer to create an ultra-smooth, glassy canvas." },
                            { step: "05", title: "HVLP Topcoat Application", desc: "We apply two perfectly atomized coats of premium cabinet enamel (like Sherwin Williams Emerald Urethane) using professional HVLP spray stations for zero brush strokes." },
                            { step: "06", title: "Reassembly & Alignment", desc: "Once cured, we carefully transport components back, re-hang doors, install new hardware (optional), align hinges, and perform our final quality walkthrough." },
                        ].map((item, idx) => (
                            <div key={idx} className="p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:border-brand-green hover:bg-white/10 transition-all duration-300">
                                <div className="text-brand-green font-poppins font-bold text-5xl mb-6 opacity-80">{item.step}</div>
                                <h4 className="font-poppins font-bold text-2xl mb-4">{item.title}</h4>
                                <p className="text-gray-400 text-base leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* TRUST SIGNALS & LOCAL INTENT */}
            <section className="py-20 md:py-24 bg-gray-50 border-y border-gray-200">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-brand-green font-bold tracking-widest text-sm mb-4 uppercase">Why Local Matters</h2>
                        <h3 className="text-3xl md:text-5xl font-poppins font-bold mb-6 text-brand-black">Spokane's Climate Demands Better Paint</h3>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:-translate-y-2 transition-transform h-full">
                            <div className="w-16 h-16 bg-brand-green/10 rounded-2xl flex items-center justify-center text-brand-green mb-6"><DollarSign size={32} /></div>
                            <h4 className="text-xl font-bold mb-4 text-brand-black">The Cost Blueprint</h4>
                            <ul className="space-y-3 mb-4 text-gray-600">
                                <li className="flex justify-between border-b border-gray-100 pb-2"><span>Replace:</span> <strong>$20,000+</strong></li>
                                <li className="flex justify-between border-b border-gray-100 pb-2"><span>Reface:</span> <strong>$8,000 - $12,000</strong></li>
                                <li className="flex justify-between border-b border-gray-100 pb-2"><span>Refinish:</span> <strong>Highest ROI</strong></li>
                            </ul>
                            <p className="text-gray-600 text-sm leading-relaxed">Our professional refinishing costs a fraction of replacing while delivering an identical aesthetic update.</p>
                        </div>
                        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:-translate-y-2 transition-transform">
                            <div className="w-16 h-16 bg-brand-green/10 rounded-2xl flex items-center justify-center text-brand-green mb-6"><ThermometerSun size={32} /></div>
                            <h4 className="text-xl font-bold mb-3 text-brand-black">Inland Northwest Shifts</h4>
                            <p className="text-gray-600 leading-relaxed">Spokane's dry summers and freezing winters cause severe expansion in wood joints. We strategically utilize highly cross-linked, flexible enamels that stretch with your wood—preventing the cracking common with cheap paints.</p>
                        </div>
                        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:-translate-y-2 transition-transform">
                            <div className="w-16 h-16 bg-brand-green/10 rounded-2xl flex items-center justify-center text-brand-green mb-6"><Shield size={32} /></div>
                            <h4 className="text-xl font-bold mb-3 text-brand-black">Locally Guaranteed</h4>
                            <p className="text-gray-600 leading-relaxed">As local contractors, we aren't flying out after the job. We are fully licensed & bonded in Washington State. Our reputation in neighborhoods from South Hill to Liberty Lake rides on delivering flawlessly painted cabinets that last.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ SECTION - SEO OPTIMIZED */}
            <section className="py-20 md:py-28 bg-white">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-poppins font-bold mb-6 text-brand-black">Cabinet Painting FAQ</h2>
                        <div className="h-1.5 w-20 bg-brand-green mx-auto rounded-full" />
                        <p className="text-gray-500 text-lg mt-6">Expert answers about kitchen cabinet refinishing in Spokane.</p>
                    </div>
                    
                    <div className="space-y-6">
                        {faqs.map((faq, idx) => (
                            <div key={idx} className="bg-white p-6 md:p-8 border border-gray-200 rounded-[2rem] hover:border-brand-green/50 hover:shadow-lg transition-all duration-300">
                                <h4 className="font-poppins font-bold text-xl md:text-2xl text-brand-black mb-4">{faq.q}</h4>
                                <p className="text-gray-600 text-lg leading-relaxed">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* HIGH CONVERSION CTA */}
            <section className="py-20 md:py-28 bg-brand-gray/30">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="bg-brand-black rounded-[3rem] p-8 md:p-20 text-center relative overflow-hidden shadow-2xl">
                        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIgZmlsbD0iIzQ4ZGU4MCIgZmlsbC1vcGFjaXR5PSIwLjEiLz48L3N2Zz4=')] opacity-30" />
                        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-green/20 blur-[120px] pointer-events-none" />
                        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-green/20 blur-[120px] pointer-events-none" />
                        
                        <div className="relative z-10">
                            <h2 className="text-4xl md:text-6xl font-poppins font-bold text-white mb-6">Lock in Your <span className="text-brand-green">Dream Kitchen</span></h2>
                            <p className="text-gray-300 text-xl mb-12 max-w-2xl mx-auto font-medium">Ready to see how much you could save? Get a free, no-obligation estimate from Spokane's top-rated cabinet painting contractors today.</p>
                            <div className="flex flex-col sm:flex-row justify-center gap-6">
                                <a href={`tel:${phoneNumber}`} className="bg-brand-green hover:bg-green-600 text-white px-12 py-5 rounded-2xl font-bold text-xl transition-all hover:scale-105 shadow-xl shadow-green-500/30 flex items-center justify-center gap-3"><Phone size={24} /> {phoneNumber}</a>
                                <a href={`mailto:${email}`} className="bg-white/10 hover:bg-white/20 text-white px-12 py-5 rounded-2xl font-bold text-xl transition-all border border-white/20 flex items-center justify-center gap-3"><Mail size={24} /> GET PRICING</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Areas We Serve Footer */}
            <section className="py-12 bg-white">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h3 className="text-sm font-bold tracking-widest text-gray-400 mb-6 uppercase">Local Service Areas</h3>
                    <div className="flex flex-wrap justify-center gap-3">
                        <Link to="/painting-spokane-valley" className="px-5 py-2.5 bg-gray-50 border border-gray-200 rounded-full text-sm font-semibold text-gray-600 hover:border-brand-green hover:text-brand-green transition-colors">Spokane Valley, WA</Link>
                        <Link to="/painting-liberty-lake" className="px-5 py-2.5 bg-gray-50 border border-gray-200 rounded-full text-sm font-semibold text-gray-600 hover:border-brand-green hover:text-brand-green transition-colors">Liberty Lake, WA</Link>
                        <Link to="/painting-airway-heights" className="px-5 py-2.5 bg-gray-50 border border-gray-200 rounded-full text-sm font-semibold text-gray-600 hover:border-brand-green hover:text-brand-green transition-colors">Airway Heights, WA</Link>
                        <Link to="/painting-cheney" className="px-5 py-2.5 bg-gray-50 border border-gray-200 rounded-full text-sm font-semibold text-gray-600 hover:border-brand-green hover:text-brand-green transition-colors">Cheney, WA</Link>
                        <Link to="/painting-deer-park" className="px-5 py-2.5 bg-gray-50 border border-gray-200 rounded-full text-sm font-semibold text-gray-600 hover:border-brand-green hover:text-brand-green transition-colors">Deer Park, WA</Link>
                    </div>
                </div>
            </section>

            {/* Mobile Footer CTA */}
            <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white/95 backdrop-blur-md border-t border-gray-100 p-4 flex gap-4 shadow-[0_-10px_30px_rgba(0,0,0,0.05)]">
                <a href={`tel:${phoneNumber}`} className="flex-1 bg-brand-black text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2"><Phone size={20} className="text-brand-green" /> CALL</a>
                <a href={`mailto:${email}`} className="flex-1 bg-brand-green text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2"><Mail size={20} /> QUOTE</a>
            </div>

            <Footer />
        </div>
    );
}

export default CabinetPaintingPage;
