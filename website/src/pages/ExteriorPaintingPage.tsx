import { Phone, CheckCircle, ArrowLeft, ArrowRight, Star, Shield, Info, AlertTriangle, User, BookOpen, Layers, CheckSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { SITE_INFO } from '../lib/constants';
import { injectPageSEO } from '../lib/seo';
import { generateWebPageSchema } from '../lib/schemaGenerator';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function ExteriorPaintingPage() {
    const { phoneNumber, email, ownerName } = SITE_INFO;


    const faqs = [
        {
            q: "When is the best time for exterior painting in Spokane?",
            a: "The ideal window is typically May through October. We monitor local weather closely, as temperatures must stay above 50°F during application and curing for the best results."
        },
        {
            q: "How often should I repaint my Spokane home's exterior?",
            a: "Most homes in the Inland Northwest require a fresh coat every 7–10 years. However, factors like sun exposure and the quality of the previous paint job can shorten or extend this timeline."
        },
        {
            q: "Do you offer deck and fence staining as well?",
            a: "Yes! We provide professional staining for decks and fences using high-penetration oils and acrylics designed to withstand Spokane's snow and UV rays."
        },
        {
            q: "What kind of preparation do you do for exterior surfaces?",
            a: "We perform industrial power washing, meticulous scraping of loose paint, sanding of rough edges, and high-grade caulking of all gaps to ensure a waterproof seal."
        },
        {
            q: "Do I need to be home while you paint the exterior?",
            a: "No. Since we are working outside, most clients are at work. We just need access to a water source for power washing and will provide daily progress updates."
        },
        {
            q: "Are you licensed to work on older Spokane homes?",
            a: "Yes, Prestige Custom Painting LLC is fully licensed and experienced in handling the unique challenges of Spokane's historic homes, including proper surface stabilization."
        }
    ];

    useEffect(() => {
        const title = "Professional Exterior Painters Spokane | Prestige Custom Painting";
        const description = "Expert exterior house painters in Spokane, WA. We specialize in weather-resistant coatings, siding painting, and deck staining. Get your free estimate today!";
        
        return injectPageSEO({
            title,
            description,
            path: '/exterior-painting-spokane',
            schemas: [
                { id: 'faq', data: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })) } },
                {
                    id: 'webpage',
                    data: generateWebPageSchema({
                        title,
                        description,
                        url: "https://prestigecustompaintingllc.com/exterior-painting-spokane"
                    })
                }
            ]
        });
    }, []);

    const steps = [
        {
            title: "Industrial Power Wash",
            desc: "We begin with a deep clean to remove Spokane's seasonal grime, mildew, and oxidation. This ensures the new paint bonds to the substrate, not to dirt.",
            proTip: "Allow 24–48 hours of drying time after power washing before applying any primer or paint.",
            pitfall: "Painting over damp wood. Trapped moisture causes the paint to bubble and peel within a single season."
        },
        {
            title: "Scraping & Mechanical Sanding",
            desc: "We remove all failed coatings and sand the transitions between bare wood and solid paint. This creates a flat, smooth surface for the new finish.",
            proTip: "Focus on 'feathering' the edges of old paint so the new coat looks seamless and doesn't reveal old peel-lines.",
            pitfall: "Cutting corners on scraping. If the old paint is loose, the new paint will fail regardless of quality."
        },
        {
            title: "Caulking & Waterproofing",
            desc: "We apply high-stretch architectural caulk to gaps around windows, doors, and corner boards. This prevents Spokane's rain and snow from entering the wall cavity.",
            proTip: "Use a finger or tool to 'tool' the caulk into the gap for a concave seal that sheds water.",
            pitfall: "Caulking the bottom of horizontal siding laps. Siding needs to 'breathe'—sealing the bottoms can trap moisture."
        },
        {
            title: "Targeted Priming",
            desc: "We spot-prime bare wood and compromised areas with high-adhesion primers. This seals the surface and prevents tannin bleed from woods like cedar.",
            proTip: "For older Spokane homes with many layers, a full coat of 'high-build' primer can even out the texture.",
            pitfall: "Using interior primer outside. Exterior primers are formulated to expand and contract with the weather."
        },
        {
            title: "Multi-Coat Painting",
            desc: "We apply premium exterior coatings using a combination of spray and 'back-rolling' for maximum penetration into the siding grain.",
            proTip: "Wait for the first coat to fully dry before applying the second to ensure proper film build.",
            pitfall: "Applying paint in direct, high-noon sunlight. This causes the paint to dry too fast, leading to brush marks."
        },
        {
            title: "Cleanup & Final Inspection",
            desc: "We restore your landscaping, remove all masking, and Robert performs a final detailed walkthrough to ensure perfection.",
            proTip: "Inspect the final result at different times of day; morning sun reveals different details than evening shade.",
            pitfall: "Leaving paint chips in the garden. A professional site should be cleaner than when we arrived."
        }
    ];

    return (
        <div className="min-h-screen bg-white text-brand-black selection:bg-brand-green selection:text-white pb-20 md:pb-0">
            <Navbar />

            {/* Hero Section */}
            <header className="bg-brand-black py-16 md:py-24 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-green/10 -skew-x-12 transform translate-x-32" />
                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <Link to="/" className="inline-flex items-center gap-2 text-brand-green font-bold mb-6 hover:gap-3 transition-all text-sm">
                        <ArrowLeft size={18} /> BACK TO HOME
                    </Link>
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-green/20 text-brand-green text-xs font-bold mb-6 uppercase tracking-wider">
                            <Star size={12} fill="currentColor" /> Spokane's Exterior Painting Experts
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-poppins font-bold mb-8 leading-tight">
                            Exterior Painting Spokane: <br />
                            <span className="text-brand-green italic">Built to Last.</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-10 max-w-2xl font-medium">
                            Protect your investment and skyrocket your curb appeal. Prestige Custom Painting LLC provides high-performance exterior coatings engineered for the Inland Northwest's extreme temperature swings.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-5">
                            <a href={`tel:${phoneNumber}`} className="flex items-center justify-center gap-3 bg-brand-green hover:bg-green-600 text-white px-10 py-5 rounded-2xl font-extrabold text-lg transition-all shadow-xl shadow-green-500/20">
                                <Phone size={24} /> CALL FOR ESTIMATE
                            </a>
                            <Link to="/our-work" className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all border border-white/20">
                                VIEW OUR WORK <ArrowRight size={22} />
                            </Link>
                        </div>
                    </div>
                </div>
            </header>

            {/* TL;DR Section */}
            <section className="py-12 bg-gray-50 border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                        <h2 className="text-sm font-bold text-brand-green uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                            <Layers size={18} /> Quick Summary
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                "High-performance coatings designed for Spokane's extreme weather.",
                                "Thorough 6-step prep including power washing and scraping.",
                                "Premium UV-resistant paints from Benjamin Moore & Sherwin-Williams.",
                                "Expert staining for decks and fences to prevent wood rot."
                            ].map((item, i) => (
                                <div key={i} className="flex gap-3">
                                    <CheckCircle size={20} className="text-brand-green shrink-0 mt-1" />
                                    <p className="text-gray-700 font-medium text-sm leading-relaxed">{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Snippet Section */}
            <section className="py-16 md:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="inline-block bg-brand-green/10 text-brand-green px-4 py-1 rounded-lg text-sm font-bold mb-6">
                            Industry Definition
                        </div>
                        <h2 className="text-3xl md:text-5xl font-poppins font-bold mb-8 text-brand-black">
                            What is Professional Exterior Painting?
                        </h2>
                        <div className="bg-brand-gray/30 p-8 md:p-10 rounded-3xl border-l-8 border-brand-green italic">
                            <p className="text-xl md:text-2xl text-gray-800 leading-relaxed font-medium">
                                "Professional exterior painting is the strategic application of protective, weather-resistant coatings to a building's outer surfaces—including siding, trim, decks, and fences. In Spokane, this process is essential to defend structural integrity against high UV exposure, winter moisture, and the region's intense freeze-thaw cycles."
                            </p>
                        </div>
                        
                        {/* Table of Contents */}
                        <div className="mt-16 bg-white border border-gray-100 rounded-3xl p-8 shadow-sm">
                            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                                <BookOpen size={20} className="text-brand-green" /> Table of Contents
                            </h3>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {[
                                    { label: "Protecting Your Spokane Investment", id: "protection" },
                                    { label: "Who We Serve", id: "who-it-is-for" },
                                    { label: "The Exterior Master-Step Process", id: "process" },
                                    { label: "Exterior Painting Best Practices", id: "best-practices" },
                                    { label: "Maintenance Checklist", id: "checklist" },
                                    { label: "Common Exterior Mistakes", id: "mistakes" },
                                    { label: "Frequently Asked Questions", id: "faq" }
                                ].map((item, i) => (
                                    <a key={i} href={`#${item.id}`} className="text-brand-green hover:underline font-medium flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 bg-brand-green rounded-full" /> {item.label}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Section 1 */}
            <section id="protection" className="py-16 md:py-24 bg-gray-50 scroll-mt-24">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-poppins font-bold mb-8 text-brand-black">
                                Protecting Your Home From the Inland Northwest Climate
                            </h2>
                            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                                <p>
                                    Exterior painting is your home's first and most important line of defense. In Spokane, your siding endures scorching 90°F+ summers and sub-zero winters. Without a high-quality seal, moisture penetrates the substrate, leading to wood rot, mold, and structural compromise.
                                </p>
                                <p>
                                    Our exterior painting philosophy focuses on "film build" and "adhesion." We don't just change the color; we apply a durable shield that reflects UV rays and sheds water effectively, saving you thousands in potential siding repairs.
                                </p>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-brand-green rounded-[3rem] -rotate-3 scale-105 opacity-10" />
                            <img 
                                src="https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=1000" 
                                alt="Professionally painted house exterior in Spokane WA" 
                                className="relative z-10 rounded-[3rem] shadow-2xl object-cover h-[500px] w-full"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Who This Is For */}
            <section id="who-it-is-for" className="py-16 md:py-24 bg-white scroll-mt-24">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-poppins font-bold text-brand-black mb-4">Who This Is For</h2>
                        <p className="text-gray-500 max-w-2xl mx-auto">Reliable exterior solutions for every type of Spokane property owner.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: "Homeowners", desc: "Protecting your family's biggest asset from the harsh Pacific Northwest elements with 10-year+ finishes." },
                            { title: "Real Estate Agents", desc: "Maximum curb appeal for listings. We help homes sell faster with clean, modern exterior aesthetics." },
                            { title: "Commercial Property", desc: "Professional, large-scale painting for businesses requiring low-maintenance and high-durability coatings." }
                        ].map((item, i) => (
                            <div key={i} className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100 hover:border-brand-green transition-all group/card">
                                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-brand-green mb-6 group-hover/card:bg-brand-green group-hover/card:text-white transition-all">
                                    <Shield size={24} />
                                </div>
                                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* The Process Section */}
            <section id="process" className="py-16 md:py-24 bg-brand-black text-white scroll-mt-24">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-brand-green font-bold tracking-widest text-sm mb-4 uppercase">The Prestige Standard</h2>
                        <h3 className="text-4xl md:text-5xl font-poppins font-bold mb-6">Our 6-Step Exterior Painting Process</h3>
                        <p className="text-gray-400 max-w-2xl mx-auto">Precision application built to withstand the elements.</p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {steps.map((step, i) => (
                            <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-3xl relative overflow-hidden group hover:border-brand-green/50 transition-all">
                                <div className="text-brand-green font-poppins font-bold text-5xl opacity-20 mb-4">{i + 1}</div>
                                <h4 className="text-xl font-bold mb-4 text-white">{step.title}</h4>
                                <p className="text-gray-400 mb-6 text-sm leading-relaxed">{step.desc}</p>
                                
                                <div className="space-y-4 pt-4 border-t border-white/10">
                                    <div className="flex gap-3 text-xs">
                                        <Star size={14} className="text-brand-green shrink-0 mt-0.5" />
                                        <p className="italic text-gray-300"><span className="font-bold text-brand-green not-italic uppercase tracking-tighter">Pro Tip:</span> {step.proTip}</p>
                                    </div>
                                    <div className="flex gap-3 text-xs">
                                        <AlertTriangle size={14} className="text-red-400 shrink-0 mt-0.5" />
                                        <p className="italic text-gray-300"><span className="font-bold text-red-400 not-italic uppercase tracking-tighter">Pitfall:</span> {step.pitfall}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Best Practices */}
            <section id="best-practices" className="py-16 md:py-24 bg-white scroll-mt-24">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-poppins font-bold mb-10 text-brand-black">Exterior Painting Best Practices</h2>
                        <div className="space-y-8">
                            <div className="flex gap-6">
                                <div className="w-12 h-12 bg-brand-green/10 rounded-2xl flex items-center justify-center text-brand-green shrink-0">
                                    <Info size={24} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold mb-2">Wait for the 'Dry Window'</h4>
                                    <p className="text-gray-600 leading-relaxed">
                                        In Spokane, we never paint when the surface moisture content is above 12%. We use digital moisture meters even if the siding "looks" dry to ensure the primer can penetrate properly.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <div className="w-12 h-12 bg-brand-green/10 rounded-2xl flex items-center justify-center text-brand-green shrink-0">
                                    <Layers size={24} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold mb-2">Film Thickness Matters</h4>
                                    <p className="text-gray-600 leading-relaxed">
                                        We favor two thick coats over multiple thin ones. A proper "dry mil" thickness is required to resist the intense UV rays that hit eastern Washington.
                                    </p>
                                </div>
                            </div>
                            <div className="bg-brand-gray/50 border-l-4 border-brand-green p-8 rounded-r-3xl">
                                <h4 className="font-bold text-brand-black mb-2 flex items-center gap-2 uppercase tracking-widest text-sm">
                                    <User size={18} className="text-brand-green" /> Expert Insight
                                </h4>
                                <p className="text-gray-700 italic font-medium leading-relaxed">
                                    "Many painters skip the back-rolling step. In Spokane, especially on wood siding, it's critical to roll the paint into the grain to ensure a permanent bond that won't flake off during our -10°F winter nights." — {ownerName}, Founder
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Checklist Section */}
            <section id="checklist" className="py-16 md:py-24 bg-gray-50 scroll-mt-24">
                <div className="max-w-3xl mx-auto px-4">
                    <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-gray-100">
                        <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
                            <CheckSquare size={28} className="text-brand-green" /> Exterior Maintenance Checklist
                        </h3>
                        <div className="space-y-6">
                            {[
                                "Wash your siding every spring to remove mildew and road salt.",
                                "Check for failing caulk around windows every 2 years.",
                                "Keep landscaping trimmed 12 inches away from your home's exterior.",
                                "Inspect for wood rot on deck joists and horizontal trim regularly.",
                                "Look for cracks in stucco or peeling paint on south-facing walls."
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4">
                                    <div className="w-6 h-6 rounded-full bg-brand-green/10 flex items-center justify-center shrink-0 mt-0.5">
                                        <div className="w-2 h-2 bg-brand-green rounded-full" />
                                    </div>
                                    <p className="text-gray-600 font-medium">{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Common Mistakes */}
            <section id="mistakes" className="py-16 md:py-24 bg-white scroll-mt-24">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-3xl md:text-5xl font-poppins font-bold mb-12 text-center text-brand-black">Common Exterior Painting Mistakes</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { m: "Painting on Hot Surfaces", s: "Never paint in direct sun on a hot day. The paint 'skins over' before it can bond, leading to peeling." },
                            { m: "Skipping the Power Wash", s: "Dirt and oxidation act as a barrier. You must remove the Spokane grime before any new coating is applied." },
                            { m: "Cheap Caulk", s: "Standard caulk dries out and cracks. We only use high-performance elastomeric caulk that moves with your home." },
                            { m: "Unsealed Wood Ends", s: "The 'end grain' of wood absorbs moisture like a straw. Professionals seal these areas to prevent rot." },
                            { m: "Wrong Paint for Stucco", s: "Stucco needs a 'breathable' coating to allow vapor to escape. Regular acrylic can trap water behind it." }
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-8 rounded-[2rem] shadow-sm border border-red-100 relative group overflow-hidden">
                                <h4 className="text-xl font-bold mb-4 text-brand-black flex items-center gap-2">
                                    <AlertTriangle size={20} className="text-red-500" /> {item.m}
                                </h4>
                                <p className="text-gray-600 text-sm leading-relaxed"><span className="font-bold text-brand-green">The Fix:</span> {item.s}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="py-16 md:py-24 bg-gray-50 scroll-mt-24">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-poppins font-bold mb-4">Frequently Asked Questions</h2>
                        <div className="h-1.5 w-20 bg-brand-green mx-auto rounded-full" />
                    </div>
                    <div className="space-y-4">
                        {faqs.map((faq, idx) => (
                            <div key={idx} className="p-6 md:p-8 border border-gray-100 rounded-3xl hover:border-brand-green transition-all bg-white group shadow-sm">
                                <h3 className="font-poppins font-bold text-xl mb-4 text-brand-black group-hover:text-brand-green transition-colors">{faq.q}</h3>
                                <p className="text-gray-600 leading-relaxed font-medium">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="bg-brand-black rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-green/10 blur-[120px]" />
                        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-green/10 blur-[120px]" />
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-5xl lg:text-7xl font-poppins font-bold text-white mb-8">
                                Ready to Protect Your Home?
                            </h2>
                            <p className="text-gray-400 text-xl font-medium mb-12 max-w-2xl mx-auto leading-relaxed">
                                Don't wait until the wood starts to rot. Get a free, detailed exterior estimate today and lock in your project window.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-6">
                                <a href={`tel:${phoneNumber}`} className="bg-brand-green hover:bg-green-600 text-white px-12 py-6 rounded-2xl font-extrabold text-2xl transition-all hover:scale-105 shadow-2xl shadow-green-500/40">
                                    {phoneNumber}
                                </a>
                                <a href={`mailto:${email}`} className="bg-white/10 hover:bg-white/20 text-white px-12 py-6 rounded-2xl font-bold text-2xl backdrop-blur-md transition-all border border-white/20">
                                    EMAIL OUR TEAM
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* E-E-A-T Section */}
            <section className="py-20 bg-white border-t border-gray-100">
                <div className="max-w-4xl mx-auto px-4 text-center md:text-left">
                    <div className="bg-gray-50 p-8 md:p-12 rounded-[2.5rem] flex flex-col md:flex-row items-center gap-10">
                        <div className="w-40 h-40 shrink-0 relative">
                            <img src="/robert.jpg" alt={ownerName} className="rounded-full w-full h-full object-cover relative z-10 border-4 border-white shadow-xl" />
                        </div>
                        <div>
                            <p className="text-brand-green font-bold text-sm uppercase tracking-widest mb-2">Expert Review By</p>
                            <h3 className="text-3xl font-poppins font-bold mb-4">{ownerName}</h3>
                            <p className="text-gray-600 leading-relaxed mb-6 font-medium">
                                With over a decade of experience painting exteriors in the Pacific Northwest, Robert specializes in weather-proofing homes against Spokane's unique environmental challenges.
                            </p>
                            <div className="flex items-center justify-center md:justify-start gap-4 text-xs text-gray-400 font-bold uppercase tracking-tighter">
                                <p>Updated: April 2026</p>
                                <div className="w-1 h-1 bg-gray-300 rounded-full" />
                                <p>Prestige Custom Painting LLC</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default ExteriorPaintingPage;
