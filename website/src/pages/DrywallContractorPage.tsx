import { Phone, CheckCircle, ArrowLeft, Star, AlertTriangle, User, BookOpen, Layers, CheckSquare, Hammer, ShieldAlert, Sparkles, Ruler } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { SITE_INFO } from '../lib/constants';
import { injectPageSEO } from '../lib/seo';
import { generateWebPageSchema } from '../lib/schemaGenerator';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function DrywallContractorPage() {
    const { phoneNumber, ownerName } = SITE_INFO;

    const faqs = [
        {
            q: "How much does drywall repair cost in Spokane?",
            a: "Small patch repairs (holes from doorknobs or electrical work) typically range from $150 to $350. Full room resurfacing or ceiling repairs depend on the square footage and texture complexity. We provide free onsite diagnostics for accurate pricing."
        },
        {
            q: "Can you match my existing wall texture?",
            a: "Yes. We specialize in matching common Spokane textures including Orange Peel, Knockdown, and the smooth 'Level 5' finishes found in higher-end homes on the South Hill and Liberty Lake."
        },
        {
            q: "Is drywall repair a messy process?",
            a: "Traditional drywalling can be dusty, but we use a dust-minimized sanding process and HEPA-filtered containment zones to ensure your home stays clean and your air quality remains high during the project."
        },
        {
            q: "How long does it take for a drywall patch to dry?",
            a: "Most patches require three coats of joint compound. With professional-grade setting compounds, we can often complete small repairs and texturing in a single day, followed by a 24-hour cure period before painting."
        },
        {
            q: "Do you handle water damage drywall repair?",
            a: "Absolutely. We first ensure the moisture source is resolved, then remove any mold-compromised material before installing new moisture-resistant (Green Board) gypsum and finishing it to match."
        }
    ];

    useEffect(() => {
        const title = "Drywall Contractor Spokane | Professional Repair & Installation Services";
        const description = "Spokane's expert drywall contractors. Precision repairs, seamless installations, and custom texturing. Quality you can trust. Free estimates!";
        
        return injectPageSEO({
            title,
            description,
            path: '/drywall-contractor-spokane',
            schemas: [
                { id: 'faq', data: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })) } },
                {
                    id: 'webpage',
                    data: generateWebPageSchema({
                        title,
                        description,
                        url: "https://prestigecustompaintingllc.com/drywall-contractor-spokane"
                    })
                }
            ]
        });
    }, []);

    const steps = [
        {
            title: "Damage Assessment & Scoping",
            desc: "We don't just patch holes. We identify the root cause—whether it's structural settling, moisture ingress, or impact—to ensure the repair lasts a lifetime.",
            proTip: "Check for 'nail pops' nearby; they often indicate structural shifting that needs to be addressed before the main repair.",
            pitfall: "Patching over moisture-compromised drywall will lead to mold growth and eventual structural failure."
        },
        {
            title: "Aerosol Dust Containment",
            desc: "Drywall dust is invasive. We set up physical barriers and use vacuum-assisted sanding to keep your living space pristine.",
            proTip: "Point a box fan out of a nearby window to create negative pressure in the work zone for maximum cleanliness.",
            pitfall: "Using standard home vacuums; their filters aren't fine enough for drywall dust and will blow it back into the room."
        },
        {
            title: "Precision Cutting & Hanging",
            desc: "We remove damaged sections back to the nearest studs and install new, appropriately gaged gypsum board for maximum stability.",
            proTip: "Use 'Green Board' for any repairs in bathrooms or laundry rooms for superior moisture resistance.",
            pitfall: "Using 'butt joints' in high-traffic areas without proper support will lead to visible cracks within months."
        },
        {
            title: "Multi-Stage Taping & Mudding",
            desc: "We apply a three-coat mud system (tape, fill, finish), feathered out 12-18 inches to make the joint completely invisible to the eye.",
            proTip: "Setting-type compound (hot mud) is best for the first coat to minimize shrinkage and increase bond strength.",
            pitfall: "Applying a second coat before the first is 100% dry; this traps moisture and causes the patch to sag."
        },
        {
            title: "Custom Texture Integration",
            desc: "The hardest part of drywall is matching the 'flow.' We expertly replicate Orange Peel, Knockdown, or Sand textures to blend the new with the old.",
            proTip: "Always test the texture on a scrap piece of cardboard first to match the PSI and spread of the existing wall.",
            pitfall: "Over-texturing. It's easier to add more texture than it is to sand it off once it's dry."
        },
        {
            title: "Owner-Certified Finish",
            desc: "We conduct a high-lumen light test to ensure the patch is seamless. Once you're 100% satisfied, the surface is ready for a professional prime and paint.",
            proTip: "Hold a flashlight horizontal to the wall to see any minor ridges or shadows that might show up after painting.",
            pitfall: "Painting directly over fresh mud without a dedicated drywall primer. The mud will soak up the paint unevenly."
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
                            <Hammer size={12} fill="currentColor" /> Spokane's Drywall Experts
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-poppins font-bold mb-8 leading-[1.1]">
                            Drywall Contractor Spokane: <br />
                            <span className="text-brand-green italic uppercase tracking-tighter">Invisible Repairs.</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-10 max-w-2xl font-medium">
                            From doorknob holes to full-scale ceiling restorations, Prestige Custom Painting LLC provides the cleanest, most precise drywall services in the Inland Northwest.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-5">
                            <a href={`tel:${phoneNumber}`} className="flex items-center justify-center gap-3 bg-brand-green hover:bg-green-600 text-white px-10 py-5 rounded-2xl font-extrabold text-lg transition-all shadow-xl shadow-green-500/20">
                                <Phone size={24} /> GET A FREE QUOTE
                            </a>
                        </div>
                    </div>
                </div>
            </header>

            {/* TL;DR Section */}
            <section className="py-12 bg-gray-50 border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                        <h2 className="text-sm font-bold text-brand-green uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                            <Layers size={18} /> Service Highlights
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                "Full drywall repair, installation, and finishing.",
                                "Expert texture matching for all Spokane home styles.",
                                "Dust-minimized sanding with HEPA filtration.",
                                "Seamless blending for 'invisible' patch repairs."
                            ].map((item, i) => (
                                <div key={i} className="flex gap-3">
                                    <CheckCircle size={20} className="text-brand-green shrink-0 mt-1" />
                                    <p className="text-gray-700 font-medium text-sm leading-relaxed text-left">{item}</p>
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
                            Industry Knowledge
                        </div>
                        <h2 className="text-3xl md:text-5xl font-poppins font-bold mb-8 text-brand-black">
                            What does a Drywall Contractor do?
                        </h2>
                        <div className="bg-brand-gray/30 p-8 md:p-10 rounded-3xl border-l-8 border-brand-green italic">
                            <p className="text-xl md:text-2xl text-gray-800 leading-relaxed font-medium">
                                "A drywall contractor specializes in the installation, repair, and finishing of gypsum board surfaces. This includes structural hanging, precision taping and mudding, and the application of decorative textures, ensuring a perfectly smooth or consistently patterned substrate ready for high-quality painting."
                            </p>
                        </div>
                        
                        {/* Table of Contents */}
                        <div className="mt-16 bg-white border border-gray-100 rounded-3xl p-8 shadow-sm">
                            <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-left">
                                <BookOpen size={20} className="text-brand-green" /> Inside This Guide
                            </h3>
                            <div className="grid sm:grid-cols-2 gap-4 text-left">
                                {[
                                    { label: "Water Damage & Mold Mitigation", id: "water" },
                                    { label: "The Art of Texture Matching", id: "texture" },
                                    { label: "Our 6-Step Repair Process", id: "process" },
                                    { label: "Dust-Free Sanding Technology", id: "dust" },
                                    { label: "Common Drywall Defects", id: "defects" },
                                    { label: "Spokane Drywall FAQ", id: "faq" }
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
            <section id="water" className="py-16 md:py-24 bg-gray-50 scroll-mt-24 text-left">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-poppins font-bold mb-8 text-brand-black">
                                Water Damage & Mold Mitigation
                            </h2>
                            <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-medium">
                                <p>
                                    Spokane's heavy snow and ice dams can lead to ceiling leaks that devastate drywall. If not handled correctly, moisture trapped behind the sheetrock will lead to mold growth within 48 to 72 hours.
                                </p>
                                <p>
                                    Our team provides emergency drywall removal and replacement. we use high-grade anti-microbial treatments and moisture-resistant 'Green Board' to ensure your home's air quality and structural integrity are preserved.
                                </p>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-brand-green rounded-[3rem] rotate-3 scale-105 opacity-10" />
                            <img 
                                src="https://images.unsplash.com/photo-1595844730298-b9f0ff98ffd0?auto=format&fit=crop&q=80&w=1000" 
                                alt="Professionally repaired drywall in Spokane home" 
                                className="relative z-10 rounded-[3rem] shadow-2xl object-cover h-[500px] w-full"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Texture Matching */}
            <section id="texture" className="py-16 md:py-24 bg-white scroll-mt-24 text-left">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-poppins font-bold text-brand-black mb-4 uppercase tracking-tighter">The Art of Texture Matching</h2>
                        <p className="text-gray-500 max-w-2xl mx-auto">Why standard patch jobs fail to blend in.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { name: "Orange Peel", desc: "A fine, splattered texture that resembles the skin of an orange. Very common in newer Spokane builds." },
                            { name: "Knockdown", desc: "A heavier splatter that is 'knocked down' with a spatula. Requires precise timing to match the existing pattern." },
                            { name: "Level 5 Smooth", desc: "The gold standard. A full skim-coat that leaves the wall perfectly flat and mirror-like." }
                        ].map((item, i) => (
                            <div key={i} className="p-8 bg-gray-50 rounded-[2.5rem] border border-gray-100 hover:border-brand-green transition-all shadow-sm">
                                <div className="w-14 h-14 bg-brand-green/10 rounded-2xl flex items-center justify-center text-brand-green mb-6">
                                    <Sparkles size={24} />
                                </div>
                                <h4 className="text-xl font-bold mb-4">{item.name}</h4>
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
                        <h2 className="text-brand-green font-bold tracking-widest text-sm mb-4 uppercase">Clean. Precise. Seamless.</h2>
                        <h3 className="text-4xl md:text-5xl font-poppins font-bold mb-6">Our 6-Step Repair System</h3>
                        <p className="text-gray-400 max-w-2xl mx-auto">The difference between a 'patch' and a restoration.</p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {steps.map((step, i) => (
                            <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-3xl group hover:border-brand-green/50 transition-all relative overflow-hidden">
                                <div className="text-brand-green font-poppins font-bold text-5xl opacity-20 mb-4">{i + 1}</div>
                                <h4 className="text-xl font-bold mb-4 text-white">{step.title}</h4>
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

            {/* Dust-Free Sanding */}
            <section id="dust" className="py-16 md:py-24 bg-white scroll-mt-24 text-left">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-poppins font-bold mb-10 text-brand-black">Dust-Minimized Technology</h2>
                        <div className="space-y-8">
                            <div className="flex gap-6">
                                <div className="w-12 h-12 bg-brand-green/10 rounded-2xl flex items-center justify-center text-brand-green shrink-0">
                                    <CheckSquare size={24} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold mb-2 uppercase tracking-tighter">HEPA-Filtered Vacuums</h4>
                                    <p className="text-gray-600 leading-relaxed font-medium">
                                        We utilize industrial HEPA filtration systems that capture 99.9% of drywall dust at the source, preventing it from circulating through your HVAC system and settling on your furniture.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <div className="w-12 h-12 bg-brand-green/10 rounded-2xl flex items-center justify-center text-brand-green shrink-0">
                                    <Ruler size={24} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold mb-2 uppercase tracking-tighter">Tape-Zone Masking</h4>
                                    <p className="text-gray-600 leading-relaxed font-medium text-sm">
                                        Beyond the repair site, we mask off entire sections of the home to ensure any stray particles are contained within the work zone.
                                    </p>
                                </div>
                            </div>
                            <div className="bg-brand-gray/50 border-l-4 border-brand-green p-8 rounded-r-3xl mt-12">
                                <h4 className="font-bold text-brand-black mb-2 flex items-center gap-2 uppercase tracking-widest text-xs">
                                    <User size={18} className="text-brand-green" /> Expert Insight
                                </h4>
                                <p className="text-gray-700 italic font-medium leading-relaxed">
                                    "The biggest fear homeowners have with drywall is the mess. By investing in vacuum-assisted sanding, we've removed that friction and made internal structural repairs zero-stress." — {ownerName}, Founder
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Common Defects */}
            <section id="defects" className="py-16 md:py-24 bg-gray-50 scroll-mt-24 text-left">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-3xl md:text-5xl font-poppins font-bold mb-12 text-center text-brand-black uppercase tracking-tighter">Common Drywall Defects</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { f: "Shadow Banding", d: "When a joint doesn't have enough mud, causing a 'shadow' to appear under overhead lighting." },
                            { f: "Nail Pops", d: "Small circular cracks caused by wood shrinking near the fastener. Common in new Spokane constructions." },
                            { f: "Corner Cracking", d: "Structural expansion causing the tape to pull away from the internal corner." },
                            { f: "Joint Failure", d: "Incorrect tape application or zero-mud joints that split as the house settles." },
                            { f: "Texture Mismatch", d: "When a patch stands out because the splatter size doesn't match the original wall." }
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-8 rounded-[2rem] shadow-sm border border-red-500/20 group hover:border-red-500 transition-all">
                                <h4 className="text-xl font-bold mb-4 text-brand-black flex items-center gap-2">
                                    <AlertTriangle size={20} className="text-red-500" /> {item.f}
                                </h4>
                                <p className="text-gray-600 text-sm leading-relaxed font-medium">{item.d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="py-16 md:py-24 bg-white scroll-mt-24 text-left">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-poppins font-bold mb-4 uppercase tracking-tighter">Spokane Drywall FAQ</h2>
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
                            <h2 className="text-3xl md:text-5xl lg:text-7xl font-poppins font-bold text-white mb-8">
                                Invisible Repairs. <br />Professional Standards.
                            </h2>
                            <p className="text-gray-400 text-xl font-medium mb-12 max-w-2xl mx-auto leading-relaxed">
                                Don't let a bad drywall patch ruin your home's aesthetic. Get a precision repair from Spokane's drywall experts today.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-6">
                                <a href={`tel:${phoneNumber}`} className="bg-brand-green hover:bg-green-600 text-white px-12 py-6 rounded-2xl font-extrabold text-2xl transition-all hover:shadow-2xl hover:shadow-green-500/40">
                                    {phoneNumber}
                                </a>
                                <Link to="/#contact" className="bg-white/10 hover:bg-white/20 text-white px-12 py-6 rounded-2xl font-bold text-2xl backdrop-blur-md transition-all border border-white/20">
                                    REQUEST AN ESTIMATE
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
                        <div className="w-40 h-40 shrink-0 relative">
                            <img src="/robert.jpg" alt={ownerName} className="rounded-full w-full h-full object-cover relative z-10 border-4 border-white shadow-xl" />
                        </div>
                        <div>
                            <p className="text-brand-green font-bold text-sm uppercase tracking-widest mb-2">Expert Review By</p>
                            <h3 className="text-3xl font-poppins font-bold mb-4">{ownerName}</h3>
                            <p className="text-gray-600 leading-relaxed mb-6 font-medium">
                                With extensive experience in surface restoration, Robert oversees every drywall project to ensure seamless texture matching and structural integrity for Spokane homeowners.
                            </p>
                            <div className="flex items-center justify-center md:justify-start gap-4 text-xs text-gray-400 font-bold uppercase tracking-tighter">
                                <p>Updated: April 2026</p>
                                <div className="w-1 h-1 bg-gray-300 rounded-full" />
                                <p>Verified Drywall Contractor</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default DrywallContractorPage;

