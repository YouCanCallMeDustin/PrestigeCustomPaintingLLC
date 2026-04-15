import { Phone, CheckCircle, ArrowLeft, Star, AlertTriangle, User, BookOpen, Layers, CheckSquare, ShieldCheck, Thermometer, ShieldAlert } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { SITE_INFO } from '../lib/constants';
import { injectPageSEO } from '../lib/seo';
import { generateWebPageSchema } from '../lib/schemaGenerator';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function PaintStrippingPage() {
    const { phoneNumber, ownerName } = SITE_INFO;

    const faqs = [
        {
            q: "How much does paint stripping cost in Spokane?",
            a: "Paint stripping is labor-intensive. Costs rely on the number of paint layers, the substrate (wood vs. metal), and whether lead is present. Projects typically range from $5 to $15 per square foot. We provide detailed onsite estimates."
        },
        {
            q: "How do you handle lead-based paint?",
            a: "We are EPA Lead-Safe Certified. We use wet-scraping methods, HEPA-filtered vacuum attachments, and full environmental containment to ensure no lead dust enters your home or the Spokane soil."
        },
        {
            q: "Will paint stripping damage my original wood siding?",
            a: "No. We utilize infrared heat or ph-balanced chemical strippers that only react with the paint, leaving the high-quality historic timber beneath perfectly intact and ready for restoration."
        },
        {
            q: "Can you strip paint from brick or stone?",
            a: "Yes. Masonry requires a specialized approach to avoid damaging the mortar. We use low-pressure chemical peel technology that pulls paint out of the porous surfaces without destructive sandblasting."
        },
        {
            q: "How long does the paint stripping process take?",
            a: "Depending on the scale, a typical porch or set of historic windows takes 3 to 5 days. Full exterior stripping of a Victorian home can take 2 to 3 weeks of meticulous work."
        }
    ];

    useEffect(() => {
        const title = "Paint Stripping Spokane | Lead-Safe Removal & Surface Restoration";
        const description = "Spokane's expert paint stripping services. Lead-safe removal from wood, metal, and masonry. Professional surface restoration. Free estimates!";
        
        return injectPageSEO({
            title,
            description,
            path: '/paint-stripping-spokane',
            schemas: [
                { id: 'faq', data: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })) } },
                {
                    id: 'webpage',
                    data: generateWebPageSchema({
                        title,
                        description,
                        url: "https://prestigecustompaintingllc.com/paint-stripping-spokane"
                    })
                }
            ]
        });
    }, []);

    const steps = [
        {
            title: "Coating Analysis & Testing",
            desc: "We analyze the number of layers and test for lead content to determine the safest and most efficient removal protocol for your specific substrate.",
            proTip: "Multiple layers of old oil-based paint often respond best to infrared heat, while newer acrylics may require chemical peels.",
            pitfall: "Assuming old paint isn't lead-based. Most Spokane homes built before 1978 contain lead, requiring certified handling."
        },
        {
            title: "Environmental Containment",
            desc: "We set up 6-mil plastic shielding and utilize HEPA-filtered negative air machines to prevent any dust or fumes from migrating into your living space.",
            proTip: "Extend containment 10 feet beyond the work area to ensure absolute protection of your landscaping and walkways.",
            pitfall: "Failing to cover the ground properly. Lead paint chips in the soil create a long-term environmental hazard for your property."
        },
        {
            title: "Chemical or Heat Application",
            desc: "We apply non-toxic, biodegradable strippers or infrared heat sources that soften the paint bond without generating toxic smoke or fumes.",
            proTip: "Infrared heat is the safest way to remove paint from wood as it doesn't reach temperatures high enough to ignite historic timber.",
            pitfall: "Using a standard heat gun. These can reach 1000°F+, which vaporizes lead and poses a significant fire risk."
        },
        {
            title: "Precision Mechanical Scraping",
            desc: "Using handcrafted scrapers, we manually remove the softened paint layers, following the grain of the wood to prevent gouging.",
            proTip: "Keep your scraper blades razor-sharp; a dull blade requires more pressure and is more likely to damage the substrate.",
            pitfall: "Scraping across the grain. This tears the wood fibers and creates a rough surface that is difficult to sand smooth."
        },
        {
            title: "Substrate Neutralization",
            desc: "For chemical stripping, we wash the surface with a neutralizer to balance the pH, ensuring the new paint will bond correctly.",
            proTip: "Use a simple pH test strip to verify the surface is neutral before moving to the sanding phase.",
            pitfall: "Painting over un-neutralized stripper. The high pH will 'cook' the new paint, causing it to peel within weeks."
        },
        {
            title: "Surface Sanding & Stabilization",
            desc: "We perform a multi-grit sanding process to remove residual fibers, followed by a high-grade oil primer to lock in the surface.",
            proTip: "Transition from 80-grit to 120-grit for a finish that looks like new wood yet retains its historic character.",
            pitfall: "Skiping the primer. Bare, old-growth wood is extremely porous and will suck the life out of your topcoat if not sealed."
        }
    ];

    return (
        <div className="min-h-screen bg-white text-brand-black selection:bg-brand-green selection:text-white pb-20 md:pb-0 font-sans">
            <Navbar />

            {/* Hero Section */}
            <header className="bg-brand-black py-16 md:py-24 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-green/10 -skew-x-12 transform translate-x-32" />
                <div className="max-w-7xl mx-auto px-4 relative z-10 text-left">
                    <Link to="/" className="inline-flex items-center gap-2 text-brand-green font-bold mb-6 hover:gap-3 transition-all text-sm">
                        <ArrowLeft size={18} /> BACK TO HOME
                    </Link>
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-green/20 text-brand-green text-xs font-bold mb-6 uppercase tracking-wider">
                            <ShieldCheck size={12} fill="currentColor" /> EPA Lead-Safe Certified
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-poppins font-bold mb-8 leading-[1.1]">
                            Paint Stripping Spokane: <br />
                            <span className="text-brand-green italic uppercase tracking-tighter text-shadow-sm">True Restoration.</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-10 max-w-2xl font-medium">
                            Strip away decades of failing paint and reveal the original beauty of your Spokane home with our safe, meticulous restoration processes.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-5">
                            <a href={`tel:${phoneNumber}`} className="flex items-center justify-center gap-3 bg-brand-green hover:bg-green-600 text-white px-10 py-5 rounded-2xl font-extrabold text-lg transition-all shadow-xl shadow-green-500/20">
                                <Phone size={24} /> GET A RESTORATION QUOTE
                            </a>
                        </div>
                    </div>
                </div>
            </header>

            {/* TL;DR Section */}
            <section className="py-12 bg-gray-50 border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 text-left">
                    <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                        <h2 className="text-sm font-bold text-brand-green uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                            <Layers size={18} /> Service Highlights
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
                            {[
                                "Complete removal of failing paint from wood, metal, & brick.",
                                "Strict adherence to EPA Lead-Safe certified protocols.",
                                "Non-toxic chemical and infrared heat stripping methods.",
                                "Full surface stabilization before professional re-painting."
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
            <section className="py-16 md:py-24 bg-white text-left">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="inline-block bg-brand-green/10 text-brand-green px-4 py-1 rounded-lg text-sm font-bold mb-6">
                            Restoration Definition
                        </div>
                        <h2 className="text-3xl md:text-5xl font-poppins font-bold mb-8 text-brand-black">
                            What is Architectural Paint Stripping?
                        </h2>
                        <div className="bg-brand-gray/30 p-8 md:p-10 rounded-3xl border-l-8 border-brand-green italic">
                            <p className="text-xl md:text-2xl text-gray-800 leading-relaxed font-medium">
                                "Paint stripping is the architectural process of removing layers of old paint, varnish, or coatings from a surface. This involves using chemical solvents, infrared heat, or mechanical abrasion to reveal the original substrate, ensuring a stable foundation for new finishes while adhering to strict environmental and safety standards."
                            </p>
                        </div>
                        
                        {/* Table of Contents */}
                        <div className="mt-16 bg-white border border-gray-100 rounded-3xl p-8 shadow-sm">
                            <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-left">
                                <BookOpen size={20} className="text-brand-green" /> Inside This Guide
                            </h3>
                            <div className="grid sm:grid-cols-2 gap-4 text-left">
                                {[
                                    { label: "The Lead Paint Reality", id: "lead" },
                                    { label: "Infrared vs. Chemical Stripping", id: "methods" },
                                    { label: "Professional 6-Step System", id: "process" },
                                    { label: "Restoring Historic Masonry", id: "masonry" },
                                    { label: "Common Stripping Failures", id: "failures" },
                                    { label: "Spokane Restoration FAQ", id: "faq" }
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

            {/* Core Section 1: Lead Paint */}
            <section id="lead" className="py-16 md:py-24 bg-gray-50 scroll-mt-24 text-left">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-center text-left">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-poppins font-bold mb-8 text-brand-black">
                                The Lead Paint Reality in Spokane
                            </h2>
                            <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-medium">
                                <p>
                                    Spokane is home to thousands of beautiful historic properties, particularly on the South Hill and West Central. While these homes have character, they also have layers of lead-based paint that require expert handling.
                                </p>
                                <p>
                                    Our team is EPA RRP Certified. We don't just 'scrape' paint; we manage a hazardous material. By using advanced containment and HEPA-certified tools, we ensure the safety of your children, pets, and the local environment.
                                </p>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-brand-green rounded-[3rem] rotate-3 scale-105 opacity-10" />
                            <img 
                                src="https://images.unsplash.com/photo-1595844730298-b9f0ff98ffd0?auto=format&fit=crop&q=80&w=1000" 
                                alt="Restoring historic wood siding in Spokane" 
                                className="relative z-10 rounded-[3rem] shadow-2xl object-cover h-[500px] w-full"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Stripping Methods */}
            <section id="methods" className="py-16 md:py-24 bg-white scroll-mt-24 text-left">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-poppins font-bold text-brand-black mb-4 uppercase tracking-tighter">Professional Methods</h2>
                        <p className="text-gray-500 max-w-2xl mx-auto">We select the right tool for the specific coating architecture.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8 text-left">
                        {[
                            { name: "Infrared Heat", desc: "Safely breaks the bond of historic oil paints without reaching the point of lead vaporization." },
                            { name: "Non-Toxic Chemical Peel", desc: "A paste applied to the surface that 'eats' through 10+ layers of paint for one easy removal." },
                            { name: "Eco-Blasting", desc: "Low-pressure media used for metal railings and intricate details that cannot be hand-scraped." }
                        ].map((item, i) => (
                            <div key={i} className="p-8 bg-gray-50 rounded-[2.5rem] border border-gray-100 hover:border-brand-green transition-all shadow-sm">
                                <div className="w-14 h-14 bg-brand-green/10 rounded-2xl flex items-center justify-center text-brand-green mb-6">
                                    <Thermometer size={24} />
                                </div>
                                <h4 className="text-xl font-bold mb-4 uppercase tracking-tight">{item.name}</h4>
                                <p className="text-gray-600 leading-relaxed font-medium text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* The Process Section */}
            <section id="process" className="py-16 md:py-24 bg-brand-black text-white scroll-mt-24 text-left">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-brand-green font-bold tracking-widest text-sm mb-4 uppercase">Strip. Prep. Protect.</h2>
                        <h3 className="text-4xl md:text-5xl font-poppins font-bold mb-6 text-white leading-tight">Our 6-Step Restoration System</h3>
                        <p className="text-gray-400 max-w-2xl mx-auto">Because a fresh coat of paint is only as good as the surface beneath it.</p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
                        {steps.map((step, i) => (
                            <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-3xl group hover:border-brand-green/50 transition-all relative overflow-hidden">
                                <div className="text-brand-green font-poppins font-bold text-5xl opacity-20 mb-4">{i + 1}</div>
                                <h4 className="text-xl font-bold mb-4 text-white uppercase tracking-tighter leading-8">{step.title}</h4>
                                <p className="text-gray-400 mb-6 text-sm leading-relaxed">{step.desc}</p>
                                
                                <div className="space-y-4 pt-4 border-t border-white/10">
                                    <div className="flex gap-3 text-xs">
                                        <Star size={14} className="text-brand-green shrink-0 mt-0.5" />
                                        <p className="italic text-gray-300"><span className="font-bold text-brand-green not-italic uppercase tracking-tighter">Pro Tip:</span> {step.proTip}</p>
                                    </div>
                                    <div className="flex gap-3 text-xs">
                                        <ShieldAlert size={14} className="text-red-400 shrink-0 mt-0.5" />
                                        <p className="italic text-gray-300"><span className="font-bold text-red-100 not-italic uppercase tracking-tighter">Pitfall:</span> {step.pitfall}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Masonry Restoration */}
            <section id="masonry" className="py-16 md:py-24 bg-white scroll-mt-24 text-left">
                <div className="max-w-7xl mx-auto px-4 text-left">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-poppins font-bold mb-10 text-brand-black">Restoring Historic Masonry</h2>
                        <div className="space-y-8 text-left">
                            <div className="flex gap-6">
                                <div className="w-12 h-12 bg-brand-green/10 rounded-2xl flex items-center justify-center text-brand-green shrink-0">
                                    <CheckSquare size={24} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold mb-2 uppercase tracking-tighter">The 'Peel' Method</h4>
                                    <p className="text-gray-600 leading-relaxed font-medium">
                                        Brick is porous. Traditional scraping leaves paint in the 'pores'. We use a cloth-backed chemical peel that is applied like a paste and literally pulls the paint out of the brick face as it's lifted.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <div className="w-12 h-12 bg-brand-green/10 rounded-2xl flex items-center justify-center text-brand-green shrink-0">
                                    <ShieldCheck size={24} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold mb-2 uppercase tracking-tighter">Mortar Preservation</h4>
                                    <p className="text-gray-600 leading-relaxed font-medium text-sm">
                                        Destructive methods like sandblasting eat away at the mortar joints. Our chemical approach preserves the structural integrity of your brickwork while removing 100% of the paint.
                                    </p>
                                </div>
                            </div>
                            <div className="bg-brand-gray/50 border-l-4 border-brand-green p-8 rounded-r-3xl mt-12">
                                <h4 className="font-bold text-brand-black mb-2 flex items-center gap-2 uppercase tracking-widest text-xs">
                                    <User size={18} className="text-brand-green" /> Expert Insight
                                </h4>
                                <p className="text-gray-700 italic font-medium leading-relaxed">
                                    "Many homeowners think paint stripping is just about aesthetics. In Reality, it's about surface health. Removing failing layers stops the cycle of moisture entrapment and rot." — {ownerName}, Founder
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Projects Fail */}
            <section id="failures" className="py-16 md:py-24 bg-gray-50 scroll-mt-24 text-left">
                <div className="max-w-7xl mx-auto px-4 text-left">
                    <h2 className="text-3xl md:text-5xl font-poppins font-bold mb-12 text-center text-brand-black uppercase tracking-tighter">Common Stripping Failures</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { f: "The 'Flash-Back' Effect", r: "When residual chemicals aren't neutralized, causing the new paint to saponify and peel within months." },
                            { f: "Substrate Gouging", s: "Using dull scrapers or too much pressure, leaving permanent scars in the historic wood." },
                            { f: "Moisture Entrapment", r: "Painting too soon after wet-stripping. The wood must reach a moisture content below 15% before priming." },
                            { f: "Lead Dust Migration", s: "Failure to use HEPA-certified tools, spreading hazardous lead particles throughout the HVAC system." },
                            { f: "Thermal Scorching", r: "Using high-temperature heat guns that burn the wood fibers, making it impossible for new paint to bond." }
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-8 rounded-[2rem] shadow-sm border border-red-500/20 group hover:border-red-500 transition-all">
                                <h4 className="text-xl font-bold mb-4 text-brand-black flex items-center gap-2">
                                    <AlertTriangle size={20} className="text-red-500" /> {item.f}
                                </h4>
                                <p className="text-gray-600 text-sm leading-relaxed font-medium"><span className="font-bold text-brand-green uppercase tracking-tighter">Result:</span> {item.r || item.s}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="py-16 md:py-24 bg-white scroll-mt-24 text-left">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-poppins font-bold mb-4 uppercase tracking-tighter leading-tight">Spokane Restoration FAQ</h2>
                        <div className="h-1.5 w-20 bg-brand-green mx-auto rounded-full" />
                    </div>
                    <div className="space-y-4">
                        {faqs.map((faq, idx) => (
                            <div key={idx} className="p-6 md:p-8 border border-gray-100 rounded-3xl hover:border-brand-green transition-all bg-gray-50 group">
                                <h3 className="font-poppins font-bold text-xl mb-4 text-brand-black group-hover:text-brand-green transition-colors">{faq.q}</h3>
                                <p className="text-gray-600 leading-relaxed font-medium text-sm">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <div className="bg-brand-black rounded-[3rem] p-12 md:p-20 relative overflow-hidden shadow-2xl">
                        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-green/10 blur-[120px]" />
                        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-green/10 blur-[120px]" />
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-5xl lg:text-7xl font-poppins font-bold text-white mb-8 leading-tight">
                                Reveal Your Home's <br />Original Character.
                            </h2>
                            <p className="text-gray-400 text-xl font-medium mb-12 max-w-2xl mx-auto leading-relaxed">
                                Don't just paint over failing layers. Invest in a professional stripping service that restores your property's value and integrity.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-6">
                                <a href={`tel:${phoneNumber}`} className="bg-brand-green hover:bg-green-600 text-white px-12 py-6 rounded-2xl font-extrabold text-2xl transition-all hover:shadow-2xl shadow-green-500/30">
                                    {phoneNumber}
                                </a>
                                <Link to="/#contact" className="bg-white/10 hover:bg-white/20 text-white px-12 py-6 rounded-2xl font-bold text-2xl backdrop-blur-md transition-all border border-white/20">
                                    REQUEST AN AUDIT
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* E-E-A-T Section */}
            <section className="py-20 bg-gray-50 border-t border-gray-100">
                <div className="max-w-4xl mx-auto px-4 text-center md:text-left">
                    <div className="bg-white p-8 md:p-12 rounded-[2.5rem] flex flex-col md:flex-row items-center gap-10 shadow-sm">
                        <div className="w-40 h-40 shrink-0 relative text-center">
                            <img src="/robert.jpg" alt={ownerName} className="rounded-full w-full h-full object-cover relative z-10 border-4 border-white shadow-xl" />
                        </div>
                        <div className="text-left">
                            <p className="text-brand-green font-bold text-sm uppercase tracking-widest mb-2">Expert Review By</p>
                            <h3 className="text-3xl font-poppins font-bold mb-4">{ownerName}</h3>
                            <p className="text-gray-600 leading-relaxed mb-6 font-medium">
                                As an EPA Lead-Safe Certified professional, Robert manages all restoration and paint stripping projects, ensuring safe handling and meticulous surface preparation for Spokane's historic homes.
                            </p>
                            <div className="flex items-center justify-start gap-4 text-xs text-gray-400 font-bold uppercase tracking-tighter">
                                <p>Updated: April 2026</p>
                                <div className="w-1 h-1 bg-gray-300 rounded-full" />
                                <p>Lead-Safe Restoration Expert</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default PaintStrippingPage;

