import { Phone, CheckCircle, ArrowLeft, ArrowRight, Star, AlertTriangle, User, BookOpen, Layers, CheckSquare, Sparkles, Building2, Clock, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { SITE_INFO } from '../lib/constants';
import { injectPageSEO } from '../lib/seo';
import { generateWebPageSchema, generateBreadcrumbSchema, generateHowToSchema } from '../lib/schemaGenerator';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function CommercialPaintingPage() {
    const { phoneNumber, email, ownerName } = SITE_INFO;

    const faqs = [
        {
            q: "Can you work around our business hours in Spokane?",
            a: "Yes. We specialize in evening, weekend, and holiday shifts to ensure your Spokane business remains operational. We can phase projects to tackle one department or suite at a time, minimizing any impact on your staff and customers."
        },
        {
            q: "Do you use low-VOC or odorless paints for commercial interiors?",
            a: "Absolutely. For occupied offices and medical facilities, we utilize zero-VOC and low-odor commercial coatings (like Sherwin-Williams ProMar 200 Zero). This allows your team to work the next day without headaches or lingering chemical smells."
        },
        {
            q: "What types of commercial properties do you paint in Spokane?",
            a: "We handle a wide range of facilities, including retail stores, high-traffic office buildings, HOA multi-family units, medical clinics, and industrial warehouses throughout the Spokane and Inland Northwest region."
        },
        {
            q: "Are you licensed and insured for large-scale commercial projects?",
            a: "Yes. Prestige Custom Painting LLC is fully licensed, bonded, and insured in Washington State. We carry comprehensive general liability and worker's compensation coverage to protect your business assets."
        },
        {
            q: "Do you offer industrial-strength floor coatings?",
            a: "Yes, we specialize in high-performance epoxy and urethane floor coatings for warehouses, garages, and commercial kitchens. These are designed for chemical resistance and heavy forklift traffic."
        },
        {
            q: "What is your project management process for large facilities?",
            a: "Every commercial project is assigned a dedicated site lead who coordinates daily with your facility manager. We provide regular progress reports and maintain a strict timeline to ensure zero project 'creep'."
        }
    ];

    const steps = [
        {
            title: "Industrial Site Assessment",
            desc: "We perform a walk-through to identify high-traffic high-wear zones and determine specific substrate needs (CMU, metal, or drywall).",
            proTip: "Point out existing damage from carts or machinery; we can install scuff-resistant guards in those areas.",
            pitfall: "Using standard residential paint in a commercial corridor. It will show scuffs within weeks."
        },
        {
            title: "Safety & Zoning",
            desc: "We establish OSHA-compliant masking and exclusion zones. All work areas are clearly cordoned off to ensure employee and customer safety.",
            proTip: "Use blue painter's tape to mark 'off-limits' zones for employees 24 hours before the project starts.",
            pitfall: "Failing to mark wet paint areas. One customer touch can result in a costly re-do and a damaged suit."
        },
        {
            title: "Mechanical Surface Prep",
            desc: "We use power washing, grinding, or chemical etching depending on the substrate to ensure industrial-grade adhesion.",
            proTip: "For metal surfaces, mechanical wire brushing is essential to remove oxidation before priming.",
            pitfall: "Skiping prep on concrete floors. If not ground or etched, epoxy will peel under hot tires or pallets."
        },
        {
            title: "Specialized Multi-Surface Priming",
            desc: "We apply substrate-specific primers, including epoxy primers for concrete or DTM (Direct-to-Metal) coatings for steel structures.",
            proTip: "In medical offices, use antimicrobial primers that help inhibit the growth of mold and mildew.",
            pitfall: "Using one single primer for all surfaces. Metal and drywall require fundamentally different bonding agents."
        },
        {
            title: "High-Performance Topcoat",
            desc: "We apply industrial-grade coatings, including scuff-resistant enamels and chemical-resistant urethanes for maximum longevity.",
            proTip: "Choose a satin or semi-gloss finish for high-traffic halls; they are much easier for cleaning crews to maintain.",
            pitfall: "Applying paint in low-ventilation areas without proper air scrubbers."
        },
        {
            title: "Progress Review & Final Walk",
            desc: "We conduct a systematic inspection with your facility manager to ensure zero business disruption and absolute quality.",
            proTip: "Keep a small 'touch-up' kit labeled by room in your maintenance closet for future repairs.",
            pitfall: "Completing the project without a signed-off walkthrough. Commercial projects need documented approval."
        }
    ];

    useEffect(() => {
        const title = "Commercial Painting Spokane | Professional Business & Facility Painters";
        const description = "Spokane's leading commercial painting contractors. High-performance coatings, flexible scheduling, and professional facility restoration. Free estimates!";

        return injectPageSEO({
            title,
            description,
            path: '/commercial-painting-spokane',
            schemas: [
                { id: 'faq', data: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })) } },
                {
                    id: 'webpage',
                    data: generateWebPageSchema({
                        title,
                        description,
                        url: "https://prestigecustompaintingllc.com/commercial-painting-spokane"
                    })
                },
                {
                    id: 'breadcrumb',
                    data: generateBreadcrumbSchema([
                        { name: "Home", path: "/" },
                        { name: "Commercial Painting", path: "/commercial-painting-spokane" }
                    ])
                },
                {
                    id: 'howto',
                    data: generateHowToSchema({
                        name: "Commercial Painting Optimization Process",
                        description: "Our 6-step commercial facility painting system.",
                        steps: steps.map(s => ({ name: s.title, text: s.desc }))
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
                            <Building2 size={12} fill="currentColor" /> Industrial & Commercial Experts
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-poppins font-bold mb-8 leading-tight">
                            Commercial Painting Spokane: <br />
                            <span className="text-brand-green italic">Built for Business.</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-10 max-w-2xl font-medium">
                            Protect your facility and project professionalism. Prestige Custom Painting LLC delivers high-performance industrial coatings with zero-disruption scheduling for Spokane businesses.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-5">
                            <a href={`tel:${phoneNumber}`} className="flex items-center justify-center gap-3 bg-brand-green hover:bg-green-600 text-white px-10 py-5 rounded-2xl font-extrabold text-lg transition-all shadow-xl shadow-green-500/20">
                                <Phone size={24} /> GET A QUOTE
                            </a>
                            <Link to="/our-work" className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all border border-white/20">
                                VIEW PROJECTS <ArrowRight size={22} />
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
                            <Layers size={18} /> Business Logic
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                "Scalable crews for large facilities & tight deadlines.",
                                "Night & weekend shifts to ensure zero operation downtime.",
                                "Industrial-grade coatings for high-traffic environments.",
                                "Zero-VOC options for occupied offices & medical spaces."
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
                            What makes Commercial Painting Unique?
                        </h2>
                        <div className="bg-brand-gray/30 p-8 md:p-10 rounded-3xl border-l-8 border-brand-green italic">
                            <p className="text-xl md:text-2xl text-gray-800 leading-relaxed font-medium">
                                "Commercial painting is the industrial-scale application of specialized coatings to business environments. It differs from residential work by utilizing high-performance chemicals (epoxies, urethanes), specialized equipment for multi-surface substrates (CMU, metal), and rigorous adherence to facility safety and operational scheduling."
                            </p>
                        </div>

                        {/* Table of Contents */}
                        <div className="mt-16 bg-white border border-gray-100 rounded-3xl p-8 shadow-sm">
                            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                                <BookOpen size={20} className="text-brand-green" /> Table of Contents
                            </h3>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {[
                                    { label: "Protecting Industrial Assets", id: "assets" },
                                    { label: "High-Traffic Durability Standards", id: "durability" },
                                    { label: "The 6-Step Commercial System", id: "process" },
                                    { label: "Scuff-Resistant Technology", id: "scuff" },
                                    { label: "Facility Maintenance Tips", id: "maintenance" },
                                    { label: "Common Facility Failures", id: "failures" },
                                    { label: "Commercial FAQ", id: "faq" }
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
            <section id="assets" className="py-16 md:py-24 bg-gray-50 scroll-mt-24">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-poppins font-bold mb-8 text-brand-black">
                                Protecting Your Industrial and Business Assets
                            </h2>
                            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                                <p>
                                    In a commercial environment, paint isn't just decoration—it's protection. For Spokane warehouses and retail spaces, exterior coatings must withstand heavy UV exposure and extreme freeze-thaw cycles.
                                </p>
                                <p>
                                    We utilize high-performance coatings that protect metal structures from corrosion, CMU blocks from moisture intrusion, and drywall from the daily abuse of foot traffic and industrial carts. Our system is designed to extend the life of your facility.
                                </p>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-brand-green rounded-[3rem] rotate-3 scale-105 opacity-10" />
                            <img
                                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000"
                                alt="Modern Spokane office building interior painting"
                                className="relative z-10 rounded-[3rem] shadow-2xl object-cover h-[500px] w-full"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Durability Comparison */}
            <section id="durability" className="py-16 md:py-24 bg-white scroll-mt-24">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-poppins font-bold text-brand-black mb-4">Why Commercial Grade Materials?</h2>
                        <p className="text-gray-500 max-w-2xl mx-auto">Standard paint fails in business settings. We only use industrial coatings.</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="group bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100 hover:border-red-100 transition-all">
                            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                <AlertTriangle size={28} className="text-red-400" /> Residential Standards
                            </h3>
                            <ul className="space-y-4">
                                {[
                                    "Shows scuffs and black marks almost immediately.",
                                    "Not chemical resistant; dyes and oils penetrate.",
                                    "Brittle finishes that crack under industrial vibration.",
                                    "Requires repainting every 2–3 years in high-traffic zones.",
                                    "Low adhesion to non-porous metal or concrete."
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-3 text-gray-500 line-through decoration-red-400/50">
                                        <AlertTriangle size={18} className="shrink-0 mt-1" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-brand-black p-10 rounded-[2.5rem] text-white ring-4 ring-brand-green/20">
                            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                <Sparkles size={28} className="text-brand-green" /> Prestige Industrial Finish
                            </h3>
                            <ul className="space-y-4">
                                {[
                                    "Scuff-X technology keeps walls looking fresh for years.",
                                    "Chemical-resistant formulations for healthcare & industrial.",
                                    "Flexible urethanes that expand with building movement.",
                                    "10+ year lifespan with minimal maintenance.",
                                    "Specialized bonding to steel, concrete, and plastic."
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
                        <h2 className="text-brand-green font-bold tracking-widest text-sm mb-4 uppercase">Operational Excellence</h2>
                        <h3 className="text-4xl md:text-5xl font-poppins font-bold mb-6">Our 6-Step Commercial Painting System</h3>
                        <p className="text-gray-400 max-w-2xl mx-auto">Designed for minimum business disruption and maximum durability.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {steps.map((step, i) => (
                            <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-3xl group hover:border-brand-green/50 transition-all">
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

            {/* Expert Insights */}
            <section id="scuff" className="py-16 md:py-24 bg-white scroll-mt-24">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-poppins font-bold mb-10 text-brand-black">Advanced Scuff-Resistant Technology</h2>
                        <div className="space-y-8">
                            <div className="flex gap-6">
                                <div className="w-12 h-12 bg-brand-green/10 rounded-2xl flex items-center justify-center text-brand-green shrink-0">
                                    <Clock size={24} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold mb-2">Extended Facility Lifecycles</h4>
                                    <p className="text-gray-600 leading-relaxed">
                                        Traditional eggshell finishes show black marks within months. We specify Benjamin Moore SCUFF-X, a single-component coating engineered specifically for hallways and lobbies that resists the rubbing of bags and equipment.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <div className="w-12 h-12 bg-brand-green/10 rounded-2xl flex items-center justify-center text-brand-green shrink-0">
                                    <Briefcase size={24} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold mb-2">Flexible Business Scheduling</h4>
                                    <p className="text-gray-600 leading-relaxed">
                                        We understand that 9-to-5 isn't always an option. Our crews operate in three-shift potential, tackling retail floors after hours so your customers never see a drop cloth or smell fresh paint.
                                    </p>
                                </div>
                            </div>
                            <div className="bg-brand-gray/50 border-l-4 border-brand-green p-8 rounded-r-3xl mt-12">
                                <h4 className="font-bold text-brand-black mb-2 flex items-center gap-2 uppercase tracking-widest text-sm">
                                    <User size={18} className="text-brand-green" /> Expert Perspective
                                </h4>
                                <p className="text-gray-700 italic font-medium leading-relaxed">
                                    "The biggest hidden cost in commercial painting is the lost revenue from business disruption. Our goal is to be invisible—finishing a retail floor or office suite overnight so business continues as usual the next morning." — {ownerName}, Founder
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
                            <CheckSquare size={28} className="text-brand-green" /> Commercial Facility Care
                        </h3>
                        <div className="space-y-6">
                            {[
                                "Wash high-traffic corridor walls twice annually with non-abrasive cleaners.",
                                "Touch up black scuffs immediately with a foam brush to prevent layer build-up.",
                                "Inspect exterior metal flashing every spring for signs of rust or oxidation.",
                                "Ensure door closers are properly adjusted to prevent handles from slamming into walls.",
                                "Maintain air humidity to prevent joint separation in large drywall spans."
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
            <section id="failures" className="py-16 md:py-24 bg-white scroll-mt-24">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-3xl md:text-5xl font-poppins font-bold mb-12 text-center text-brand-black leading-tight">Common Commercial Painting Failures</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { f: "Improper Metal Adhesion", r: "Painting over oxidized steel causes rapid peeling. We mechanically grind and use DTM primers." },
                            { f: "Incorrect Traffic Rating", s: "Residential floor paint will peel under forklifts. We specify 100% solids epoxy for industrial use." },
                            { f: "Poor Joint Management", r: "Large commercial walls expand. We use flexible caulking and coatings to prevent cracking at seams." },
                            { f: "Over-Saturating CMU", s: "Concrete blocks absorb moisture. If not sealed correctly, the paint will bubble from vapor pressure." },
                            { f: "Safety Negligence", r: "Unmarked work zones lead to accidents. We maintain strict OSHA compliance with visual barriers." }
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-8 rounded-[2rem] shadow-sm border border-red-500/20 group hover:border-red-500 transition-all overflow-hidden relative">
                                <h4 className="text-xl font-bold mb-4 text-brand-black flex items-center gap-2">
                                    <AlertTriangle size={20} className="text-red-500" /> {item.f}
                                </h4>
                                <p className="text-gray-600 text-sm leading-relaxed"><span className="font-bold text-brand-green uppercase tracking-tighter">The Solution:</span> {item.r || item.s}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="py-16 md:py-24 bg-gray-50 scroll-mt-24">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-poppins font-bold mb-4">Commercial Painting FAQ</h2>
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
                                Ready to Upgrade Your Facility?
                            </h2>
                            <p className="text-gray-400 text-xl font-medium mb-12 max-w-2xl mx-auto leading-relaxed">
                                Get a professional, high-performance painting strategy tailored to your business operations.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-6">
                                <a href={`tel:${phoneNumber}`} className="bg-brand-green hover:bg-green-600 text-white px-12 py-6 rounded-2xl font-extrabold text-2xl transition-all hover:scale-105 shadow-2xl shadow-green-500/40">
                                    {phoneNumber}
                                </a>
                                <a href={`mailto:${email}`} className="bg-white/10 hover:bg-white/20 text-white px-12 py-6 rounded-2xl font-bold text-2xl backdrop-blur-md transition-all border border-white/20">
                                    INDUSTRIAL QUOTE
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
                            <p className="text-brand-green font-bold text-sm uppercase tracking-widest mb-2">Technical Review By</p>
                            <h3 className="text-3xl font-poppins font-bold mb-4">{ownerName}</h3>
                            <p className="text-gray-600 leading-relaxed mb-6 font-medium">
                                Robert oversees large-scale commercial painting operations in Spokane, ensuring all facility projects meet rigorous industrial standards for safety, durability, and business continuity.
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

export default CommercialPaintingPage;
