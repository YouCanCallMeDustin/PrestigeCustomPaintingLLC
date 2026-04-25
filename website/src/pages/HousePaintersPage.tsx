import { Phone, CheckCircle, ArrowLeft, ArrowRight, Star, AlertTriangle, User, BookOpen, Layers, CheckSquare, Home, MapPin, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { SITE_INFO } from '../lib/constants';
import { injectPageSEO } from '../lib/seo';
import { generateWebPageSchema, generateBreadcrumbSchema, generateHowToSchema } from '../lib/schemaGenerator';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function HousePaintersPage() {
    const { phoneNumber, email, ownerName } = SITE_INFO;

    const faqs = [
        {
            q: "How much does it cost to hire house painters in Spokane?",
            a: "Precision estimates depend on home size, substrate condition, and material choice. Typically, interior single rooms start around $500, while full exterior transformations range from $2,500 to $8,000+. We provide free, zero-obligation onsite diagnostic estimates."
        },
        {
            q: "What brands of paint do you use for Spokane homes?",
            a: "We exclusively use premium-grade coatings from Sherwin-Williams (Emerald, Duration) and Benjamin Moore (Aura, Regal Select). These are selected for their durability against Spokane's extreme temperature swings."
        },
        {
            q: "How long does a typical full-house painting project take?",
            a: "Most residential projects are completed in 3 to 5 business days. We maintain a dedicated crew on your home from start to finish to ensure consistency and minimize disruption to your family."
        },
        {
            q: "Are your painters employees or subcontractors?",
            a: "Our core team consists of skilled local professionals who are trained in our specific 'Expect Excellence' system. This ensures that the high level of detail we promise is delivered on every wall."
        },
        {
            q: "Do you handle lead-based paint in older Spokane homes?",
            a: "Yes. For homes built before 1978, we follow strict EPA lead-safe work practices to ensure the safety of your family and the environment during the preparation phase."
        },
        {
            q: "What is your process for cleaning up after a day of painting?",
            a: "We perform a daily site cleanup. All tools are stored neatly, and drop cloths are folded. We treat your home with the same respect we would our own, ensuring your living space remains functional."
        }
    ];

    const steps = [
        {
            title: "Comprehensive Home Diagnostic",
            description: "We perform a systematic evaluation of your home's substrate, identifying moisture traps, failing caulk, and wood rot that standard painters miss.",
            proTip: "Check your window sills for soft wood before we arrive; catching rot early saves thousands in future repair costs.",
            pitfall: "Painting over wet or rotten wood. The moisture will trap behind the new coat and cause immediate bubbling."
        },
        {
            title: "Exterior Clean & Interior Shielding",
            description: "For exteriors, we perform a deep power wash to remove oxidation. For interiors, we use 3M-grade plastic shielding to protect every inch of your furniture.",
            proTip: "Turn off your exterior AC unit during power washing to prevent moisture from being sucked into the condenser.",
            pitfall: "Using standard drop cloths over hardwoods. Spills can seep through fabric; we always use heavy-duty floor runners."
        },
        {
            title: "Corrective Surface Repair",
            description: "We don't just 'paint over' problems. We sand, patch, and re-caulk every seam to ensure a durable, water-tight finish.",
            proTip: "Using high-flex siliconized acrylic caulk is essential for Spokane homes to handle the seasonal expansion and contraction.",
            pitfall: "Skiping the sanding phase. New paint won't bond correctly to an old high-gloss finish without mechanical etching."
        },
        {
            title: "Bond-Building Priming",
            description: "We apply specialty primers tailored to your substrate—whether it's tannin-blocking for cedar or high-hide for color transitions.",
            proTip: "If changing from a dark to a light color, a tinted primer can reduce the number of finish coats required.",
            pitfall: "Standard 'all-in-one' paints often lack the specialized bonding agents needed for long-term adhesion."
        },
        {
            title: "Multi-Coat Finish Application",
            description: "We apply two full coats of premium finish using precision spray and back-rolling techniques for maximum depth and protection.",
            proTip: "Back-rolling during a spray application forces the paint into the grain, doubling the lifespan of the job.",
            pitfall: "Applying a single 'heavy' coat. Two thin coats are always more durable and result in a smoother finish."
        },
        {
            title: "Owner Quality Audit",
            description: "We conduct a final, rigorous walk-through with you to ensure every line is crisp and every surface reflects our 'Expect Excellence' motto.",
            proTip: "Inspect the paint under different lighting conditions (morning vs. afternoon) to ensure absolute uniform coverage.",
            pitfall: "Accepting a job before the final walk-through. A professional contractor always demands your 100% sign-off."
        }
    ];

    useEffect(() => {
        const title = "House Painters Spokane | Professional Interior & Exterior Residential Painting";
        const description = "Spokane's most trusted house painters. High-quality finishes, precision detail, and durable protection for your home. Free estimates!";
        
        return injectPageSEO({
            seoTitle: title,
            description,
            path: '/house-painters-spokane',
            schemas: [
                { id: 'faq', data: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })) } },
                {
                    id: 'webpage',
                    data: generateWebPageSchema({
                        topic: title,
                        description,
                        url: "https://prestigecustompaintingllc.com/house-painters-spokane"
                    })
                },
                {
                    id: 'breadcrumb',
                    data: generateBreadcrumbSchema([
                        { name: "Home", path: "/" },
                        { name: "House Painters", path: "/house-painters-spokane" }
                    ])
                },
                {
                    id: 'howto',
                    data: generateHowToSchema({
                        name: "Professional House Painting Process",
                        description: "Our comprehensive 6-step interior and exterior painting process.",
                        steps: steps.map(s => ({ name: s.title, text: s.description }))
                    })
                }
            ]
        });
    }, []);



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
                            <Home size={12} fill="currentColor" /> Spokane's Trusted Home Painters
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-poppins font-bold mb-8 leading-tight">
                            House Painters Spokane: <br />
                            <span className="text-brand-green italic">Precision Home Restoration.</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-10 max-w-2xl font-medium">
                            Protect your largest investment. Prestige Custom Painting LLC delivers meticulous residential painting across Spokane with a focus on durability, aesthetics, and zero-stress project management.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-5">
                            <a href={`tel:${phoneNumber}`} className="flex items-center justify-center gap-3 bg-brand-green hover:bg-green-600 text-white px-10 py-5 rounded-2xl font-extrabold text-lg transition-all shadow-xl shadow-green-500/20">
                                <Phone size={24} /> GET AN ESTIMATE
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
                            <Layers size={18} /> Executive Summary
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                "Full-service interior, exterior, and fine-finish cabinets.",
                                "Exclusive use of premium (Emerald/Aura) coatings.",
                                "EPA lead-safe certified for older Spokane homes.",
                                "Ironclad satisfaction guarantee with zero-down terms."
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
                            Project Definitions
                        </div>
                        <h2 className="text-3xl md:text-5xl font-poppins font-bold mb-8 text-brand-black">
                            What exactly is Professional House Painting?
                        </h2>
                        <div className="bg-brand-gray/30 p-8 md:p-10 rounded-3xl border-l-8 border-brand-green italic text-left">
                            <p className="text-xl md:text-2xl text-gray-800 leading-relaxed font-medium">
                                "House painting is the expert application of decorative and protective coatings to residential properties. It encompasses interior wall and trim aesthetics as well as exterior substrate protection against the Inland Northwest's harsh weather conditions, requiring specialized knowledge of moisture management, substrate repair, and material compatibility."
                            </p>
                        </div>
                        
                        {/* Table of Contents */}
                        <div className="mt-16 bg-white border border-gray-100 rounded-3xl p-8 shadow-sm">
                            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                                <BookOpen size={20} className="text-brand-green" /> Table of Contents
                            </h3>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {[
                                    { label: "Protecting Your Home's Value", id: "value" },
                                    { label: "DIY vs. Professional Quality", id: "comparison" },
                                    { label: "Our 6-Step Residential System", id: "process" },
                                    { label: "Premium Materials & Coatings", id: "materials" },
                                    { label: "Seasonal Maintenance Checklist", id: "maintenance" },
                                    { label: "Common Painting Failures", id: "failures" },
                                    { label: "Residential FAQ", id: "faq" }
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
            <section id="value" className="py-16 md:py-24 bg-gray-50 scroll-mt-24">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-center text-left">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-poppins font-bold mb-8 text-brand-black">
                                Protecting and Increasing Your Home's Value
                            </h2>
                            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                                <p>
                                    In the Spokane real estate market, a профессиональный paint job is one of the highest ROIs for homeowners. It's not just about curbside appeal—it's about the technical barrier between your home's structure and the elements.
                                </p>
                                <p>
                                    Whether it's the 100°F summers or the sub-zero winters, your home's siding and trim constantly expand and contract. Our systems utilize high-flex coatings and industrial-grade caulking to ensure your home remains water-tight and gorgeous year-round.
                                </p>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-brand-green rounded-[3rem] rotate-3 scale-105 opacity-10" />
                            <img 
                                src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&q=80&w=1000" 
                                alt="Professionally painted Spokane home exterior" 
                                className="relative z-10 rounded-[3rem] shadow-2xl object-cover h-[500px] w-full"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* DIY vs Pro Comparison */}
            <section id="comparison" className="py-16 md:py-24 bg-white scroll-mt-24 text-left">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-poppins font-bold text-brand-black mb-4 uppercase tracking-tighter">The True Cost of DIY</h2>
                        <p className="text-gray-500 max-w-2xl mx-auto">Why 80% of Spokane homeowners regret tackling major painting projects themselves.</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="group bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100 hover:border-red-100 transition-all">
                            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                <AlertTriangle size={28} className="text-red-400" /> The DIY Reality
                            </h3>
                            <ul className="space-y-4">
                                {[
                                    "Hidden costs: renting sprayers, ladders, and scaffolding.",
                                    "Weeks of disruption and incomplete prep work.",
                                    "Brush and roller marks visible in high-light areas.",
                                    "Incorrect material usage leads to peeling within 18 months.",
                                    "No warranty; you pay for every mistake out of pocket."
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-3 text-gray-400 line-through decoration-red-400/50">
                                        <AlertTriangle size={18} className="shrink-0 mt-1" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-brand-black p-10 rounded-[2.5rem] text-white ring-4 ring-brand-green/20">
                            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                <Award size={28} className="text-brand-green" /> The Prestige Standard
                            </h3>
                            <ul className="space-y-4">
                                {[
                                    "Precision spray-finish for factory-smooth surfaces.",
                                    "Comprehensive prep: rot repair, sanding, & re-caulking.",
                                    "Dedicated project manager ensuring a strict timeline.",
                                    "Ironclad 5-year satisfaction warranty on labor.",
                                    "Professional cleanup: your home is left better than we found it."
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-3 text-brand-green font-medium">
                                        <CheckCircle size={18} className="shrink-0 mt-1" /> <span className="text-gray-300">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Process Section */}
            <section id="process" className="py-16 md:py-24 bg-brand-black text-white scroll-mt-24">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-brand-green font-bold tracking-widest text-sm mb-4 uppercase">Excellence in Execution</h2>
                        <h3 className="text-4xl md:text-5xl font-poppins font-bold mb-6">Our 6-Step Residential System</h3>
                        <p className="text-gray-400 max-w-2xl mx-auto">Standardized precision for Spokane homeowners who demand the best.</p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {steps.map((step, i) => (
                            <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-3xl group hover:border-brand-green/50 transition-all text-left">
                                <div className="text-brand-green font-poppins font-bold text-5xl opacity-20 mb-4">{i + 1}</div>
                                <h4 className="text-xl font-bold mb-4 text-white">{step.title}</h4>
                                <p className="text-gray-400 mb-6 text-sm leading-relaxed">{step.description}</p>
                                
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

            {/* Expert Insights */}
            <section id="materials" className="py-16 md:py-24 bg-white scroll-mt-24 text-left">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-poppins font-bold mb-10 text-brand-black">Materials Matter: Our Coating Philosophy</h2>
                        <div className="space-y-8">
                            <div className="flex gap-6">
                                <div className="w-12 h-12 bg-brand-green/10 rounded-2xl flex items-center justify-center text-brand-green shrink-0">
                                    <Award size={24} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold mb-2">High-Solids Formulations</h4>
                                    <p className="text-gray-600 leading-relaxed font-medium">
                                        We specify coatings with higher volume solids (like Sherwin-Williams Emerald). This results in a thicker dry film, providing superior weather protection and better color retention over time.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <div className="w-12 h-12 bg-brand-green/10 rounded-2xl flex items-center justify-center text-brand-green shrink-0">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold mb-2">Regional Specialty Coatings</h4>
                                    <p className="text-gray-600 leading-relaxed font-medium">
                                        Spokane's climate requires paints that can handle 60-degree temperature swings in a single day. We choose 'flexible' resins that move with your home to prevent cracking.
                                    </p>
                                </div>
                            </div>
                            <div className="bg-brand-gray/50 border-l-4 border-brand-green p-8 rounded-r-3xl mt-12">
                                <h4 className="font-bold text-brand-black mb-2 flex items-center gap-2 uppercase tracking-widest text-sm">
                                    <User size={18} className="text-brand-green" /> Expert Perspective
                                </h4>
                                <p className="text-gray-700 italic font-medium leading-relaxed">
                                    "A paint job is only as good as the prep and the materials. Cutting corners on either results in a job that fails in three years versus one that lasts fifteen." — {ownerName}, Founder
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Maintenance Checklist */}
            <section id="maintenance" className="py-16 md:py-24 bg-gray-50 scroll-mt-24">
                <div className="max-w-3xl mx-auto px-4 text-center md:text-left">
                    <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-gray-100">
                        <h3 className="text-2xl font-bold mb-8 flex items-center justify-center md:justify-start gap-2">
                            <CheckSquare size={28} className="text-brand-green" /> Homeowner Care Checklist
                        </h3>
                        <div className="space-y-6">
                            {[
                                "Clean interior walls with a soft damp cloth to prevent scuff build-up.",
                                "Inspect exterior foundation gaps for failing caulk every spring.",
                                "Trim bushes at least 12 inches away from your home's exterior to prevent moisture trapping.",
                                "Check your roof drains to ensure water isn't splash-backing onto the siding.",
                                "Regularly dust your crown molding to maintain that crisp, professional look."
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

            {/* Why Projects Fail */}
            <section id="failures" className="py-16 md:py-24 bg-white scroll-mt-24 text-left">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-3xl md:text-5xl font-poppins font-bold mb-12 text-center text-brand-black leading-tight uppercase tracking-tighter">Common Painting Failures</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { f: "Inter-coat Peeling", r: "Applying a topcoat over an incompatible old oil-base without proper priming." },
                            { f: "Alligatoring", s: "Caused by painting over wet surfaces or applying a hard coat over a soft one." },
                            { f: "Mildew Infestation", r: "Failure to bleach and kill spores before painting; the mildew grows through the new film." },
                            { f: "Chalking", s: "Natural UV degradation of lower-quality resins. We use UV-resistant coatings to prevent this." },
                            { f: "Surfactant Leaching", r: "Brown streaks caused by painting in high humidity or just before rain." }
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-8 rounded-[2rem] shadow-sm border border-red-500/20 group hover:border-red-500 transition-all overflow-hidden relative">
                                <h4 className="text-xl font-bold mb-4 text-brand-black flex items-center gap-2">
                                    <AlertTriangle size={20} className="text-red-500" /> {item.f}
                                </h4>
                                <p className="text-gray-600 text-sm leading-relaxed"><span className="font-bold text-brand-green uppercase tracking-tighter">The Warning:</span> {item.r || item.s}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="py-16 md:py-24 bg-gray-50 scroll-mt-24 text-left">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-poppins font-bold mb-4 uppercase tracking-tighter">Residential Painting FAQ</h2>
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
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <div className="bg-brand-black rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
                        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-green/10 blur-[120px]" />
                        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-green/10 blur-[120px]" />
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-5xl lg:text-7xl font-poppins font-bold text-white mb-8">
                                Ready for a Clean, <br />Professional Finish?
                            </h2>
                            <p className="text-gray-400 text-xl font-medium mb-12 max-w-2xl mx-auto leading-relaxed">
                                Join hundreds of satisfied Spokane homeowners. Get your free, professional house painting estimate today.
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
                            <img src="/robert.webp" alt={ownerName} className="rounded-full w-full h-full object-cover relative z-10 border-4 border-white shadow-xl" />
                        </div>
                        <div>
                            <p className="text-brand-green font-bold text-sm uppercase tracking-widest mb-2">Expert Review By</p>
                            <h3 className="text-3xl font-poppins font-bold mb-4">{ownerName}</h3>
                            <p className="text-gray-600 leading-relaxed mb-6 font-medium">
                                With over a decade of residential painting experience in the Spokane area, Robert specializes in high-durability coatings and meticulous surface restoration techniques.
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

export default HousePaintersPage;
