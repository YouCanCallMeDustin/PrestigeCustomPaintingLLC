import { Phone, CheckCircle, ArrowLeft, Star, AlertTriangle, User, BookOpen, Layers, CheckSquare, ShieldCheck, Waves, Wind, ShieldAlert } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { SITE_INFO } from '../lib/constants';
import { injectPageSEO } from '../lib/seo';
import { generateWebPageSchema } from '../lib/schemaGenerator';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function PressureWashingPage() {
    const { phoneNumber, ownerName } = SITE_INFO;

    const faqs = [
        {
            q: "How much does pressure washing cost in Spokane?",
            a: "Pricing typically ranges from $0.20 to $0.40 per square foot for flatwork like driveways. Full house washes usually range from $300 to $600 depending on the size and degree of organic buildup."
        },
        {
            q: "Will high pressure damage my vinyl siding?",
            a: "No, because we don't use high pressure on siding. We utilize 'Soft Washing,' which relies on specialized detergents to kill algae and mold at the root, using water pressure comparable to a garden hose for the rinse."
        },
        {
            q: "Can you remove oil stains from my driveway?",
            a: "While we can significantly lighten oil stains, complete removal depends on how long the oil has been present. We use industrial degreasers and hot water (power washing) to pull as much oil out of the porous concrete as possible."
        },
        {
            q: "Is pressure washing safe for my plants?",
            a: "Yes. We pre-wet all landscaping, use biodegradable detergents, and perform a final rinse of all foliage to ensure your garden remains healthy and vibrant."
        },
        {
            q: "How often should I have my house washed in Spokane?",
            a: "For most Spokane properties, an annual wash is ideal to prevent moss and algae from taking hold, especially on the north-facing sides of the home."
        }
    ];

    useEffect(() => {
        const title = "Pressure Washing Spokane | Professional Exterior Cleaning Services";
        const description = "Spokane's expert pressure washing services. Professional cleaning for siding, decks, driveways, and masonry. Safe and effective. Free estimates!";
        
        return injectPageSEO({
            title,
            description,
            path: '/pressure-washing-spokane',
            schemas: [
                { id: 'faq', data: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })) } },
                {
                    id: 'webpage',
                    data: generateWebPageSchema({
                        title,
                        description,
                        url: "https://prestigecustompaintingllc.com/pressure-washing-spokane"
                    })
                }
            ]
        });
    }, []);

    const steps = [
        {
            title: "Site Inspection & Protection",
            desc: "We identify delicate surfaces and protect electrical outlets, door locks, and sensitive landscaping before any water starts flowing.",
            proTip: "Taping off exterior outlets prevent GFCI trips and ensures your home's electrical system stays dry during the process.",
            pitfall: "Ignoring open windows or faulty door seals. High-pressure water can find its way into the smallest gaps, causing interior damage."
        },
        {
            title: "Detergent Pre-Soak",
            desc: "We apply eco-friendly surfactants and algaecides to break down the molecular bond of dirt, grime, and organic biofilms.",
            proTip: "Allowing a 10-minute 'dwell time' for the detergent does 90% of the work, reducing the need for damaging high pressure.",
            pitfall: "Using generic bleach without buffers. Raw bleach can dry out wood fibers and damage the UV-protective coating on vinyl siding."
        },
        {
            title: "Low-Pressure Agitation",
            desc: "For stubborn areas like textured masonry or deep oil stains, we use specialized brushes to gently loosen debris without surface abrasion.",
            proTip: "A soft-bristle brush is safer for cleaning delicate trim work than increasing the psi on your pressure washer.",
            pitfall: "Using a wire brush on wood. This tears the fibers and creates a 'fuzzy' texture that holds more dirt in the future."
        },
        {
            title: "Precision High-Pressure Rinse",
            desc: "Using calibrated nozzles, we perform a controlled rinse of flatwork and masonry, removing all loosened debris and biofilms.",
            proTip: "The 25-degree 'green' tip is the industry standard for concrete cleaning, providing a balance of power and surface safety.",
            pitfall: "Getting too close with a zero-degree nozzle. This concentrated stream can actually cut through wood and etch concrete."
        },
        {
            title: "Substrate Verification",
            desc: "With the surface clean, we perform a visual inspection to check for wood rot, mortar failure, or siding damage revealed by the wash.",
            proTip: "Washing is the best time to check for 'chalking' on old paint, which is a key indicator that a property needs repainting.",
            pitfall: "Painting over a surface immediately after washing. Materials must dry to a specific moisture level to ensure new paint adhesion."
        },
        {
            title: "Final Site Wash-Down",
            desc: "We perform a broad rinse of the entire property, ensuring all windows, walkways, and foliage are free of any residual cleaning agents.",
            proTip: "A final rinse of windows with deionized water prevents spotting, leaving the glass as clean as the siding.",
            pitfall: "Leaving puddles of detergent in the driveway. Dried cleaning agents can leave white hazy streaks that are difficult to remove later."
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
                            <Waves size={12} fill="currentColor" /> Industrial Grade Cleaning
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-poppins font-bold mb-8 leading-[1.1]">
                            Pressure Washing Spokane: <br />
                            <span className="text-brand-green italic uppercase tracking-tighter text-shadow-sm">Pure Clarity.</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-10 max-w-2xl font-medium">
                            Restore your property's curb appeal and protect its integrity with our professional, surface-safe pressure washing and soft-wash services.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-5">
                            <a href={`tel:${phoneNumber}`} className="flex items-center justify-center gap-3 bg-brand-green hover:bg-green-600 text-white px-10 py-5 rounded-2xl font-extrabold text-lg transition-all shadow-xl shadow-green-500/20">
                                <Phone size={24} /> BOOK A WASH TODAY
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
                                "High-performance cleaning for siding, decks, & driveways.",
                                "Gentle Soft-Wash methods for delicate vinyl and timber.",
                                "Complete removal of moss, algae, and organic biofilms.",
                                "Eco-friendly detergents safe for Spokane pets and plants."
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
                            Industry Definition
                        </div>
                        <h2 className="text-3xl md:text-5xl font-poppins font-bold mb-8 text-brand-black">
                            What is Professional Pressure Washing?
                        </h2>
                        <div className="bg-brand-gray/30 p-8 md:p-10 rounded-3xl border-l-8 border-brand-green italic">
                            <p className="text-xl md:text-2xl text-gray-800 leading-relaxed font-medium">
                                "Pressure washing is the use of high-pressure water spray to remove loose paint, mold, grime, dust, mud, and dirt from surfaces and objects. Professional service utilizes specific calibrated nozzles and eco-friendly detergents to achieve deep cleaning without damaging the structural integrity of the substrate."
                            </p>
                        </div>
                        
                        {/* Table of Contents */}
                        <div className="mt-16 bg-white border border-gray-100 rounded-3xl p-8 shadow-sm">
                            <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-left">
                                <BookOpen size={20} className="text-brand-green" /> Inside This Guide
                            </h3>
                            <div className="grid sm:grid-cols-2 gap-4 text-left">
                                {[
                                    { label: "Soft Wash vs. Pressure Wash", id: "methods" },
                                    { label: "Curb Appeal Benefits", id: "benefits" },
                                    { label: "Our 6-Step Cleaning System", id: "process" },
                                    { label: "Concrete & Flatwork Care", id: "concrete" },
                                    { label: "Common Washing Hazards", id: "hazards" },
                                    { label: "Spokane Washing FAQ", id: "faq" }
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

            {/* Methods Section */}
            <section id="methods" className="py-16 md:py-24 bg-gray-50 scroll-mt-24 text-left">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-center text-left">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-poppins font-bold mb-8 text-brand-black">
                                Soft Wash vs. Pressure Wash
                            </h2>
                            <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-medium">
                                <p>
                                    Not every surface can handle 3000 PSI. In Spokane, our varied architecture requires a nuanced approach to cleaning.
                                </p>
                                <p>
                                    <span className="font-bold text-brand-black">Soft Washing</span> uses specialized cleaning solutions to kill organic growth at its source, requiring only low pressure for the rinse. This is the only safe method for cleaning vinyl siding, cedar fences, and asphalt roof shingles.
                                </p>
                                <p>
                                    <span className="font-bold text-brand-black">Pressure Washing</span> (or Power Washing with hot water) is reserved for hard surfaces like driveways, sidewalks, and masonry. This method relies on higher mechanical force to strip away embedded dirt and tire marks from porous concrete.
                                </p>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-brand-green rounded-[3rem] rotate-3 scale-105 opacity-10" />
                            <img 
                                src="https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?auto=format&fit=crop&q=80&w=1000" 
                                alt="Professional pressure washing a driveway" 
                                className="relative z-10 rounded-[3rem] shadow-2xl object-cover h-[500px] w-full"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section id="benefits" className="py-16 md:py-24 bg-white scroll-mt-24 text-left">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-poppins font-bold text-brand-black mb-4 uppercase tracking-tighter">Cleaning Benefits</h2>
                        <p className="text-gray-500 max-w-2xl mx-auto">More than just a clean look—it's a protective measure for your investment.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8 text-left">
                        {[
                            { name: "Curb Appeal", desc: "Instantly increase your property value by removing unsightly moss and dirt stains from the exterior." },
                            { name: "Prevent Damage", desc: "Algae and mold roots can actually eat into paint and wood fibers, causing premature rot." },
                            { name: "Healthy Environment", desc: "Removing pollen, mold, and mildew spores from around your home improves local air quality for your family." }
                        ].map((item, i) => (
                            <div key={i} className="p-8 bg-gray-50 rounded-[2.5rem] border border-gray-100 hover:border-brand-green transition-all shadow-sm">
                                <div className="w-14 h-14 bg-brand-green/10 rounded-2xl flex items-center justify-center text-brand-green mb-6">
                                    <Wind size={24} />
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
                        <h2 className="text-brand-green font-bold tracking-widest text-sm mb-4 uppercase">Prep. Wash. Reset.</h2>
                        <h3 className="text-4xl md:text-5xl font-poppins font-bold mb-6 text-white leading-tight">Our 6-Step Surface System</h3>
                        <p className="text-gray-400 max-w-2xl mx-auto">We don't just 'spray and pray'. We follow a scientific cleaning protocol.</p>
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

            {/* Concrete Cleaning */}
            <section id="concrete" className="py-16 md:py-24 bg-white scroll-mt-24 text-left">
                <div className="max-w-7xl mx-auto px-4 text-left">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-poppins font-bold mb-10 text-brand-black">Concrete & Flatwork Care</h2>
                        <div className="space-y-8 text-left">
                            <div className="flex gap-6">
                                <div className="w-12 h-12 bg-brand-green/10 rounded-2xl flex items-center justify-center text-brand-green shrink-0">
                                    <CheckSquare size={24} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold mb-2 uppercase tracking-tighter">Surface Spinning Technology</h4>
                                    <p className="text-gray-600 leading-relaxed font-medium">
                                        We use industrial 'surface spinners' that provide a uniform, streak-free clean for large areas like driveways. This prevents the 'zebra stripes' often seen with amateur wand-only washing.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <div className="w-12 h-12 bg-brand-green/10 rounded-2xl flex items-center justify-center text-brand-green shrink-0">
                                    <ShieldCheck size={24} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold mb-2 uppercase tracking-tighter">Post-Wash Sealing</h4>
                                    <p className="text-gray-600 leading-relaxed font-medium text-sm">
                                        Once your concrete is bare and clean, it's the perfect time to apply a silane/siloxane sealer. This prevents future oil penetration and salt damage during Spokane's freeze-thaw cycles.
                                    </p>
                                </div>
                            </div>
                            <div className="bg-brand-gray/50 border-l-4 border-brand-green p-8 rounded-r-3xl mt-12">
                                <h4 className="font-bold text-brand-black mb-2 flex items-center gap-2 uppercase tracking-widest text-xs">
                                    <User size={18} className="text-brand-green" /> Expert Insight
                                </h4>
                                <p className="text-gray-700 italic font-medium leading-relaxed">
                                    "Many homeowners try to DIY pressure washing, but they often end up etching their concrete or driving water into their siding. Professional washing is about controlled volume, not just extreme pressure." — {ownerName}, Founder
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Common Hazards */}
            <section id="hazards" className="py-16 md:py-24 bg-gray-50 scroll-mt-24 text-left">
                <div className="max-w-7xl mx-auto px-4 text-left">
                    <h2 className="text-3xl md:text-5xl font-poppins font-bold mb-12 text-center text-brand-black uppercase tracking-tighter">Common Washing Hazards</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { h: "Siding Etching", r: "Using too much pressure too close to the siding, leaving permanent 'wand marks' that show through new paint." },
                            { h: "Water Migration", s: "Spraying water upwards under siding laps, which can soak insulation and create the perfect environment for mold." },
                            { h: "Seal Injection", r: "High pressure can blow out the caulking around windows and doors, compromising your home's thermal seal." },
                            { h: "Concrete Scarring", s: "Inexperienced users often use a 0-degree tip that cuts into concrete, leaving permanent 'scribbles' on the driveway." },
                            { h: "Plant Desiccation", r: "Failing to water down plants before and after using cleaning agents, leading to burned or dead foliage." }
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-8 rounded-[2rem] shadow-sm border border-red-500/20 group hover:border-red-500 transition-all">
                                <h4 className="text-xl font-bold mb-4 text-brand-black flex items-center gap-2">
                                    <AlertTriangle size={20} className="text-red-500" /> {item.h}
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
                        <h2 className="text-3xl md:text-5xl font-poppins font-bold mb-4 uppercase tracking-tighter leading-tight">Spokane Pressure Washing FAQ</h2>
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
                                Bring Your Property <br />Back to Life.
                            </h2>
                            <p className="text-gray-400 text-xl font-medium mb-12 max-w-2xl mx-auto leading-relaxed">
                                Don't let dirt and moss devalue your Spokane home. Inveset in a professional, safe exterior cleaning today.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-6">
                                <a href={`tel:${phoneNumber}`} className="bg-brand-green hover:bg-green-600 text-white px-12 py-6 rounded-2xl font-extrabold text-2xl transition-all hover:shadow-2xl shadow-green-500/30">
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
                        <div className="w-40 h-40 shrink-0 relative text-center">
                            <img src="/robert.jpg" alt={ownerName} className="rounded-full w-full h-full object-cover relative z-10 border-4 border-white shadow-xl" />
                        </div>
                        <div className="text-left">
                            <p className="text-brand-green font-bold text-sm uppercase tracking-widest mb-2">Expert Review By</p>
                            <h3 className="text-3xl font-poppins font-bold mb-4">{ownerName}</h3>
                            <p className="text-gray-600 leading-relaxed mb-6 font-medium">
                                Robert personally oversees every exterior cleaning project, ensuring all surfaces are treated with the correct pressure and cleaning agents to guarantee a deep clean without risk to your property.
                            </p>
                            <div className="flex items-center justify-start gap-4 text-xs text-gray-400 font-bold uppercase tracking-tighter">
                                <p>Updated: April 2026</p>
                                <div className="w-1 h-1 bg-gray-300 rounded-full" />
                                <p>Exterior Cleaning Specialist</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default PressureWashingPage;
