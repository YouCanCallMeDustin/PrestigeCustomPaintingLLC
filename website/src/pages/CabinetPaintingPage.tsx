import { Phone, CheckCircle, ArrowLeft, ArrowRight, Star, Info, AlertTriangle, User, BookOpen, Layers, CheckSquare, Sparkles, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { SITE_INFO } from '../lib/constants';
import { injectPageSEO } from '../lib/seo';
import { generateWebPageSchema, generateBreadcrumbSchema, generateHowToSchema } from '../lib/schemaGenerator';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function CabinetPaintingPage() {
    const { phoneNumber, email, ownerName } = SITE_INFO;

    const faqs = [
        {
            q: "Is it better to paint or replace kitchen cabinets in Spokane?",
            a: "Painting is significantly more cost-effective. Professional refinishing offers a factory-grade look for about 20-30% of the cost of new cabinets, saving you thousands while achieving a high-end aesthetic."
        },
        {
            q: "How long does the cabinet painting process take?",
            a: "A typical kitchen takes 5–7 business days. We minimize disruption by spraying doors off-site in our controlled environment, while the cabinet boxes are refinished in your home with meticulous masking."
        },
        {
            q: "Will the paint chip or peel on my cabinets?",
            a: "Not with our process. We use industrial-grade 'bonding' primers and urethane enamels (like Benjamin Moore SCUFF-X or Sherwin Williams Emerald Urethane) specifically designed for the high-wear demands of a kitchen."
        },
        {
            q: "Do you spray or brush the cabinets?",
            a: "We exclusively use HVLP (High Volume Low Pressure) spray systems for doors and drawer fronts. This ensures an ultra-smooth, glass-like finish with zero brush marks or roller texture."
        },
        {
            q: "Can you change the color of dark oak cabinets?",
            a: "Yes! Going from honey oak or dark cherry to a modern white or gray is our specialty. We use high-build primers to hide the heavy grain of woods like oak for a smoother finish."
        },
        {
            q: "Can I use my kitchen while the cabinets are being painted?",
            a: "Your kitchen will be accessible in the evenings, though we ask that major cooking be paused during the preparation and spraying phases to prevent dust and oil contamination."
        }
    ];

    const steps = [
        {
            title: "Hardware Removal & Labeling",
            description: "We dismantle all doors, drawers, and hardware. Every hinge is meticulously cataloged so that re-installation is perfectly aligned.",
            proTip: "Keep original hardware in labeled bags; even same-year hinges can have slight variations in wear.",
            pitfall: "Losing track of door locations. Cabinet boxes often have unique widths that aren't perfectly interchangeable."
        },
        {
            title: "Chemical Degreasing",
            description: "We scrub all surfaces with industrial degreasers (TSP substitute) to remove Spokane's toughest cooking oils and grease residues.",
            proTip: "Pay extra attention to the areas around the stove and handles where skin oils and steam accumulate.",
            pitfall: "Painting over oil. No primer—regardless of quality—will bond to a greasy surface."
        },
        {
            title: "Mechanical Sanding",
            description: "We use HEPA-filtered dustless sanders to 'profile' the existing factory finish. This creates microscopic ridges for the new primer to bite into.",
            proTip: "Use 220-grit sandpaper for a surface that is rough enough for adhesion but smooth enough for a fine finish.",
            pitfall: "Under-sanding 'dead spots' or corners. These are the areas where paint typically chips first."
        },
        {
            title: "Bonding Priming",
            description: "We spray a specialized high-adhesion primer designed to stick to non-porous surfaces like factory-finished wood and laminate.",
            proTip: "For heavy-grain wood like Oak, we use high-build primers to fill the pores for a more modern, smooth look.",
            pitfall: "Using standard wall primer. Cabinetry requires chemical-bonding primers to resist heat and moisture."
        },
        {
            title: "Industrial Coating Spray",
            description: "We apply two perfectly atomized coats of premium urethane enamel using HVLP sprayers for a factory-smooth, durable finish.",
            proTip: "Spray doors horizontally to allow the paint to 'level' perfectly, eliminating any orange peel texture.",
            pitfall: "Applying coats too thick. This causes 'runs' and prevents the paint from curing to its full hardness."
        },
        {
            title: "Re-installation & Fine Tuning",
            description: "We re-hang all components, install hardware, and perform a detailed alignment check to ensure everything closes perfectly.",
            proTip: "Install small rubber 'bumpers' to prevent the newly cured finish from sticking to the frames.",
            pitfall: "Rushing re-installation before the paint reaches its 'dry-to-handle' state."
        }
    ];

    useEffect(() => {
        const title = "Cabinet Painting Spokane | Professional Kitchen Refinishing";
        const description = "Expert cabinet painters in Spokane, WA. Transform your kitchen with factory-grade finishes, durable coatings, and professional refinishing. Free estimates!";

        return injectPageSEO({
            seoTitle: title,
            description,
            path: '/cabinet-painting-spokane',
            schemas: [
                { id: 'faq', data: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })) } },
                {
                    id: 'webpage',
                    data: generateWebPageSchema({
                        topic: title,
                        description,
                        url: "https://prestigecustompaintingllc.com/cabinet-painting-spokane"
                    })
                },
                {
                    id: 'breadcrumb',
                    data: generateBreadcrumbSchema([
                        { name: "Home", path: "/" },
                        { name: "Cabinet Painting", path: "/cabinet-painting-spokane" }
                    ])
                },
                {
                    id: 'howto',
                    data: generateHowToSchema({
                        name: "How to Professionally Refinish Kitchen Cabinets",
                        description: "The 6-step factory finish system we use for cabinet painting and refinishing.",
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
                            <Star size={12} fill="currentColor" /> Factory-Grade Cabinet Refinishing
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-poppins font-bold mb-8 leading-tight">
                            Cabinet Painting Spokane: <br />
                            <span className="text-brand-green italic">The Smarter Remodel.</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-10 max-w-2xl font-medium">
                            Don't replace your kitchen—refinish it. Prestige Custom Painting LLC delivers glass-smooth, industrial-strength cabinet finishes that save you $10,000+ compared to a full replacement.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-5">
                            <a href={`tel:${phoneNumber}`} className="flex items-center justify-center gap-3 bg-brand-green hover:bg-green-600 text-white px-10 py-5 rounded-2xl font-extrabold text-lg transition-all shadow-xl shadow-green-500/20">
                                <Phone size={24} /> GET YOUR QUOTE
                            </a>
                            <Link to="/our-work" className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all border border-white/20">
                                SEE TRANSFORMATIONS <ArrowRight size={22} />
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
                            <Layers size={18} /> Why Refinish?
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                "70% cheaper than new kitchen cabinet replacement.",
                                "Rock-hard industrial coatings resistant to grease & heat.",
                                "HVLP-sprayed finish for zero brush marks.",
                                "Minimal downtime—kitchen back in action in 5-7 days."
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
                            What is Professional Cabinet Refinishing?
                        </h2>
                        <div className="bg-brand-gray/30 p-8 md:p-10 rounded-3xl border-l-8 border-brand-green italic">
                            <p className="text-xl md:text-2xl text-gray-800 leading-relaxed font-medium">
                                "Professional cabinet refinishing is the technical process of cleaning, sanding, and applying industrial-grade 'bonding' primers and topcoats to existing cabinetry. Unlike standard house painting, cabinet refinishing uses atomized spray technology and heat-resistant enamels to achieve a factory-smooth finish that rivals the durability of brand-new units."
                            </p>
                        </div>

                        {/* Table of Contents */}
                        <div className="mt-16 bg-white border border-gray-100 rounded-3xl p-8 shadow-sm">
                            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                                <BookOpen size={20} className="text-brand-green" /> Table of Contents
                            </h3>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {[
                                    { label: "The Intelligent Alternative to Remodeling", id: "intelligent" },
                                    { label: "Durability vs. DIY Solutions", id: "durability" },
                                    { label: "The 6-Step Factory Process", id: "process" },
                                    { label: "Cabinet Painting Best Practices", id: "best-practices" },
                                    { label: "Aftercare & Maintenance", id: "maintenance" },
                                    { label: "Why Projects Fail", id: "fail" },
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
            <section id="intelligent" className="py-16 md:py-24 bg-gray-50 scroll-mt-24">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-poppins font-bold mb-8 text-brand-black">
                                The Intelligent Alternative to Kitchen Remodeling
                            </h2>
                            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                                <p>
                                    A full kitchen renovation in Spokane can easily exceed $30,000, with cabinets accounting for nearly 40% of that budget. If your cabinet boxes are structurally sound, tearing them out is unnecessary.
                                </p>
                                <p>
                                    Our refinishing service focuses on the "aesthetic shell." By removing the doors and drawer fronts to be sprayed in our controlled facility, and expertly refinishing the boxes in your home, we provide a complete visual transformation with zero demolition.
                                </p>
                                <div className="bg-white/80 p-6 rounded-2xl border-l-4 border-brand-green mt-6 font-medium text-gray-800">
                                    <strong>How much does cabinet painting save compared to replacing?</strong><br/>
                                    Professional cabinet refinishing in Spokane is an industrial process that saves homeowners up to 70% compared to full replacement. It involves chemical degreasing, mechanical sanding, and HVLP application of urethane enamels. This transformation typically takes 5–7 days and provides a factory-smooth finish resistant to Spokane’s seasonal humidity shifts.
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-brand-green rounded-[3rem] rotate-3 scale-105 opacity-10" />
                            <img
                                src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=1000"
                                alt="Modernized white kitchen cabinets in Spokane home"
                                className="relative z-10 rounded-[3rem] shadow-2xl object-cover h-[500px] w-full"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Comparison Table Section */}
            <section className="py-16 bg-white border-t border-gray-100">
                <div className="max-w-5xl mx-auto px-4">
                    <h3 className="text-3xl font-bold mb-8 text-center">Refinishing vs Refacing vs Replacing</h3>
                    <div className="overflow-x-auto shadow-sm border border-gray-200 rounded-2xl">
                        <table className="w-full text-left bg-white">
                            <thead className="bg-gray-50 text-brand-black">
                                <tr>
                                    <th className="p-5 font-bold">Method</th>
                                    <th className="p-5 font-bold">Average Cost</th>
                                    <th className="p-5 font-bold">Timeline</th>
                                    <th className="p-5 font-bold">Best For</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                <tr>
                                    <td className="p-5 font-bold text-brand-green">Professional Painting</td>
                                    <td className="p-5">$3,000 - $6,000</td>
                                    <td className="p-5">5 to 7 Days</td>
                                    <td className="p-5">Sound cabinets needing a modern color update.</td>
                                </tr>
                                <tr>
                                    <td className="p-5 font-bold text-gray-600">Cabinet Refacing</td>
                                    <td className="p-5">$8,000 - $12,000</td>
                                    <td className="p-5">2 to 3 Weeks</td>
                                    <td className="p-5">Changing the physical style/design of the doors.</td>
                                </tr>
                                <tr>
                                    <td className="p-5 font-bold text-gray-600">Full Replacement</td>
                                    <td className="p-5">$20,000 - $40,000+</td>
                                    <td className="p-5">4 to 8 Weeks</td>
                                    <td className="p-5">Completely changing the kitchen layout or footprint.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Durability Comparison */}
            <section id="durability" className="py-16 md:py-24 bg-white scroll-mt-24">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-poppins font-bold text-brand-black mb-4">Professional Refinishing vs. DIY</h2>
                        <p className="text-gray-500 max-w-2xl mx-auto">Why industrial coatings outperform hardware store kits every time.</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100">
                            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                <Info size={28} className="text-gray-400" /> DIY / Amateur Results
                            </h3>
                            <ul className="space-y-4">
                                {[
                                    "Visible brush and roller marks.",
                                    "Latex paint that feels 'gummy' or sticky.",
                                    "Peeling around handles due to improper degreasing.",
                                    "Finish chips after minimal impact.",
                                    "Standard primers that won't stick to factory clear coats."
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-3 text-gray-500 line-through decoration-red-400/50">
                                        <AlertTriangle size={18} className="shrink-0 mt-1" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-brand-black p-10 rounded-[2.5rem] text-white ring-4 ring-brand-green/20">
                            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                <Sparkles size={28} className="text-brand-green" /> Prestige Factory Finish
                            </h3>
                            <ul className="space-y-4">
                                {[
                                    "HVLP-atomized spray for a glass-smooth surface.",
                                    "Industrial urethane enamels that cure rock-hard.",
                                    "Chemical degreasing ensures a permanent bond.",
                                    "High-build primers that mask heavy wood grain.",
                                    "Heat-resistant coatings that won't yellow over time."
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-3 text-brand-green">
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
                        <h2 className="text-brand-green font-bold tracking-widest text-sm mb-4 uppercase">The Signature System</h2>
                        <h3 className="text-4xl md:text-5xl font-poppins font-bold mb-6">Our 6-Step Cabinet Refinishing Process</h3>
                        <p className="text-gray-400 max-w-2xl mx-auto">Engineered to withstand the high-use environment of a Spokane kitchen.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {steps.map((step, i) => (
                            <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-3xl relative overflow-hidden group hover:border-brand-green/50 transition-all">
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

            {/* Best Practices */}
            <section id="best-practices" className="py-16 md:py-24 bg-white scroll-mt-24">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-poppins font-bold mb-10 text-brand-black">Cabinet Refinishing Best Practices</h2>
                        <div className="space-y-8">
                            <div className="flex gap-6">
                                <div className="w-12 h-12 bg-brand-green/10 rounded-2xl flex items-center justify-center text-brand-green shrink-0">
                                    <Info size={24} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold mb-2">The 'Bite' Test</h4>
                                    <p className="text-gray-600 leading-relaxed">
                                        We perform an adhesion test on a small interior area before the full spray. This ensures the primer 'bites' into the existing factory clear coat, preventing future peeling.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <div className="w-12 h-12 bg-brand-green/10 rounded-2xl flex items-center justify-center text-brand-green shrink-0">
                                    <DollarSign size={24} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold mb-2">Hardware Upgrade Opportunity</h4>
                                    <p className="text-gray-600 leading-relaxed">
                                        Refinishing is the perfect time to upgrade to larger pulls or modern handles. We can fill existing screw holes before painting to allow for a completely new hardware layout.
                                    </p>
                                </div>
                            </div>
                            <div className="bg-brand-gray/50 border-l-4 border-brand-green p-8 rounded-r-3xl">
                                <h4 className="font-bold text-brand-black mb-2 flex items-center gap-2 uppercase tracking-widest text-sm">
                                    <User size={18} className="text-brand-green" /> Expert Insight
                                </h4>
                                <p className="text-gray-700 italic font-medium leading-relaxed">
                                    "The most critical 5 minutes of any cabinet job is the initial degreasing. If there is a single microscopic oil print near a handle, the paint will eventually chip. We treat cleaning as the most important phase of our system." — {ownerName}, Founder
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Maintenance Checklist */}
            <section id="maintenance" className="py-16 md:py-24 bg-gray-50 scroll-mt-24">
                <div className="max-w-3xl mx-auto px-4">
                    <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-gray-100">
                        <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
                            <CheckSquare size={28} className="text-brand-green" /> Cabinet Care Checklist
                        </h3>
                        <div className="space-y-6">
                            {[
                                "Avoid using abrasive sponges or harsh chemicals; use mild dish soap.",
                                "Wipe away steam or water droplets from cabinets above the stove or dishwasher.",
                                "Allow 30 days for the finish to reach its full industrial cure before heavy cleaning.",
                                "Keep cabinet handle screws tight to prevent wiggling and surface scratches.",
                                "Immediately dry any accidental spills to prevent moisture from sitting on the finish."
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
            <section id="fail" className="py-16 md:py-24 bg-white scroll-mt-24">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-3xl md:text-5xl font-poppins font-bold mb-12 text-center text-brand-black">Why Most Cabinet Paint Jobs Fail</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { m: "Poor Degreasing", s: "Cooking oils are invisible. If not removed with industrial degreasers, they cause 'fisheyes' and peeling." },
                            { m: "The Wrong Primer", s: "Standard latex primer is too soft. We only use high-adhesion shellac or urethane primers." },
                            { m: "Over-Applying Paint", s: "Thick coats sag and remain soft for weeks. We spray multiple thin, atomized layers for a hard shell." },
                            { m: "No Sanding Between Coats", s: "For a factory finish, the primer must be fine-sanded to a glass-smooth state before the topcoat." },
                            { m: "Inadequate Curing Time", s: "Re-hanging doors while the paint is 'sticky' causes permanent damage to the edges." }
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
                                Transform Your Kitchen Today
                            </h2>
                            <p className="text-gray-400 text-xl font-medium mb-12 max-w-2xl mx-auto leading-relaxed">
                                Why wait for a massive renovation? Get a factory-grade kitchen transformation in less than a week.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-6">
                                <a href={`tel:${phoneNumber}`} className="bg-brand-green hover:bg-green-600 text-white px-12 py-6 rounded-2xl font-extrabold text-2xl transition-all hover:scale-105 shadow-2xl shadow-green-500/40">
                                    {phoneNumber}
                                </a>
                                <a href={`mailto:${email}`} className="bg-white/10 hover:bg-white/20 text-white px-12 py-6 rounded-2xl font-bold text-2xl backdrop-blur-md transition-all border border-white/20">
                                    GET CABINET PRICING
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
                                Robert specializes in high-end cabinet refinishing, utilizing HVLP spray technology to deliver factory-level results for Spokane homeowners seeking a premium kitchen transformation.
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

export default CabinetPaintingPage;
